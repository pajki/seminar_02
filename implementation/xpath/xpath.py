from os.path import realpath, dirname

from lxml.etree import HTMLParser, parse, HTML


class XpathParser:

    def __init__(self, webpage):
        self.webpage = dirname(dirname(dirname(realpath(__file__)))) + "/input/" + webpage

        self.content = None

    def open_html(self):
        """
        Open the html page with lxml.
        """
        with open(self.webpage, encoding='latin1') as webpage:
            self.content = HTML(webpage.read().replace('\n', ''))
