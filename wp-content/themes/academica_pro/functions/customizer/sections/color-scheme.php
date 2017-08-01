<?php

function academica_pro_customizer_define_color_scheme_sections( $sections ) {
    $panel           = WPZOOM::$theme_raw_name . '_color-scheme';
    $colors_sections = array();

    $colors_sections['color'] = array(
        'panel'   => $panel,
        'title'   => __( 'General', 'wpzoom' ),
        'options' => array(
            'color-link' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Link', 'wpzoom' ),
                ),
            ),

            'color-link-hover' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Link :hover', 'wpzoom' ),
                ),
            ),

            'color-text'  => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Text', 'wpzoom' ),
                ),
            ),

            'color-widget-title' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Widget Title', 'wpzoom' ),
                ),
            ),
        )
    );

    $colors_sections['color-header'] = array(
        'panel'   => $panel,
        'title'   => __( 'Header', 'wpzoom' ),
        'options' => array(

            'color-background-header' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Header Background', 'wpzoom' ),
                ),
            ),

            'color-menu-background' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Menu Background', 'wpzoom' ),
                ),
            ),

            'color-menu-border' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Menu Border Color', 'wpzoom' ),
                ),
            ),

            'color-menu-link' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Menu Link', 'wpzoom' ),
                ),
            ),
            
            'color-menu-link-hover' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Menu Link :hover', 'wpzoom' ),
                ),
            ),
        )
    );

    $colors_sections['color-background'] = array(
        'panel'   => $panel,
        'title'   => __( 'Background', 'wpzoom' ),
        'options' => array(
            
            'color-background-content' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Content Background', 'wpzoom' ),
                ),
            ),
        )
    );

    $colors_sections['color-footer'] = array(
        'panel'   => $panel,
        'title'   => __( 'Footer', 'wpzoom' ),
        'options' => array(
            'color-footer-widget-area-background' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Footer Background', 'wpzoom' ),
                ),
            ),
            
            'color-footer-widget-area-border' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Footer Border Color', 'wpzoom' ),
                ),
            ),

            'color-footer-link' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Link', 'wpzoom' ),
                ),
            ),

            'color-footer-link-hover' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Link :hover', 'wpzoom' ),
                ),
            ),

            'color-footer-text' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Text', 'wpzoom' ),
                ),
            ),

            'color-footer-widget-title' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Footer Widget Title', 'wpzoom' ),
                ),
            ),

            'color-footer-copy-background' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Copyrights Background', 'wpzoom' ),
                ),
            ),

            'color-footer-copy-text' => array(
                'setting' => array(
                    'sanitize_callback' => 'maybe_hash_hex_color',
                ),
                'control' => array(
                    'control_type' => 'WP_Customize_Color_Control',
                    'label'        => __( 'Copyright Text', 'wpzoom' ),
                ),
            ),

        )
    );

    return array_merge( $sections, $colors_sections );
}

add_filter( 'zoom_customizer_sections', 'academica_pro_customizer_define_color_scheme_sections' );
