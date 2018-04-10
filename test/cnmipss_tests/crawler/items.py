import scrapy


class LinksItem(scrapy.Item):
    links = scrapy.Field()
    page = scrapy.Field()


class ImagesItem(scrapy.Item):
    sources = scrapy.Field()
