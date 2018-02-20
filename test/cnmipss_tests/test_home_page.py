import unittest
import re
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

import settings

class HomePageTests(unittest.TestCase):
    """
    Functional tests for cnmipss.org home page
    """

    @classmethod
    def setUpClass(cls):
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        cls.browser = webdriver.Chrome(chrome_options=chrome_options)
        cls.browser.get(settings.URL)

    @classmethod
    def tearDownClass(cls):
        cls.browser.quit()

    def test_page_title(self):
        self.assertIn('CNMI', self.browser.title)
        self.assertIn('Public School System', self.browser.title)

    def test_page_navigation(self):
        nav_element = self.browser.find_element_by_css_selector(
            'nav#site-navigation')

        # Site navigation exists
        self.assertIsNotNone(nav_element)

        # Menu items exist and have text
        menu_items = self.browser.find_elements_by_css_selector(
            'nav#site-naviation li[role="menuitem"]')

        self.assertIsNotNone(menu_items)
        self.assertEqual(
            [x for x in menu_items if x.getText() is not None],
            menu_items)

        # Menu items are links or dropdowns
        self.assertEqual(
            [x for x in menu_items if x.find_element_by_css_selector(
                '& > a') is not None or x.get_attribute('class') == 'dropdown'],
            menu_items)

        # Each nav-link is unique
        nav_links = [x.find_element_by_css_selector('& > a') 
                    for x in menu_items 
                        if x.find_element_by_css_selector('& > a') is not None]
        
        nav_link_props = [(x.text, x.get_attribute('href')) for x in nav_links]

        self.assertEqual(len(nav_link_props), len(set(nav_link_props)), msg="nav-links should be unique")
        

        # Top Level Menu options are all one of:
        CORRECT_MENU_CATEGORIES = [
            'PSS News', 
            'Students & Parents', 
            'Employees', 'Community', 
            'District Information', 
            'Public Reports'
        ]
        menu_categories = self.browser.find_elements_by_css_selector(
            '#menu-main > ul > li'
        )
        self.assertEqual(
            len([x for x in menu_categories if x.text in CORRECT_MENU_CATEGORIES]),
            len(menu_categories)
        )




    def test_school_links(self):
        school_links = self.browser.find_element_by_css_selector(
            'div.school-links'
        ).find_elements_by_css_selector('a.btn.btn-school')

        # School links exist
        self.assertIsNotNone(school_links)

        # There are 33 links, including Head Start & Early Intervention
        self.assertEqual(len(school_links), 33)

    def test_recent_news_articles(self):
        news_grid = self.browser.find_element_by_css_selector('div.news-grid')

        # News grid exists
        self.assertIsNotNone(news_grid)

        # New grid contains links to recent news articles
        news_links = news_grid.find_elements_by_css_selector('a')

        self.assertIsNotNone(news_links)

        # First 3 links contain images and banners
        img_links = news_links[:3]

        self.assertEqual(
            [x for x in img_links if x.find_element_by_tag_name(
                'img') is not None],
            img_links,
        )
        self.assertEqual(
            [x for x in img_links if x.find_element_by_css_selector(
                'h2.news-grid-title') is not None],
            img_links,
        )

        # Remaining links are text-only and do not contain images
        non_img_links = news_links[3:]
        self.assertEqual(
            [x for x in non_img_links if x.find_element_by_tag_name(
                'img') is None],
            non_img_links,
        )
        self.assertEqual(
            [x for x in non_img_links if x.find_element_by_css_selector(
                'a[title="Link to article"]') is not None],
            non_img_links,
        )

        # Check img sources:
        for link in img_links:
            source = link.find_element_by_tag_name('img').get_attribute('src')
            response = requests.head(source)
            self.assertEqual(response.status_code, 200)

    def test_search_form(self):
        search_form = self.browser.find_element_by_css_selector('#masthead form[role="search"]')

        # Search form exists
        self.assertIsNotNone(search_form)

        # Search form action is one of regexes:
        VALID_ACTIONS = [
            re.compile('localhost'),
            re.compile('cnmipss.org'),            
        ]
        action = search_form.get_attribute('action')
        self.assertTrue(
            any(regex.search(action) for regex in VALID_ACTIONS)
        )


        # Search input is named 's'
        search_input = search_form.find_element_by_css_selector('input[type="search"]')
        self.assertEqual(
            search_input.get_attribute('name'),
            's'
        )