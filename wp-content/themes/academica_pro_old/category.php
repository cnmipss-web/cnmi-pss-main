<?php get_header(); ?>

	<div id="main">

		<?php
		if (!is_active_sidebar('sidebar-left')) { $no_side_left = true; }
		if (!is_active_sidebar('sidebar-right')) { $no_side_right = true; }
		?>

		<div class="wrapper">

			<?php if (!$no_side_left) { ?>
			<div class="column column-narrow">

				<?php
				if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar: Left Column') ) : ?> <?php endif;
				?>

				<div class="cleaner">&nbsp;</div>

			</div><!-- end .column .column-narrow -->
			<?php } ?>

			<div class="column <?php
			if ($no_side_left && !$no_side_right) {
				echo 'column-wide';
			} elseif (!$no_side_left && $no_side_right) {
				echo 'column-wide column-last';
			} elseif ($no_side_left && $no_side_right) {
				echo 'column-full column-last';
			} else {
				echo 'column-medium';
			} ?>">

				<div class="widget">
					<h1 class="post-title"><?php single_cat_title(); ?></h1>
					<p class="archive-meta"><?php echo category_description(); ?></p>

					<div class="divider">&nbsp;</div>

					<?php get_template_part('loop','category'); ?>

					<div class="cleaner">&nbsp;</div>
				</div><!-- end .widget -->

				<div class="cleaner">&nbsp;</div>

			</div><!-- end .column .column-medium -->

			<?php if (!$no_side_right) { ?>
			<div class="column column-narrow column-last">

				<?php
				if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar: Right Column') ) : ?> <?php endif;
				?>
				<div class="cleaner">&nbsp;</div>

			</div><!-- end .column .column-narrow -->
			<?php } ?>

			<div class="cleaner">&nbsp;</div>

		</div><!-- end .wrapper -->

	</div><!-- end #main -->

<?php get_footer(); ?>