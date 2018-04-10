import re
from urllib.request import urlopen

from bs4 import BeautifulSoup
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy.utils.sitemap import Sitemap
import scrapy

from crawler.items import LinksItem

# Follows urls on target domain and saves url, status, and referrer.
#
# note that target_domain must not have http://
#
# scrapy crawl link_spider -o items.json
#                          -a arg_start_urls=url/to/start_urls.txt
#                          -a arg_target_domain=example.com


class LinkSpider(CrawlSpider):
    name = "links"
    custom_settings = {
        'ITEM_PIPELINES': {
            'crawler.pipelines.DuplicateLinksPipeline': 250,
            'crawler.pipelines.CheckLinkStatusPipeline': 375,
            'crawler.pipelines.JsonWriterPipeline': 500,
        }
    }

    # urllib2 is sync however we're only using these methods once to initialize the crawler.
    @staticmethod
    def remote_file_to_array(url):
        # read, split, filter, return all non-empty lines
        return urlopen(url).read().splitlines()

    @staticmethod
    def sitemap_to_array(url):
        results = []
        body = urlopen(url).read()
        sitemap = Sitemap(body)
        for item in sitemap:
            results.append(item['loc'])
        return results

    # __init__ is called to get the spider name so avoid doing any extra work
    # in init such as downloading files.
    #
    # args are automatically made available to the spider.

    def start_requests(self):
        # update rules
        # load target domain and then use it once to define the rules
        # target domain is a string value.
        allowed_domains = [
            "localhost",
            "cnmipss.org",
            "www.cnmipss.org",
        ]

        # If a link matches multiple rules, the first rule wins.
        self.rules = (
            # If a link is within the target domain, follow it.
            Rule(
                LinkExtractor(allow_domains=allowed_domains, unique=True),
                callback=self.parse_item,
                process_links=self.clean_links,
                follow=True
            ),
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
    def parse_item(self, response):
        links_item = LinksItem()
        try:
            soup = BeautifulSoup(response.body, 'html.parser')
            links = soup.find_all(name='a')
            links_item['links'] = [link.get('href') for link in links]
            links_item['page'] = response.url
        except Exception as err:
            print('EXCEPTION:', err)
        yield links_item
