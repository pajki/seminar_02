from json import dumps
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

        # Regex to extract title
        author_regex = r"<div class=\"author-name\">(.*)<\/div>"
        author = re.findall(author_regex, self.content)[0].lstrip()
        # print("author\t", author)

        # Published time
        published_time_regex = r"<div class=\"publish-meta\">(\s.*\s*.*)<\/div>"
        published_time = re.findall(published_time_regex, self.content)[0]
        published_time = re.sub('[^A-Za-z0-9-:.]+', ' ', published_time).replace(' br', ' ').lstrip()
        # print("p_time\t", published_time)

        # Title
        title_regex = r"<h1>(.*)<\/h1>"
        title = re.findall(title_regex, self.content)[0].lstrip()
        # print("title\t", title)

        sub_title_regex = r"<div class=\"subtitle\">(.*)<\/div>"
        sub_title = re.findall(sub_title_regex, self.content)[0].lstrip()
        # print("sub_t\t", sub_title)

        lead_regex = r"<p class=\"lead\">(.*)<\/p>"
        lead = re.findall(lead_regex, self.content)[0].lstrip()
        # print("title\t", lead)

        content_regex = r"<p class=\"Body\">(.*)<\/p>"
        content = ""
        try:
            content = re.findall(content_regex, self.content)[0]
            content = re.sub(re.compile('<.*?>'), '', content)
            # print("content\t", content)
        except Exception:
            pass

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
    op = OverstockParser("rtvslo.si/Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html")
    r = op.run()
    print(r)

    op = OverstockParser("rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html")
    r = op.run()
    print(r)
