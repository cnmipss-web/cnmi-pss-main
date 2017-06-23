<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CNMI_PSS
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer container-fluid" role="contentinfo">
		<div class="container">
			<div class="row">
				<div class="col-xs-6 col-sm-3">
					<h2>Contact</h2>
				</div>
				<div class="col-xs-0 col-sm-3">
					<h2>State Board of Education</h2>
					<?php cnmi_contact_info('state-board-of-education'); ?>
				</div>
				<div class="col-xs-0 col-sm-3">
					<h2>Commissioner of Education</h2>
					<?php cnmi_contact_info('commissioner-of-education'); ?>
				</div>
				<div class="col-xs-6 col-sm-3">
					<h2>Issues With Website?</h2>
					<?php cnmi_contact_info('webmaster'); ?>
				</div>
			</div>
		</div>
		<div class="site-info row">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<p>
							<?php
							$copyYear = 2017;
							$curYear = date('Y');
							printf( esc_html__( 'Copyright ©' . $copyYear . (($copyYear != $curYear) ? '-' . $curYear : '') . ' CNMI PSS. All Rights Reserved', 'cnmi-pss' ));
							?>
						</p>
					</div>
				</div>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>
