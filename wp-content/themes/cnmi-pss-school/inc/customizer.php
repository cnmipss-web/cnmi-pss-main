<?php
/**
 * CNMI PSS School Page Theme Customizer
 *
 * @package CNMI_PSS_School_Page
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function cnmi_pss_school_page_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'cnmi_pss_school_page_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'cnmi_pss_school_page_customize_partial_blogdescription',
		) );
	}

	$wp_customize->add_setting( 'first_school_color' , array(
		'default'   => '#000000',
		'transport' => 'refresh',
	));
	$wp_customize->add_setting( 'second_school_color' , array(
		'default'   => '#000000',
		'transport' => 'refresh',
	));

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'primary_color', array(
		'label'      => __( 'School Color - Primary', 'cnmi-pss-school' ),
		'section'    => 'colors',
		'settings'   => 'first_school_color',
	)));

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_color', array(
		'label'      => __( 'School Color - Secondary', 'cnmi-pss-school' ),
		'section'    => 'colors',
		'settings'   => 'second_school_color',
	)));
}
add_action( 'customize_register', 'cnmi_pss_school_page_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function cnmi_pss_school_page_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function cnmi_pss_school_page_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function cnmi_pss_school_page_customize_preview_js() {
	wp_enqueue_script( 'cnmi-pss-school-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'cnmi_pss_school_page_customize_preview_js' );
