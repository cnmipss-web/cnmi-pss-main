<?php

/**
 * @param WP_Customize_Manager $wp_customize
 */
function academica_pro_customizer_staticfrontpage( $wp_customize ) {
    $section_id = 'static_front_page';
    $section    = $wp_customize->get_section( $section_id );

    $section->panel = WPZOOM::$theme_raw_name . '_general';
}

add_action( 'customize_register', 'academica_pro_customizer_staticfrontpage', 20 );
