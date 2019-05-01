from os.path import realpath, dirname


class RoadRunnerParser:
    def __init__(self, file_name_1, file_name_2):
        path_input = dirname(dirname(dirname(realpath(__file__)))) + "/input/"
        self.path_1 = path_input + file_name_1
        self.path_2 = path_input + file_name_2
        self.content_1 = None
        self.content_2 = None

    def open_html(self):
        self.content_1 = open(self.path_1, encoding="latin1").read()
        self.content_2 = open(self.path_2, encoding="latin1").read()
