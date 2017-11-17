import unittest
import scrapy
import json
from urllib.parse import urljoin
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from crawler.spiders.links_spider import LinkSpider

SETTINGS = get_project_settings()


class BrokenLinks(unittest.TestCase):

    def setUp(self):
        self.broken_links = []

    def tearDown(self):
        self.assertEqual([], self.broken_links,
                         msg="Broken links found")

    def test_no_broken_links(self):
        link_file = open(SETTINGS['LINK_DATA'], 'r')
        for link in link_file.readlines():
            link_data = json.loads(link)
            err_msg = 'Broken link: ' + str(link_data)
            try:
                self.assertLess(link_data['status'], 400,
                                msg=err_msg)
            except AssertionError as err:
                self.broken_links.append(err)


class ImageSources(unittest.TestCase):

    def setUp(self):
        self.bad_image_sources = []

    def tearDown(self):
        self.assertEqual([], self.bad_image_sources,
                         msg="Broken image sources found")

    def test_no_broken_img_sources(self):
        link_file = open(SETTINGS['IMG_DATA'], 'r')
        link_set = set()
        for data in link_file.readlines():
            json_data = json.loads(data)
            for img in json_data['sources']:
                err_msg = 'Broken image source ' + str(img)
                try:
                    self.assertLess(img['status'], 400,
                                    msg=err_msg)
                except AssertionError as err:
                    self.bad_image_sources.append(err)
