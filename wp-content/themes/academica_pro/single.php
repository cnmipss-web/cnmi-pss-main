<?php get_header(); ?>

	<div id="main">

		<div class="wrapper">

			<?php while (have_posts()) : the_post();
			$featured_image = get_post_meta($post->ID, 'wpzoom_featured_show', true);
			$template = get_post_meta($post->ID, 'wpzoom_post_template', true);
			
			if (!is_active_sidebar('sidebar-left') || $template == 'side-right') { $no_side_left = true; }
			if (!is_active_sidebar('sidebar-right') || $template == 'side-left') { $no_side_right = true; }

			if ($featured_image == 'Full Width') { ?>
			<?php get_the_image( array( 'size' => 'thumb-full', 'width' => 1140, 'height' => 450, 'attachment' => false, 'image_scan' => false, 'before' => '<div class="post-cover post-cover-full single-cover">', 'after' => '</div><!-- end .post-cover -->', 'link_to_post' => false) ); ?>
			<?php } ?>

			<?php if (!isset($no_side_left) && $template != 'side-right' && $template != 'full') { ?>
			<div class="column column-narrow">

				<?php
				if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar: Left Column') ) : ?> <?php endif;
				?>

				<div class="cleaner">&nbsp;</div>

			</div><!-- end .column .column-narrow -->
			<?php } ?>

			<div class="column <?php
			if ( isset($no_side_left) && !isset($no_side_right) ) {
				echo 'column-wide';
			} elseif ( !isset($no_side_left) && isset($no_side_right) ) {
				echo 'column-wide column-last';
			} elseif ( (isset($no_side_left) && isset($no_side_right)) || isset($template) && $template == 'full' ) {
				echo 'column-full column-last';
			} else {
				echo 'column-medium';
			} ?>">

				<?php
				if ($featured_image == 'Narrow' && ($template == 'side-both' || !$template)) {
					get_the_image( array( 'size' => 'homepage-slider', 'width' => 560, 'attachment' => false, 'image_scan' => false, 'before' => '<div class="post-cover single-cover">', 'after' => '</div><!-- end .post-cover -->', 'link_to_post' => false ) );
				} elseif ($featured_image == 'Narrow' && ( $template == 'side-left' || $template == 'side-right' )) {
					get_the_image( array( 'size' => 'thumb-singular', 'width' => 850, 'attachment' => false, 'image_scan' => false, 'before' => '<div class="post-cover single-cover">', 'after' => '</div><!-- end .post-cover -->', 'link_to_post' => false ) );
				}
				?>

				<div class="widget">
					<h1 class="post-title"><?php the_title(); ?></h1>
					<p class="post-meta"><?php if (option::get('post_author') == 'on') { if (isset($prev)) {echo ' / '; } ?><?php _e('By','wpzoom');?> <?php the_author_posts_link(); $prev = TRUE; } ?>
			<?php if (option::get('post_category') == 'on') { if (isset($prev)) {echo ' / '; } ?><span class="category"><?php _e('In ', 'wpzoom'); the_category(', '); $prev = TRUE; ?></span><?php } ?>
			<?php if (option::get('post_date') == 'on') { if (isset($prev)) {echo ' / '; } ?><time datetime="<?php the_time("Y-m-d"); ?>" pubdate><?php the_time(get_option('date_format')); ?></time><?php $prev = TRUE; } ?>
			<?php edit_post_link( __('Edit post', 'wpzoom'), ' / ', ''); ?></p>

					<div class="divider">&nbsp;</div>

					<div class="post-content">
						<?php the_content(); ?>

						<div class="cleaner">&nbsp;</div>

						<?php wp_link_pages(array('before' => '<div class="navigation"><p><strong>'.__('Pages', 'wpzoom').':</strong> ', 'after' => '</p></div>', 'next_or_number' => 'number')); ?>
						<?php if (option::get('post_tags') == 'on') { ?><?php the_tags( '<p><strong>'.__('Tags', 'wpzoom').':</strong> ', ', ', '</p>'); } ?>

					</div><!-- end .post-content -->

					<?php if (option::get('post_share') == 'on') { ?>

					<div class="divider">&nbsp;</div>
					<div class="wpzoom-share">
		                <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode( get_permalink() ); ?>&text=<?php echo urlencode( get_the_title() ); ?>" target="_blank" title="<?php esc_attr_e( 'Tweet this on Twitter', 'wpzoom' ); ?>" class="twitter"><?php _e('Share on Twitter','wpzoom'); ?></a>
		                <a href="https://facebook.com/sharer.php?u=<?php echo urlencode( get_permalink() ); ?>&t=<?php echo urlencode( get_the_title() ); ?>" target="_blank" title="<?php esc_attr_e( 'Share this on Facebook', 'wpzoom' ); ?>" class="facebook"><?php _e('Share on Facebook','wpzoom'); ?></a>
		                <a href="https://plus.google.com/share?url=<?php echo urlencode( get_permalink() ); ?>" target="_blank" title="<?php esc_attr_e( 'Post this to Google+', 'wpzoom' ); ?>" class="gplus"><?php _e('Share on Google+','wpzoom'); ?></a>
					</div><!-- end .wpzoom-share -->

					<?php } ?>

					<?php if (option::get('post_comments') == 'on') { ?>
					<div class="divider">&nbsp;</div>

					<div id="comments">
						<?php comments_template(); ?>
					</div><!-- end #comments -->

					<?php } ?>

					<div class="cleaner">&nbsp;</div>
				</div><!-- end .widget -->

				<div class="cleaner">&nbsp;</div>

			</div><!-- end .column .column-medium -->

			<?php if (!isset($no_side_right) && $template != 'side-left' && $template != 'full') { ?>
			<div class="column column-narrow column-last">

				<?php
				if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar: Right Column') ) : ?> <?php endif;
				?>
				<div class="cleaner">&nbsp;</div>

			</div><!-- end .column .column-narrow -->
			<?php } ?>

			<div class="cleaner">&nbsp;</div>

			<?php endwhile; ?>

		</div><!-- end .wrapper -->

	</div><!-- end #main -->

<?php get_footer(); ?>