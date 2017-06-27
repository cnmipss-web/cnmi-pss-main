<?php
/**
 * This is the template that displays the news page by default.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cnmi_scholars
 */
 get_header(); ?>

 <div id="primary" class="content-area">
   <main id="main" class="site-main" role="main">
     <h1 class="page-title">PSS News</h1>
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
          <hr />
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
  get_footer();
