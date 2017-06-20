<?php get_header(); ?>

	<div id="frame">
	
		<div id="crumbs"><?php echo '<p>'; wpzoom_breadcrumbs(); echo'</p>'; ?></div>
	
		<div id="content">
		
			<div id="main">
			          
				<div class="single">

					<h1 class="archive"><?php _e('Error 404 - Page Not Found', 'wpzoom'); ?></h1>
					<p><?php _e('The page you are looking for could not be found.', 'wpzoom');?> </p>
					<?php get_search_form(); ?>
					
					<div class="cleaner">&nbsp;</div>
					<div class="divider">&nbsp;</div>
		
					<h2><?php _e( 'Browse Categories', 'wpzoom' ); ?></h2>
					<ul>
						<?php wp_list_categories('title_li=&hierarchical=0&show_count=1'); ?>	
					</ul>
				
					<h2><?php _e( 'Monthly Archives', 'wpzoom' ); ?></h2>
					<ul>
						<?php wp_get_archives('type=monthly&show_post_count=1'); ?>	
					</ul>

				</div><!-- .single -->
				          
			</div><!-- end #main -->
			          
			<div id="sidebar">
			          
				<?php get_sidebar(); ?>
			          
			</div><!-- end #sidebar -->
			 
			<div class="cleaner">&nbsp;</div>
		</div><!-- end #content -->
	
	</div><!-- end #frame -->

<?php get_footer(); ?>
