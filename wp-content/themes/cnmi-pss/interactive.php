<?php
/**
 * Template Name: Interactive Page
 *
 * The template for displaying open JVAs for CNMI PSS
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
                <div class="row">
                    <div class="col-xs-12 col-sm-10 col-sm-push-1">
                        <header>
                            <h1 class="page-title">
                                <?php the_title(); ?>
                            </h1>
                        </header>
                        <?php the_content(); ?>
                    </div>
                </div>
                <?php react_app_loading_component(); ?>                
                <div class="row">
                    <div class="col-xs-12 col-sm-10 col-sm-push-1">
                        <?php get_template_part( 'template-parts/info', 'contact' ); ?>
                    </div>
                </div>
            <?php
            endif;
            ?>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->
<?php
get_footer();
