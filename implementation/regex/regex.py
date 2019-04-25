from os.path import realpath, dirname


class RegexParser:
    def __init__(self, file_name):
        self.path = dirname(dirname(dirname(realpath(__file__)))) + "/input/" + file_name
        self.content = None

    def open_html(self):
        """
        Open the html page with lxml.
        """
        with open(self.path, encoding="latin1") as f:
            self.content = f.read()


if __name__ == "__main__":
    print("main")
    regex_parser = RegexParser('overstock.com/jewelry02.html')
    regex_parser.open_html()
    print(regex_parser.content)
