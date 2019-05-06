from os.path import realpath, dirname
from bs4 import BeautifulSoup, Comment, Tag, NavigableString


def parse(doc1, doc2):
    if not doc1 and doc2:
        return

    # Same tag but different content
    if doc1.name == doc2.name:

        # Check for string mismatch before possible children tags
        if type(doc1.contents[0]) is NavigableString and doc1.contents[0] != "\n" and doc1.contents[0] != doc2.contents[0]:
            doc1.contents[0] = NavigableString("#DATA")

        # Check for string mismatch after
        if len(doc1.contents) > 2 and type(doc1.contents[-1]) is NavigableString and doc1.contents[-1] != "\n" and doc1.contents[-1] != \
                doc2.contents[-1]:
            doc1.contents[-1] = NavigableString("#DATA")

        children1 = list(filter(lambda x: type(x) == Tag, list(doc1.children)))
        children2 = list(filter(lambda x: type(x) == Tag, list(doc2.children)))

        # Tag mismatch - check for recursive tags (eg. paragraphs)
        if len(children1) != len(children2):
            tag_name = children1[0].name
            if all(c.name == tag_name for c in children1):
                doc1.string = "(<"+tag_name+">#DATA</"+tag_name+">)+"
                return

        for i in range(len(children1)):
            parse(children1[i], children2[i])
        return

    # Tag mismatch*
    else:
        doc1.string = "("+str(doc2)+")?\n" + doc1.string
        return parse(doc1, doc2.next_sibling)


def tag_is_sibling_of(test, other):
    for t in other.next_siblings:
        if t == test:
            return True
    return False


def skip_nl(doc):
    if type(doc) is NavigableString:
        if doc.string == "\n":
            return skip_nl(doc.next_element)
        else:
            return doc
    else:
        return doc


class RoadRunner:
    def __init__(self, file_name_1, file_name_2, css1, css2,
                 ignored_tags=['script', 'iframe', 'style', 'input', 'img', 'link', 'svg', 'figure']):
        path_input = dirname(dirname(dirname(realpath(__file__)))) + "/input/"
        self.path_1 = path_input + file_name_1
        self.path_2 = path_input + file_name_2
        self.content_1 = None
        self.content_2 = None
        self.css1 = css1
        self.css2 = css2
        self.ignored_tags = ignored_tags

    def open_html(self):
        self.content_1 = open(self.path_1, encoding="latin1").read()
        self.content_2 = open(self.path_2, encoding="latin1").read()

    def pre_process(self, content, css):
        soup = BeautifulSoup(content, 'lxml')

        # Select content with CSS selector
        soup = soup.select(css)[0]

        # Remove tags
        [s.extract() for s in soup.find_all(self.ignored_tags)]

        # Remove comments
        [s.extract() for s in soup(text=lambda text: isinstance(text, Comment))]

        # Remove all attributes
        soup.attrs = {}
        for tag in soup.find_all(True):
            tag.attrs = {}

        # Remove all tags without content
        for tag in soup.find_all(True):
            if tag.get_text().replace("\n", "").replace("\t", "") == "":
                tag.extract()

        return soup

    def run(self):
        self.open_html()

        doc1 = self.pre_process(self.content_1, self.css1)
        doc2 = self.pre_process(self.content_2, self.css2)

        # print(doc2.prettify())
        parse(doc1, doc2)

        return doc1


if __name__ == "__main__":
    # rr = RoadRunner("rtvslo.si/Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html",
    #                "rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html",
    #                "body > div:nth-of-type(8) > div:nth-of-type(3) > div",
    #                "body > div:nth-of-type(9) > div:nth-of-type(3) > div").run()

    rr = RoadRunner("overstock.com/jewelry01.html",
                    "overstock.com/jewelry02.html",
                    ("body > table:nth-of-type(2) > tbody > tr > td:nth-of-type(5) > table > tbody > "
                     "tr:nth-of-type(2) > td > table > tbody > tr > td > table > tbody > tr"),
                    ("body > table:nth-of-type(2) > tbody > tr > td:nth-of-type(5) > table > tbody > "
                     "tr:nth-of-type(2) > td > table > tbody > tr > td > table > tbody > tr")).run()

    print(rr.prettify(formatter=None))
