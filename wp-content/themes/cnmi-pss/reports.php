<?php
/**
 * Template Name: Reports
 *
 * The template for displaying report collections
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
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
				<div class="row">
					<div class="col-xs-12">
						<header>
							<h1 class="page-title">
								<?php the_title(); ?>
							</h1>
						</header>
						<?php the_content(); ?>
				 </div>
				</div>

				<div class="row">
					<div class="col-xs-12">
						<ul class="nav nav-tabs" role="tablist" id="tablist">
							<?php
							$tabs = cnmi_get_report_tabs();
							foreach ($tabs as $this_tab) {
								?>
								<li role="presentation">
									<a
										href="<?php echo '#' . $this_tab['id']; ?>"
										role="tab"
										aria-controls="<?php echo $this_tab['id']; ?>"
										data-toggle="tab">
										<?php echo $this_tab['title']; ?>
									</a>
								</li>
							<?php
							}
							?>
						</ul>
						<div class="tab-content">
							<?php
							foreach ($tabs as $this_tab) {
								?>
								<div role="tabpanel" class="tab-pane fade" id="<?php echo $this_tab['id']; ?>">
									<?php echo $this_tab['content']; ?>
								</div>
								<?php
							}
							?>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-10 col-sm-push-1">
						<?php get_template_part( 'template-parts/info', 'contact' ); ?>
					</div>
				</div>
				<script>
					// Set active tab and tabpanel
					let firstTab = jQuery('#tablist').children()[0];
					jQuery(firstTab).addClass('active').addClass('in');
					let firstPane = jQuery(".tab-pane")[0];
					jQuery(firstPane).addClass('active').addClass('in');
				</script>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
