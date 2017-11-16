import scrapy


class LinkItem(scrapy.Item):
    url = scrapy.Field()
    status = scrapy.Field()
    link_text = scrapy.Field()


class ImagesItem(scrapy.Item):
    sources = scrapy.Field()
