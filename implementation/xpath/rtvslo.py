from json import dumps

from lxml.etree import tostring

from implementation.xpath.xpath import XpathParser


class OverstockParser(XpathParser):

    def __init__(self, page):
        XpathParser.__init__(self, page)

    def run(self):
        """
        Parse the document and return JSON with required data.
        """
        self.open_html()

        # author = str(tostring(self.content.xpath("/html/body/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]")[0]))
        author = self.content.xpath("/html/body/div[8]/div[3]/div[1]/div[1]/div[1]/div[1]")[0].text
        published_time = self.content.xpath("/html/body/div[8]/div[3]/div[1]/div[1]/div[2]")[0].text
        title = self.content.xpath("/html/body/div[8]/div[3]/div/header/h1")[0].text
        sub_title = self.content.xpath("/html/body/div[8]/div[3]/div/header/div[2]")[0].text
        lead = self.content.xpath("/html/body/div[8]/div[3]/div/header/p")[0].text

        current = self.content.xpath("/html/body/div[8]/div[3]/div/div[2]")[0]

        print(current.text)
        print(tostring(current))
        print(str(tostring(current)).find("Bonda"))

        result = {
            "author": author,
            "published_time": published_time,
            "title": title,
            "sub_title": sub_title,
            "lead": lead,
            "content": "",
        }

        return dumps(result)


if __name__ == "__main__":
    op = OverstockParser("rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html")
    print(op.run())
