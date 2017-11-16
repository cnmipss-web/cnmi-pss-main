import unittest
import scrapy
import json
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from crawler.spiders.links_spider import LinkSpider

SETTINGS = get_project_settings()


class BrokenLinks(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        process = CrawlerProcess(settings=SETTINGS)
        process.crawl('links', domain='cnmipss.org')
        process.start()
        process.stop()

    def test_links(self):
        link_file = open(SETTINGS['LINK_DATA'], 'r')
        for link in link_file.readlines():
            link_data = json.loads(link)
            self.assertLess(link_data['status'], 400)


class ImageSources(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        process = CrawlerProcess(settings=get_project_settings())
        process.crawl('images', domain='cnmipss.org')
        process.start()
        process.stop()

    def test_img_sources(self):
        link_file = open(SETTINGS['LINK_DATA'], 'r')
        for link in link_file.readlines():
            link_data = json.loads(link)
            self.assertLess(link_data['status'], 400)
        self.fail()
