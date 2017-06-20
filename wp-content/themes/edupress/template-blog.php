<?php
/**
* Template Name: Blog
*/

get_header();
?>

	<div id="frame">
	
		<div id="crumbs"><?php echo '<p>'; wpzoom_breadcrumbs(); echo'</p>'; ?></div>
	
		<div id="content">
		
			<div id="main">
			          
				<?php
				// WP 3.0 PAGED BUG FIX
				$paged = get_query_var('paged') ? get_query_var('paged') : ( get_query_var('page') ? get_query_var('page') : 1 );
				query_posts("paged=$paged");
		
				get_template_part('loop');
				?>
				          
			</div><!-- end #main -->
			          
			<div id="sidebar">
			          
				<?php get_sidebar(); ?>
			          
			</div><!-- end #sidebar -->
			 
			<div class="cleaner">&nbsp;</div>
		</div><!-- end #content -->
	
	</div><!-- end #frame -->

<?php get_footer(); ?>