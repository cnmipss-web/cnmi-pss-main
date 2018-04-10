"""
    Test for invalid URLs in-use on cnmipss.org
"""

import json
import pprint
import unittest
from scrapy.utils.project import get_project_settings

SETTINGS = get_project_settings()


class BrokenLinks(unittest.TestCase):
    "Test for broken links on all pages of cnmipss.org"

    def setUp(self):
        self.broken_links = {}

    def tearDown(self):
        pp = pprint.PrettyPrinter(depth=3, indent=1)
        err_msg = "Broken links found: \n" + pp.pformat(self.broken_links)
        self.assertEqual({}, self.broken_links,
                        msg=err_msg)

    def test_no_broken_links(self):
        link_file = open(SETTINGS['LINK_DATA'], 'r')
        for data in link_file.readlines():
            link_data = json.loads(data)
            page = link_data['page']
            for link in link_data['links']:
                err_msg = 'Broken link: ' + str(link)
                try:
                    self.assertLess(link['status'], 400,
                                    msg=err_msg)
                except AssertionError as err:
                    if isinstance(self.broken_links.get(page), list):
                        self.broken_links[page].append(err)
                    else:
                        self.broken_links[page] = [err]


class ImageSources(unittest.TestCase):
    "Test for images with bad source URLs on all pages of cnmipss.org"

    def setUp(self):
        self.bad_image_sources = []

    def tearDown(self):
        self.assertEqual([], self.bad_image_sources,
                         msg="Broken image sources found")

    def test_no_broken_img_sources(self):
        link_file = open(SETTINGS['IMG_DATA'], 'r')
        for data in link_file.readlines():
            json_data = json.loads(data)
            for img in json_data['sources']:
                err_msg = 'Broken image source ' + str(img)
                try:
                    self.assertLess(img['status'], 400,
                                    msg=err_msg)
                except AssertionError as err:
                    self.bad_image_sources.append(err)
