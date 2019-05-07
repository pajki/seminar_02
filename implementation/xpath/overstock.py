from json import dumps

from implementation.xpath.xpath import XpathParser


class OverstockParser(XpathParser):

    def __init__(self, page):
        XpathParser.__init__(self, page)

    def run(self):
        """
        Parse the document and return JSON with required data.
        """
        self.open_html()
        el_count = len(self.content.xpath("/html/body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr"))
        result = []

        for i in range(0, el_count):
            try:
                title = self.content.xpath("/html/body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[" + str(i) + "]/td[2]/a/b")[0].text
                list_price = self.content.xpath("/html/body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[" + str(i) + "]/td[2]/table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/s")[0].text
                price = self.content.xpath("/html/body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[" + str(i) + "]/td[2]/table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/span/b")[0].text
                content = self.content.xpath("/html/body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[" + str(i) + "]/td[2]/table/tbody/tr/td[2]/span")[0].text
                saving_content = self.content.xpath("/html/body/table[2]/tbody/tr[1]/td[5]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[" + str(i) + "]/td[2]/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span")[0].text.split(" ")
            except IndexError:
                continue
            result.append({
                "title": title,
                "list_price": list_price,
                "price": price,
                "content": content,
                "saving": saving_content[0],
                "saving_percent": saving_content[1][1:-1],
            })

        print("Number of parsed elements: " + str(len(result)))
        return dumps(result)


if __name__ == "__main__":
    op = OverstockParser("overstock.com/jewelry02.html")
    print(op.run())
