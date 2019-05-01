from os.path import realpath, dirname
from bs4 import BeautifulSoup, Comment


class RoadRunner:
    def __init__(self, file_name_1, file_name_2, ignored_tags=[]):
        path_input = dirname(dirname(dirname(realpath(__file__)))) + "/input/"
        self.path_1 = path_input + file_name_1
        self.path_2 = path_input + file_name_2
        self.content_1 = None
        self.content_2 = None
        self.ignored_tags = ignored_tags

    def open_html(self):
        self.content_1 = open(self.path_1, encoding="latin1").read()
        self.content_2 = open(self.path_2, encoding="latin1").read()

    def pre_process(self, content):
        soup = BeautifulSoup(content, 'lxml')

        # Get only body
        soup = soup.find('body')

        # Remove tags and content
        [s.extract() for s in soup.find_all(self.ignored_tags)]

        # Remove comments
        [s.extract() for s in soup(text=lambda text: isinstance(text, Comment))]

        # Remove attributes
        for tag in soup.find_all(True):
            attrs = dict(tag.attrs)
            for attr in attrs:
                if attr not in ['class']:
                    del tag.attrs[attr]

        return soup

    def run(self):
        self.open_html()

        doc1 = self.pre_process(self.content_1)
        doc2 = self.pre_process(self.content_2)

        print(doc2.prettify())

        return self.content_1


if __name__ == "__main__":
    rr = RoadRunner("rtvslo.si/Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html",
                    "rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html",
                    ignored_tags=['script', 'iframe', 'style', 'input', 'nav', 'img', 'link', 'svg'])
    ret = rr.run()
    #print(ret)
