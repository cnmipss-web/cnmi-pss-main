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
                <header class="row page-entry-header">
                    <div class="col-xs-12">
                        <h1 class="page-entry-title">
                            <?php the_title(); ?>
                        </h1>
                    </div>
                    <div class="col-xs-12 col-sm-10 col-sm-push-1">
                        <?php the_content(); ?>
                    </div>
                </header>
                <div class="row">
                    <div id="react-app" class="searchable-table col-xs-12">
                        <div id="floatingCirclesG">
                            <div class="f_circleG" id="frotateG_01"></div>
                            <div class="f_circleG" id="frotateG_02"></div>
                            <div class="f_circleG" id="frotateG_03"></div>
                            <div class="f_circleG" id="frotateG_04"></div>
                            <div class="f_circleG" id="frotateG_05"></div>
                            <div class="f_circleG" id="frotateG_06"></div>
                            <div class="f_circleG" id="frotateG_07"></div>
                            <div class="f_circleG" id="frotateG_08"></div>
                        </div>
                    </div>
                </div>
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
