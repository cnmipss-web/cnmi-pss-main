import unittest
import scrapy
import json
from urllib.parse import urljoin
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from crawler.spiders.links_spider import LinkSpider

SETTINGS = get_project_settings()


class BrokenLinks(unittest.TestCase):

    def test_links(self):
        link_file = open(SETTINGS['LINK_DATA'], 'r')
        for link in link_file.readlines():
            link_data = json.loads(link)
            self.assertLess(link_data['status'], 400)


class ImageSources(unittest.TestCase):

    def test_img_sources(self):
        link_file = open(SETTINGS['IMG_DATA'], 'r')
        link_set = set()
        for data in link_file.readlines():
            json_data = json.loads(data)
            for img in json_data['sources']:
                self.assertLess(img['status'], 400)
