# CNMI Public School System District Website

This repository contains source code for the CNMI Public School System District Website.  It includes a full WordPress installation, custom theme, custom SCSS and Clojurescript code, and functional tests using Selenium written in Python.  The code is deployed by pushing to a repository on the linux server that hosts the website.

# WordPress Installation

[![WordPress Version](https://img.shields.io/badge/WordPress-4.9.1-blue.svg?style=flat-square)](https://shields.io/) [![PHP](https://img.shields.io/badge/PHP-%3E%3D7.0.22-green.svg?style=flat-square)](https://shields.io/) 

The repository's root directory contains the full WordPress Installation.

## Updates

Updates should be applied to a local testing server and committed to the repository before being pushed to the production server.  Updates should never be applied directly to the production server as doing so will cause the production server and repository to diverge.  This will cause problems when pushing new development work to production at a later date.  The process should be done as follows:

1. Download the newest WordPress version from the [wordpress download page](https://wordpress.org/download/).
2. Check that repository is on the hotfix branch.  If not, switch to and update the hotfix branch by running `git checkout hotfix && git merge master`.  Security updates should be applied to the hotfix branch and merged back onto master after testing.
2. Unzip the new Wordpress version over the repository using `unzip wordpress_file.zip -d /path/to/local/repository`.
4. Assuming that functional tests all still pass, commit the changes using `git commit -am 'New Wordpress version X.X.X'`.
3. Run functional tests against the test site using `pytest` (see below for more info).  If functional tests fail, address failing tests before merging updates to master.  Commit any fixes required.
4. When all functional tests are passing, run BackstopJS for visual regression testing by running `backstop test`.
5. If all backstop tests pass, or if visual changes are acceptable, merge hotfix branch onto the master branch: `git checkout master && git merge hotfix`.
5. Push updates to production with `git push production`.
6. Push updates to origin with `git push origin`.
7. Merge updates onto development branch: `git checkout development && git merge master`

The same process should be followed for both updates to WordPress itself and to any plugins that require updating.  Following this process ensures that production, testing, and development servers will stay in sync.

## Custom Theme Code

Themes are located in `wp-content/themes/`.  This repository includes some WordPress default themes and two custom themes, `cnmi-pss` and `cnmi-pss-school`.

### CNMI-PSS Theme

This theme is used for the main district website.  The theme includes custom PHP, SCSS, and Clojurescript code.

#### PHP

The key files with custom PHP code in this theme are:

1. `front-page.php` Renders the main content of the front page. 
2. `header.php`  Renders the navigation header on every page.
3. `footer.php` Renders the footer on every page, including the *Notice to Persons with Disabilities* that is included on every page.
4. `interactive.php` Template for pages relying on interactive Clojurescript functionality.  Provides a `<div id="react-app">` element for a React application to render in, which defaults to a loading graphic.  If Javascript is disabled by the user-agent, a noscript tag is used to provide a message to the user.
5. `reports.php` Template for pages that use a tabbed container to organize content.
6. `single-contact_info.php` Template that renders contact info pages for Central Office personnel and programs.
7. `single-school.php` Template that renders contact info for school administration.
8. `template-parts/content-contact.php` Template partial that renders bottom of page contact information.
9. `template-parts/content-tabs.php` Template partial that renders content in tabbed container.  Used by `reports.php`.
10. `template-parts/info-contact.php` Template partial that renders contact information on contact info pages.
11. `template-parts/info-school.php` Template partial that renders school administration contact information.

Most other PHP code is boilerplate from the [underscores wordpress starter theme](https://underscores.me/).

#### SCSS

The SCSS code for this theme is located in `wp-content/themes/cnmi-pss/scss/` and is organized using the SMACSS system as a guideline:

1. `base` scss files contain variable declarations, mixins, breakpoints, and default reset rules that underlie that are used by other scss files.
2. `layout` scss files contain style rules governing width, height, position, margins, etc. for large sections of content.
3. `modules` scss files contain style rules organized by the type of element they style (e.g. buttons, tab-panels, inputs, modals, etc.)
4. `state` scss files contain style rules that depend on user interaction and input (e.g. active vs inactive, expanded vs hidden)

SCSS styles are compiled to CSS using custom gulp tasks defined in `gulpfile.js` in the repository's root directory.  The default and watch tasks compile CSS files with sourcemaps, while the production task compiles CSS files without sourcemaps

#### Clojurescript

Clojurescript was chosen over ES6 for this theme because of its functional paradigm and fantastically simple re-frame wrapper for react/redux.  Clojurescript is primarily only used on pages that use the `interactive.php` template.  On most other pages the only interactive functionality is provided by Bootstrap and jQuery.

### CNMI-PSS-SCHOOL Theme

This theme is currently under development to be used for school websites hosted on the district webserver.  Like the `cnmi-pss` theme, this theme uses custom PHP, SCSS, and Clojurescript code.

#### PHP

#### SCSS

#### Clojurescript

## Testing

### Functional Tests w/ Selenium

[![Python Version](https://img.shields.io/badge/Python-3.6-blue.svg?style=flat-square)](https://shields.io/) 

Functional tests test various aspects of the website's functionality.  They can be run by executing the command `pytest` from the `test/cnmipss_tests/` directory of the repository.

### CSS Testing w/ BackstopJS

Visual regression testing of CSS changes is performed using [BackstopJS](https://github.com/garris/BackstopJS).  Backstop should be run any time changes are made to SCSS files or PHP files.  If visual changes are found, they should be checked to ensure that only intended changes have occurred.