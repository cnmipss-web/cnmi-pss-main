<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="page-entry-header">
	<?php the_title( '<h1 class="page-entry-title">', '</h1>' ); ?>
    </header><!-- .entry-header -->
    
    <div class="page-entry-content col-xs-12 col-sm-10 col-sm-push-1">
	<?php
	the_content();
	wp_link_pages( array(
	    'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cnmi-pss' ),
	    'after'  => '</div>',
	) );
	?>
        
	<?php get_template_part( 'template-parts/info', 'contact' ); ?>
    </div><!-- .entry-content -->
    
    <?php if ( get_edit_post_link() ) : ?>
	<footer class="page-entry-footer col-xs-12">
	    <?php
	    edit_post_link(
		sprintf(
		    wp_kses(
			/* translators: %s: Name of current post. Only visible to screen readers */
			__( 'Edit <span class="screen-reader-text">%s</span>', 'cnmi-pss' ),
			array(
			    'span' => array(
				'class' => array(),
			    ),
			)
		    ),
		    get_the_title()
		),
		'<span class="edit-link">',
		'</span>'
	    );
	    ?>
	</footer><!-- .entry-footer -->
    <?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
