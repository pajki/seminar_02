from os.path import realpath, dirname

from lxml.etree import HTMLParser, parse


class XpathParser:

    def __init__(self, webpage):
        self.webpage = dirname(dirname(dirname(realpath(__file__)))) + "/input/" + webpage

        self.content = None

    def open_html(self):
        """
        Open the html page with lxml.
        """
        with open(self.webpage) as webpage:
            self.content = parse(webpage, HTMLParser())