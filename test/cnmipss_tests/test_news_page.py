import unittest
from selenium import webdriver
import requests


class NewsPage(unittest.TestCase):
    """Functional tests for the 'News' page at http://cnmipss.org/news"""

    @classmethod
    def setUpClass(cls):
        cls.browser = webdriver.Chrome()
        cls.browser.get('http://cnmipss.org/news')

    @classmethod
    def tearDownClass(cls):
        cls.browser.quit()

    def test_page_title_and_headers(self):
        """Test for correct title, single h1, and h2 for every article"""
        title = self.browser.title
        header1 = self.browser.find_elements_by_tag_name('h1')
        header2 = self.browser.find_elements_by_tag_name('h2')
        articles = self.browser.find_elements_by_css_selector('article')

        self.assertEqual('News – CNMI PSS District Site', title)
        self.assertEqual(1, len(header1))
        self.assertEqual(len(articles), len(header2))

    def test_news_images(self):
        imgs = self.browser.find_elements_by_css_selector('img')

        # All images load correctly
        for img in imgs:
            source = img.get_attribute('src')
            response = requests.get(source)
            self.assertEqual(response.status_code, 200)

        # Every article has a featured image
        articles = self.browser.find_elements_by_css_selector('article')
        featured_imgs = self.browser.find_elements_by_css_selector(
            'article header img')

        self.assertEqual(len(articles), len(featured_imgs))

    def test_news_count(self):
        pass
