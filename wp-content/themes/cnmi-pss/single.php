<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package CNMI_PSS
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<br />
		<div class="container">
			<?php
			if ( have_posts() ) :
				/* Start the Loop */
				while (have_posts()) : the_post();?>
				 <div class="row">
					 <?php
						/*
						* Include the Post-Format-specific template for the content.
						* If you want to override this in a child theme, then include a file
						* called content-___.php (where ___ is the Post Format name) and that will be used instead.
						*/
						get_template_part( 'template-parts/content', get_post_format() );
					 ?>
				 </div>
			 <?php
				endwhile;
				cnmi_posts_navigation();
			else :
				get_template_part( 'template-parts/content', 'none' );
			endif; ?>
		</div>
	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
