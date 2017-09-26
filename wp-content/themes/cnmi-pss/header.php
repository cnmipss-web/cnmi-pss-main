<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CNMI_PSS
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="stylesheet" id="webfonts-css" href="//fonts.googleapis.com/css?family=Roboto%3A300%2C400%2C400italic%2C500%2C500italic%2C700%2C700italic&amp;ver=694b2c0e61cf50a3db658b64c7530031" type="text/css" media="all">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="/wp-content/dist/css/main.css" />
    <!-- <script src="https://cdn.accesslint.com/accesslint-1.1.2.js"></script> -->
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>
    <div id="page" class="site">
      <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'cnmi-pss'); ?></a>

      <header id="masthead" class="site-header" role="banner">
        <div class="site-branding container">
          <div class="row">
            <div class="col-xs-12 col-md-6 header-image">
                <a href="<?php echo esc_url(home_url('/')); ?>"
                  rel="home">
                  <p class="screen-reader-text"><?php bloginfo('name'); ?></p>
                  <img src=<?php header_image(); ?> alt="<?php bloginfo('description'); ?>" />
                </a>
            </div>
            <div class="header-help col-xs-12 col-sm-6 col-md-2">
              <p>
                Questions? <br />
                Call 670-237-3061
              </p>
            </div>
            <div class="header-search col-xs-0 col-sm-6 col-md-4">
                <?php cnmi_search_form('header'); ?>
            </div><!-- end .search-form -->
          </div>
        </div><!-- .site-branding -->

        <nav id="site-navigation" class="main-navigation navbar" role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <?php cnmi_search_form('nav'); ?>

              <button type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#menu-main"
                aria-controls="menu-main"
                aria-expanded="false" >
                <span class="screen-reader-text">Toggle navigation</span>
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>

            </div>
            <div class="collapse navbar-collapse in" id="menu-main" aria-expanded="true" >
              <ul role="menu" class="nav navbar-nav nav-menu">
                <li role="menuitem">
                    <a href="/news" > PSS News </a>
                </li>
                <?php cnmi_header_dropdown('Students & Parents'); ?>
                <?php cnmi_header_dropdown('Employees'); ?>
                <?php cnmi_header_dropdown('Community'); ?>
                <?php cnmi_header_dropdown('District Information'); ?>
                <?php cnmi_header_dropdown('Public Reports'); ?>
              </ul>
              <?php /*noscript_header_links('Students & Parents'); */ ?>
              <?php /*noscript_header_links('Employees'); */ ?>
              <?php /*noscript_header_links('Community'); */ ?>
              <?php /*noscript_header_links('District Information'); */ ?>
              <?php /*noscript_header_links('Public Reports'); */ ?>
              
            </div><!-- /.navbar-collapse -->
          </div>
        </nav><!-- #site-navigation -->
      </header><!-- #masthead -->

      <div id="content" class="site-content">
