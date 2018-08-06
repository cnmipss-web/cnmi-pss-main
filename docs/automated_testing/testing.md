# Automated Testing

In order to monitor and ensure the continued functionality of the CNMI PSS District Website, a number of automated testing systems are employed.

## Selenium Testing

Selenium is an open source software suite for automating actions in a web browser.  It is used to check that certain actions can be performed on the CNMI PSS District Website by users accessing that site.  If, for one reason or another, some part of the website's functionality has failed, these tests are meant to detect that and notify the webmaster automatically.

### Test Files

The Selenium-driven tests are located in the `test/cnmipss_tests/` directory of the `cnmipss-main` district website source code repository.  This repository is currently hosted on Github: [cnmipss-main](https://github.com/cnmipss-web/cnmi-pss-main).  The `run_tests.py` file in that directory will run all the tests and email the results to the CNMI PSS Webmaster.  Currently, the Linode server is configured to automatically run the `run_tests.py` script at the beginning of every week as a cron job.

### Testcases

* Homepage Tests:
    * Site navigation menu exists
    * Site navigation menu items exist and all have text
    * Site navigation menu items are either links or dropdowns containing links
    * Top level menu items have text that is withing prescribed set of correct menu options
    
    * Links to all individual schools exist on the page
    * There are a total of 33 links to schools including Head Start & Early Intervention
    * All links to schools have text.

    * A photo grid of links to recent news stories exist.
    * Each item in the grid contains a link to a recent news article.
    * The first 3 links contain images and text banners.
    * Remaining links are text-only and do not contain images.
    * All image sources work and return status code 200

    * A search form exists
    * The search form correctly submits to `cnmipss.org/`
    * The search input is named `s`

* News Page Tests:
    * There is only one h1 tag on the page
    * Each article has a single h2 tag
    * There are two extra h2 in the page footer
    * All images load correctly.
    * Every article has a featured image.

* Valid Url Tests (depends on stored output from scrapy crawler):
    * No broken links in the entire website
    * No broken image sources in the entire website

## Scrapy Crawler

Scrapy is used to monitor the CNMI PSS District Website for broken links and images.  The scrapy crawlers are located in the `test/cnmipss_tests/crawler` directory of the cnmipss-main source repository.  These crawlers can be run manually with the commands `scrapy crawl images` and `scrapy crawl links`.  Currently the Linode server is configured to run these crawlers weekly as a cron job prior to running the selenium tests.

## axe-crawler Accessibility Testing

The [axe-crawler project](https://github.com/tjscollins/axe-crawler) is used to perform automated accessibility testing of the CNMI PSS District website.  Reports are published in the `/var/www/html/cnmipss.org/public_html/axe-reports/` directory of the Linode server.
