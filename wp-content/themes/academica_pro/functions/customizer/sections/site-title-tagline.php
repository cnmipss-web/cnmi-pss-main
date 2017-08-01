<?php

/**
 * @param WP_Customize_Manager $wp_customize
 */
function academica_pro_customizer_sitetitletagline( $wp_customize ) {
    $section_id = 'title_tagline';
    $section    = $wp_customize->get_section( $section_id );

    $theme_prefix = WPZOOM::$theme_raw_name . '_';

    $section->panel = WPZOOM::$theme_raw_name . '_general';

    // Hide Tagline
    $setting_id = 'hide-tagline';
    $wp_customize->add_setting(
        $setting_id,
        array(
            'default'           => false,
            'type'              => 'theme_mod',
            'sanitize_callback' => 'absint',
        )
    );
    $wp_customize->add_control(
        $theme_prefix . $setting_id,
        array(
            'settings' => $setting_id,
            'section'  => $section_id,
            'label'    => __( 'Hide Tagline', 'wpzoom' ),
            'type'     => 'checkbox',
        )
    );
}

add_action( 'customize_register', 'academica_pro_customizer_sitetitletagline', 20 );
