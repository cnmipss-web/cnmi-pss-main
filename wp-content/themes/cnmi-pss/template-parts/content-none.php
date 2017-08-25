<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>
<br />
<div class="container">
    <div class="row">
        <section class="no-results not-found">
            <header class="search-page-header">
                <h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'cnmi-pss' ); ?></h1>
            </header><!-- .page-header -->
            <div class="page-content">
                <?php
                if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
                    <p><?php
                       printf(wp_kses(
                           /* translators: 1: link to WP admin new post page. */
                           __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'cnmi-pss' ),
                           array('a' => array('href' => array()))
                       ), esc_url( admin_url( 'post-new.php')));
                       ?></p>                
                <?php elseif ( is_search() ) : ?>
                    <p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'cnmi-pss' ); ?></p>
                <?php
                get_search_form();
                else : ?>
                    <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'cnmi-pss' ); ?></p>
                <?php
                get_search_form();
                
                endif; ?>
                <script>
                 // Apply Bootstrap Classes to Search Form
                 jQuery('form').addClass('form-inline');
                 jQuery('input.search-field').addClass('form-control');
                 jQuery('input.search-submit').addClass('btn btn-default')
                </script>
            </div>
        </section><!-- .no-results -->
    </div><!-- .page-content -->
    <br />
</div>
