<?php
/**
 * This is the template that displays the front page by default.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cnmi_scholars
 */
get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <h1 class="sr-only">CNMI PSS Main Page</h1>
        <br/>
        <div class="container news-grid-container">
            <!-- <div class="row">
                 <div class="col-xs-10">
                 <h2>PSS News</h2>
                 </div>
                 <div class="col-xs-2">
                 <a href="/news">All PSS News</a>
                 </div>
                 </div> -->
            <div class="row news-grid">
                <?php
                $news = new WP_Query(array(
                    'posts_per_page' => 3,
                ));
                $news->the_post(); ?>
                <div class="col-xs-12 col-sm-8">
                    <a title="Link to <?php the_title()?> article" href=<?php the_permalink() ?>>
                        <div class="news-grid-card-prime">
                            <h2 class="news-grid-title"><?php the_title(); ?></h2>
                        </div>
                        <?php the_post_thumbnail('full', array('class' => 'news-grid-img-prime')); ?>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-4">
                    <?php 
                    while($news->have_posts()):
                    $news->the_post();?>
                        <div class="col-xs-12" style="padding: 0px; margin-bottom: -6px;">
                            <a title="Link to <?php the_title()?> article" href=<?php the_permalink() ?>>
                                <div class="news-grid-card">
                                    <h2 class="news-grid-title"><?php the_title(); ?></h2>
                                </div>
                                <?php the_post_thumbnail('full', array('class' => 'news-grid-img')); ?>
                            </a>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
            <div class="row more-news-links">
                <?php
                $news_links = new WP_Query(array('posts_per_page' => 3, 'paged' => 2));
                if ($news_links->have_posts()) { ?>
                    <div class="col-xs-2">
                        <div class="col-xs-12">More News:</p></div>
                    </div>
                    <div class="col-xs-10">
                        <?php
                        while($news_links->have_posts()) {
                            $news_links->the_post(); ?>
                            <div class="col-xs-12 col-sm-4 text-center" >
                                <a title="Link to article" href=<?php the_permalink() ?>>
                                    <?php the_title() ?>
                                </a>
                            </div>
                        <?php
                        } ?>
                    </div>
                <?php
                } ?>
            </div>
            <!-- <div class="row">
                 <div class="col-xs-10">
                 <h2>PSS Showcase</h2>
                 </div>
                 </div> -->
            <div class="row">
                <?php
                $showcases = new WP_Query(array(
                    'post_type' => 'showcase',
                    'posts_per_page' => 3,
                ));
                while($showcases->have_posts()):
                             $showcases->the_post();?>
                    <div class="col-xs-4">
                        <h3 class="showcase-grid-title">PSS News: <?php the_title(); ?></h2>
                        <a title="Link to <?php the_title()?> article" href=<?php the_permalink() ?>>
                            <?php the_post_thumbnail('full', array('class' => 'showcase-grid-img')); ?>
                        </a>
                    </div>
                <?php endwhile; ?>
            </div>
        </div>
        
        <div class="container">
            <div class="row school-links">
                <div class="col-xs-12">
                    <h2 class="section-title">Our Schools</h2>
                </div>
                <div class="col-xs-12">
                    <ul class="nav nav-tabs" role="tablist" id="tablist">
                        <li role="presentation"
                            class="active">
                            <a
                                href="#head-start-links"
                                role="tab"
                                aria-controls="head-start-links"
                                data-toggle="tab">
                                Head Start / Early Head Start
                            </a>
                        </li>
                        <li role="presentation"
                            class="active">
                            <a
                                href="#elem-links"
                                role="tab"
                                aria-controls="elem-links"
                                data-toggle="tab">
                                Elementary Schools
                            </a>
                        </li>
                        <li role="presentation"
                            class="active">
                            <a
                                href="#middle-links"
                                role="tab"
                                aria-controls="middle-links"
                                data-toggle="tab">
                                Middle Schools
                            </a>
                        </li>
                        <li role="presentation"
                            class="active">
                            <a
                                href="#high-links"
                                role="tab"
                                aria-controls="high-links"
                                data-toggle="tab">
                                High Schools
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="school-links-tabs">
                        <div role="tabpanel" class="tab-pane fade in active" id="head-start-links">
                            <?php
                            cnmi_create_school_btns(array('Head Start'));
                            ?>
                        </div>
                        <div role="tabpanel" class="tab-pane fade in active" id="elem-links">
                            <?php
                            cnmi_create_school_btns(array('Elementary School'));
                            ?>
                        </div>
                        <div role="tabpanel" class="tab-pane fade in active" id="middle-links">
                            <?php
                            cnmi_create_school_btns(array('Middle School'));
                            ?>
                        </div>
                        <div role="tabpanel" class="tab-pane fade in active" id="high-links">
                            <?php
                            cnmi_create_school_btns(array('Jr Sr High School', 'High School'));
                            ?>
                        </div>
                    </div>
                    <script>
                     (function () {
                         let allTabs = jQuery('#tablist').children();
                         let allPanes = jQuery('.tab-pane');
                         jQuery(allTabs).removeClass('active').removeClass('in');
                         jQuery(allPanes).removeClass('active').removeClass('in');
                         // Set active tab and tabpanel
                         let firstTab = jQuery('#tablist').children()[0];
                         jQuery(firstTab).addClass('active').addClass('in');
                         let firstPane = jQuery(".tab-pane")[0];
                         jQuery(firstPane).addClass('active').addClass('in');
                     })();
                    </script>
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-push-2 col-md-6 col-md-push-3 text-center">
                    <?php cnmi_create_school_btns(array('Early')); ?>
                </div>
            </div>
        </div>
        <br />
    </main><!-- #main -->
  </div><!-- #primary -->

 <?php
 get_footer();
