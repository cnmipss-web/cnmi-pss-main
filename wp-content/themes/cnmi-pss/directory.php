<?php

/**
 * Template Name: Directory Page
 * 
 * The template for displaying a complete directory of district offices.
 * 
 */

$directory_query = new WP_Query(array(
    'post_type' => 'contact_info',
    'meta_query' => array(
        'relation' => 'AND',
        'office_clause' => array(
            'key' => 'office',
            ),
        'rank_clause' => array(
            'key' => 'rank',
        ),
    ),
    'orderby' => array(
        // 'office_clause' => 'ASC',
        'rank_clause' => 'ASC',
    ),
    'posts_per_page' => '-1',
));
$current_office = "";

 get_header(); ?>

 <div id="primary" class="content-area">
    <main id="main" class="site-main">
        <br />
        <div class="container">
            <div class="row" style="">
                <div class="col-xs-12">
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
                        </div><!-- .entry-content -->
                        <footer class="page-entry-content col-xs-12 col-sm-10 col-sm-push-1" >
                            <!-- <i id="all-caret"
                                    class="fa fa-caret-down"></i> -->
                            <button id="all-caret-button"
                                class="btn btn-default"
                                onclick="flipAll()"
                                data-expanded="true">
                                Collapse All
                            </button>    
                        </footer>   
                    </article>
                    <div style="display: none;">
                        <table>
            <?php
            while($directory_query->have_posts()):
                $directory_query->the_post();?>
                  
                <?php 
                if ($current_office != sanitize_title(get_field('office'))) {
                    $current_office = sanitize_title(get_field('office'));
                    ?>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row directory-entry">
                <div class="col-xs-12 col-sm-10 col-sm-push-1">
                    <header class="page-entry-header directory-entry__header" >
                        <i id="<?php echo $current_office?>-caret"
                                class="fa fa-caret-down"></i>
                        <a
                        role="button"
                        href="#<?php echo $current_office ?>-table"
                        data-toggle="collapse"
                        aria-controls="<?php echo $current_office ?>-table"
                        aria-expanded="true"
                        onclick="flipCaret('#<?php echo $current_office?>-caret')">
                            <h2><?php the_field('office') ?></h2>
                        </a>    
                    </header>
                    <div class=" collapse in"
                        id="<?php echo $current_office ?>-table">
                        <table class="directory-table">
                            <thead>
                                <tr class="directory-table__header-row">
                                    <th scope="col">Name</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Telephone</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                <?php } ?>
                                <tr class="directory-table__entry-row">
                                    <td> <?php the_title(); ?> </td>
                                    <td> <?php the_field('job_title'); ?> </td>
                                    <td> <?php the_field('telephone'); ?> </td>
                                    <td> <?php the_field('email'); ?> </td>
                                </tr>
            <?php
             endwhile;?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script> 
        function flipAll() {
            var $ = jQuery;
            var button = $("#all-caret-button");
            var offices = $('header.directory-entry__header > a[role="button"][data-toggle="collapse"]');

            if (button.attr('data-expanded') == 'true') {
                offices.filter(function() {
                    return ($(this).attr('aria-expanded') == 'true')
                }).click();
                button.html("Expand All")
                button.attr('data-expanded', 'false');
            } else {
                offices.filter(function() {
                    return ($(this).attr('aria-expanded') == 'false')
                }).click();
                button.html("Collapse All")
                button.attr('data-expanded', 'true');
            }

        }

        function flipCaret(id) {
            var el = jQuery(id);
            if (el.hasClass("fa-caret-down")) {
                jQuery(id).removeClass("fa-caret-down");
                jQuery(id).addClass("fa-caret-right");
            } else {
                jQuery(id).removeClass("fa-caret-right");
                jQuery(id).addClass("fa-caret-down");                
            }
        }
    </script>
    <!-- #main -->
</div>
<!-- #primary -->

<?php
get_footer();