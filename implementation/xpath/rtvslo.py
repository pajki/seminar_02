from json import dumps

from implementation.xpath.xpath import XpathParser


class RtvsloParser(XpathParser):

    def __init__(self, page):
        XpathParser.__init__(self, page)

    def run(self):
        """
        Parse the document and return JSON with required data.
        """
        self.open_html()

        author = self.content.xpath("//*[@id='main-container']/div[3]/div/div[1]/div[1]/div")[0].text
        published_time = self.content.xpath("//*[@id='main-container']/div[3]/div/div[1]/div[2]")[0].text
        title = self.content.xpath("//*[@id='main-container']/div[3]/div/header/h1")[0].text
        sub_title = self.content.xpath("//*[@id='main-container']/div[3]/div/header/div[2]")[0].text
        lead = self.content.xpath("//*[@id='main-container']/div[3]/div/header/p")[0].text
        content = " ".join([x.text for x in self.content.xpath("//*[@id='main-container']/div[3]/div/div[2]/article/p") if x.text])

        result = {
            "author": author,
            "published_time": published_time,
            "title": title,
            "sub_title": sub_title,
            "lead": lead,
            "content": content,
        }

        return dumps(result)


if __name__ == "__main__":
    op = RtvsloParser("rtvslo.si/Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html")
    print(op.run())
    op = RtvsloParser("rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html")
    print(op.run())
