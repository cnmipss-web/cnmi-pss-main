import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy.utils.sitemap import Sitemap
from urllib.request import urlopen

from crawler.items import LinkItem

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
        print('Target domain: ', 'localhost')

        # If a link matches multiple rules, the first rule wins.
        self.rules = (
            # If a link is within the target domain, follow it.
            Rule(LinkExtractor(allow_domains=['localhost'], unique=True),
                 callback='parse_item',
                 process_links='clean_links',
                 follow=True),
            # Crawl external links and don't follow them
            Rule(LinkExtractor(unique=True),
                 callback='parse_item',
                 process_links='clean_links',
                 follow=False),
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
        item = LinkItem()
        item['url'] = response.url
        item['status'] = response.status
        item['link_text'] = response.meta.get('link_text')
        yield item
