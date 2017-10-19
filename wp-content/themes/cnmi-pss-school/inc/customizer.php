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
	/**
	 * Settings
	 */
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';

	$wp_customize->remove_setting( 'header_textcolor' );
	$wp_customize->remove_setting( 'background_color' );
	
	$wp_customize->add_setting( 'school_brand', array(
		'default' => 'PSS SCHOOL',
		'transport' => 'postMessage',
	));

	$wp_customize->add_setting( 'first_school_color' , array(
		'default'   => '#000000',
		'transport' => 'postMessage',
	));
	$wp_customize->add_setting( 'second_school_color' , array(
		'default'   => '#000000',
		'transport' => 'postMessage',
	));

	/**
	 * Controls
	 */
	$wp_customize->remove_control( 'blogname');
	$wp_customize->remove_control( 'header_text');
	$wp_customize->remove_control( 'blogdescription');

	$wp_customize->add_control( 'blogname', array(
		'label'      => __( 'School Name' ),
		'section'    => 'title_tagline',
		) );
		
	$wp_customize->add_control( 'blogdescription', array(
		'label'      => __( 'Motto' ),
		'section'    => 'title_tagline',
	));	
		
	$wp_customize->add_control(new WP_Customize_Control($wp_customize, 'school_brand', array(
		'label' => __('School Short Code', 'cnmi-pss-school'),
		'section' => 'title_tagline',
		'settings' => 'school_brand'
	)));

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

	/**
	 * Sections
	 */
	$wp_customize->remove_section('header_image');

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
