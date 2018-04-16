<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package CNMI_PSS
 */

get_header(); ?>

  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
      <br />
      <div class="container">
        <div class="row">
          <section class="error-404 not-found">
            <header class="page-header">
              <h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'cnmi-pss' ); ?></h1>
            </header><!-- .page-header -->

            <div class="page-content col-xs-12 col-sm-10 col-sm-push-1">
              <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try a search?', 'cnmi-pss' ); ?></p>

              <?php
              cnmi_search_form('body');
              ?>
              <br />
              <br />
            </div><!-- .page-content -->
          </section><!-- .error-404 -->
        </div>
      </div>
    </main><!-- #main -->
  </div><!-- #primary -->
  
<?php
get_footer();
