<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header col-xs-10 col-xs-push-1">
    <div class="col-xs-12 col-xs-push-12 col-sm-6 col-sm-push-6">
      <?php
      if ( is_singular() ) :
        the_title( '<h1 class="entry-title">', '</h1>' );
        else :
          the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
        endif; ?>
        <?php
        if ( 'post' === get_post_type() ) : ?>
          <div class="entry-meta">
            <?php cnmi_pss_posted_on(); ?>
          </div><!-- .entry-meta -->
        <?php
        endif; ?>
    </div>
    <div class="col-xs-12 col-xs-pull-12 col-sm-6 col-sm-pull-6">
      <?php the_post_thumbnail(); ?>
    </div>
  </header><!-- .entry-header -->

  <div class="entry-content col-xs-12 col-sm-10 col-sm-push-1">
    <?php
      the_content( sprintf(
        wp_kses(
          /* translators: %s: Name of current post. Only visible to screen readers */
          __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'cnmi-pss' ),
          array(
            'span' => array(
              'class' => array(),
            ),
          )
        ),
        get_the_title()
      ) );

      wp_link_pages( array(
        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cnmi-pss' ),
        'after'  => '</div>',
      ) );
    ?>
  </div><!-- .entry-content -->

  <footer class="entry-footer col-xs-12">
    <?php cnmi_pss_entry_footer(); ?>
  </footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
