import scrapy
from scrapy.contrib.linkextractors import LinkExtractor
from scrapy.contrib.spiders import CrawlSpider, Rule
from crawler.items import ImagesItem
from bs4 import BeautifulSoup

from urllib.request import urlopen

# Follows urls on target domain and saves url, status, and referrer.
#
# note that target_domain must not have http://
#
# scrapy crawl link_spider -o items.json
#                          -a arg_start_urls=url/to/start_urls.txt
#                          -a arg_target_domain=example.com


class ImageSpider(CrawlSpider):
    name = "images"

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
        print('Target domain: ', 'cnmipss.org')

        # If a link matches multiple rules, the first rule wins.
        self.rules = (
            # If a link is within the target domain, follow it.
            Rule(LinkExtractor(allow_domains=['cnmipss.org'], unique=True),
                 callback='parse_images',
                 process_links='clean_links',
                 follow=True),
        )
        self._compile_rules()

        start_urls = ['http://cnmipss.org']
        print('First url: ', start_urls[0])

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
        print('Parsing:', response.url)
        images_item = ImagesItem()
        soup = BeautifulSoup(response.body, 'html.parser')
        images_item.source = [img.get('src') for img in soup.find_all('img')]
        print(images_item, soup.find_all('img'))
        yield images_item
