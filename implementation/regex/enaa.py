import re
from json import dumps

from implementation.regex.regex import RegexParser


class EnaaParser(RegexParser):

    def __init__(self, page):
        RegexParser.__init__(self, page)

    def run(self):
        """
        Parse the document and return JSON with required data.
        """
        self.open_html()

        # Title
        title_regex = r"<h1 class=\"deptTitle\">(.*)</h1>"
        title = re.findall(title_regex, self.content)[0].lstrip()
        # print("title\t", title)

        count_regex = r"<span class=\"deptTitle\">\((.*)\)</span>"
        count = re.findall(count_regex, self.content)[0].lstrip()
        # print("count\t", count)

        # Description
        # desc_regex = r"<h1 class=\"deptTitle\">(.*)</h1>"
        # desc = re.findall(desc_regex, self.content)[0].lstrip()
        # print("description\t", desc)


        result = []
        # regex = r"<td valign=\"top\">(\s*.*){5}<\/td>"
        # select all dispalyed elements
        regex = r"<div class=\"productboxinner\">(.*)\s+</div>"
        matches = re.finditer(regex, self.content, re.MULTILINE)

        for matchNum, match in enumerate(matches, start=1):
            # print("\n\nMatch {matchNum}".format(matchNum=matchNum))
            el = match.group()

            # Price
            price_regex = r"<p class=\"enaa-cena\">(.*)</p>"
            price = re.findall(price_regex, el)[0].lstrip().replace("&nbsp", " ")
            # print("price\t", price)

            # Image
            img_src_regex = r"\s<img(.*)src=(.*)\"\sw"
            img_src = re.findall(img_src_regex, el)[0][1]
            # print("img\t", img_src)

            item_title_regex = r"<div class=\"caption-name\">\s<a(.*)>(.*)</a>"
            item_title = re.findall(item_title_regex, el)[0][1].lstrip()
            # print("item_title\t", item_title)

            result.append({
                "price": price,
                "img_src": img_src,
                "item_title": item_title
            })

        tmp = {
            "title": title,
            "count": count,
            "items": result
        }

        # print(tmp)

        return dumps(tmp)


if __name__ == "__main__":
    op = EnaaParser("enaa.com/enaa.html")
    r = op.run()
    print(r)

    op = EnaaParser("enaa.com/enaa2.html")
    r = op.run()
    print(r)
