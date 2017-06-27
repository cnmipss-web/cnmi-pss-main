<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		$name = get_the_title();
		$title = get_field('job_title');
		if (strlen($title) > 0) {
			$name .= ' - ' . $title;
		}
		$post_type = get_post_type();
		if ($post_type == 'post') {
			$post_type = 'News';
		}
		$post_type = preg_replace('/\_/', ' ', $post_type);
		$post_type = ucwords($post_type);
		echo '<h2 class="search-entry-title">' .
					$post_type . ': ' .
					'<a href="' .
					esc_url(get_permalink()) .
					'" rel="bookmark">' .
					$name .
					'</a>' .
					'</h2>'; ?>

		<?php if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php cnmi_pss_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->

	<footer class="entry-footer">
		<?php cnmi_pss_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
<hr />
