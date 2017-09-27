<?php
/**
 * Template Name: Reports
 *
 * The template for displaying report collections
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <br />
        <div class="container">
            <?php
            if(have_posts()):
            the_post();?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <div class="row" >
                        <header class="page-entry-header" >
                            <h1 class="page-entry-title">
                                <?php the_title(); ?>
                            </h1>
                        </header>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <?php
                            if (has_post_thumbnail()) { 
                                the_post_thumbnail('full', array('class' => 'col-xs-12'));
                            }
                            ?>                        
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="page-entry-content col-xs-12 col-sm-10 col-sm-push-1">
                            <?php the_content(); ?>
                        </div>
                    </div>
                        
                    <?php get_template_part('template-parts/content', 'tabs'); ?>
                </article>
        </div>
            <?php endif;?>
    </main>
    <!-- #main -->
</div>
<!-- #primary -->

<?php
get_footer();
