from json import dumps

from lxml.html import tostring

from implementation.xpath.xpath import XpathParser


class EnaaParser(XpathParser):

    def __init__(self, page):
        XpathParser.__init__(self, page)

    def run(self):
        """
        Parse the document and return JSON with required data.
        """
        self.open_html()

        title = self.content.xpath("/html/body/div[3]/div/div[3]/h1")[0].text
        count = self.content.xpath("/html/body/div[3]/div/div[3]/span")[0].text[1:-1]

        el_count = len(self.content.xpath("/html/body/div[3]/div/div[3]/div[3]/div"))
        results = []
        for i in range(1, el_count + 1):
            price = self.content.xpath("/html/body/div[3]/div/div[3]/div[3]/div[" + str(i) + "]/div/div[2]/div/a")[0].attrib["title"]
            img_src = self.content.xpath("/html/body/div[3]/div/div[3]/div[3]/div[" + str(i) + "]/div/div[1]/a/img")[0].attrib["src"]
            item_title = self.content.xpath("/html/body/div[3]/div/div[3]/div[3]/div[" + str(i) + "]/div/div[2]/p")[0].text

            results.append({
                "price": price,
                "img_src": img_src,
                "item_title": item_title,
            })

        print("Number of parsed elements: " + str(len(results)))
        return dumps({
            "title": title,
            "count": count,
            "items": results,
        })


if __name__ == "__main__":
    op = EnaaParser("enaa.com/enaa2.html")
    print(op.run())
