import re

from implementation.regex.regex import RegexParser


class OverstockParser(RegexParser):

    def __init__(self, page):
        RegexParser.__init__(self, page)


    def run(self):
        """
        Parse the document and return JSON with required data.
        """
        self.open_html()
        result = []
        # regex = r"<td valign=\"top\">(\s*.*){5}<\/td>"
        # select all dispalyed elements
        regex = r"<td valign=\"top\">\s*<a href(\s*.*){5}<\/td>"
        matches = re.finditer(regex, self.content, re.MULTILINE)

        for matchNum, match in enumerate(matches, start=1):
            print("\n\nMatch {matchNum}".format(matchNum=matchNum))
            el = match.group()
            # print(el)

            # Title
            title_regex = r"<b>(.*)<\/b>"
            title = re.findall(title_regex, el)[0].lstrip()
            print("title\t", title)

            # Price
            price_regex = r"<b>\$(.*)<\/b>"
            price = re.findall(price_regex, el)[0].lstrip()
            print("price\t", price)

            # List price
            list_price_regex = r"<s>(.*)<\/s>"
            list_price = re.findall(list_price_regex, el)[0].lstrip()
            print("l_price\t", list_price)

            # saving
            saving_regex = r"<span class=\"littleorange\">\$(.*)\s"
            saving = re.findall(saving_regex, el)[0].lstrip()
            print("saving\t", saving)

            # saving_percent
            saving_percent_regex = r"<span class=\"littleorange\">\$.*\s\((.*)\)"
            saving_percent = re.findall(saving_percent_regex, el)[0].lstrip()
            print("s_per\t", saving_percent)

            result.append({
                "title": title,
                "list_price": list_price,
                "price": price,
                "saving": saving,
                "saving_percent": saving_percent,
            })

        content_regex = r"<span class=\"normal\">([\s\w.,\-()'\"+;:]*)<br><a"

        matches = re.finditer(content_regex, self.content, re.MULTILINE)

        for matchNum, match in enumerate(matches, start=0):
            for groupNum in range(0, len(match.groups())):
                groupNum = groupNum + 1
                c = match.group(groupNum)
                result[matchNum]['content'] = c.replace('\n', ' ')

        return result


if __name__ == "__main__":
    op = OverstockParser("overstock.com/jewelry01.html")
    r = op.run()
    print(r)

    op = OverstockParser("overstock.com/jewelry02.html")
    r = op.run()
    print(r)
