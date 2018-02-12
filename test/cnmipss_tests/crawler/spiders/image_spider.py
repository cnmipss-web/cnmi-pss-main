import re
from urllib.request import urlopen

from bs4 import BeautifulSoup
import requests
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

from crawler.items import ImagesItem

# Follows urls on target domain and saves url, status, and referrer.
#
# note that target_domain must not have http://
#
# scrapy crawl link_spider -o items.json
#                          -a arg_start_urls=url/to/start_urls.txt
#                          -a arg_target_domain=example.com


class ImageSpider(CrawlSpider):
    name = "images"
    custom_settings = {
        'ITEM_PIPELINES': {
            'crawler.pipelines.DuplicateImagesPipeline': 250,
            'crawler.pipelines.CheckImageStatusPipeline': 375,
            'crawler.pipelines.JsonWriterPipeline': 500,
        }
    }

    # urllib2 is sync however we're only using these methods once to initialize the crawler.
    @staticmethod
    def remote_file_to_array(url):
        # read, split, filter, return all non-empty lines
        return urlopen(url).read().splitlines()

    # __init__ is called to get the spider name so avoid doing any extra work
    # in init such as downloading files.
    #
    # args are automatically made available to the spider.

    def start_requests(self):
        # update rules
        # load target domain and then use it once to define the rules
        # target domain is a string value.
        allowed_domains = [
            re.compile(r"localhost"), 
            re.compile(r"cnmipss.org")
        ]

        # If a link matches multiple rules, the first rule wins.
        self.rules = (
            # If a link is within the target domain, follow it.
            Rule(LinkExtractor(
                allow=allowed_domains,
                unique=True
                ),
                 callback='parse_images',
                 process_links='clean_links',
                 follow=True),
        )
        self._compile_rules()

        start_urls = ['http://localhost']

        for url in start_urls:
            yield scrapy.Request(url, dont_filter=True)

    # rule process_links callback
    def clean_links(self, links):
        for link in links:
            # remove html fragment (#) and query params (?)
            link.fragment = ''
            link.url = link.url.split('#')[0].split('?')[0]
            yield link

    # rule callback
    def parse_images(self, response):
        try:
            soup = BeautifulSoup(response.body, 'html.parser')
            images = soup.find_all(name='img')
            images_item = ImagesItem()
            images_item['sources'] = [img.get('src') for img in images]
        except Exception as err:
            print('EXCEPTION:', err)
        yield images_item
