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
                <div class="col-xs-12 col-sm-10 sm-push-1">
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
                </article>
            <?php
            while($directory_query->have_posts()):
                $directory_query->the_post();?>
                  
                <?php 
                if ($current_office != get_field('office')) {?>
                    <?php 
                    $current_office = get_field('office');?>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-push-1">
                    <header class="page-entry-header" >
                        <h2><?php the_field('office') ?></h2>
                    </header>
                    <table class="directory-table">
                        <tr class="directory-table__header-row">
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Telephone</th>
                            <th scope="col">Email</th>
                        </tr>
                <?php } ?>
                        <tr class="directory-table__entry-row">
                            <td> <?php the_title(); ?> </td>
                            <td> <?php the_field('job_title'); ?> </td>
                            <td> <?php the_field('telephone'); ?> </td>
                            <td> <?php the_field('email'); ?> </td>
                        </tr>
            <?php
             endwhile;?>
                    </table>
                </div>
            </div>
        </div>
    </main>
    <!-- #main -->
</div>
<!-- #primary -->

<?php
get_footer();