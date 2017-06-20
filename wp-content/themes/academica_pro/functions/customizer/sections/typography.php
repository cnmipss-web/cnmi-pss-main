<?php

function academica_pro_customizer_define_typography_sections( $sections ) {
    $panel           = WPZOOM::$theme_raw_name . '_typography';
    $typography_sections = array();

    /**
     * Site Title & Tagline
     */
    $typography_sections['font-site-title'] = array(
        'panel'   => $panel,
        'title'   => __( 'Site Title &amp; Tagline', 'wpzoom' ),
        'options' => array(
            'font-family-site-title'   => array(
                'setting' => array(
                    'sanitize_callback' => 'academica_pro_sanitize_font_choice',
                ),
                'control' => array(
                    'label'   => __( 'Site Title Font Family', 'wpzoom' ),
                    'type'    => 'select',
                    'choices' => academica_pro_all_font_choices()
                ),
            ),
            'font-size-site-title'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Site Title Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),

            'font-family-site-tagline'   => array(
                'setting' => array(
                    'sanitize_callback' => 'academica_pro_sanitize_font_choice',
                ),
                'control' => array(
                    'label'   => __( 'Site Tagline Font Family', 'wpzoom' ),
                    'type'    => 'select',
                    'choices' => academica_pro_all_font_choices()
                ),
            ),
            'font-size-site-tagline'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Site Tagline Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),
        )
    );

    /**
     * Navigation
     */
    $typography_sections['font-nav'] = array(
        'panel'   => $panel,
        'title'   => __( 'Navigation', 'wpzoom' ),
        'options' => array(
            'font-family-nav'   => array(
                'setting' => array(
//                    'sanitize_callback' => 'academica_pro_sanitize_font_choice',
                ),
                'control' => array(
                    'label'   => __( 'Nav Font Family', 'wpzoom' ),
                    'type'    => 'select',
                    'choices' => academica_pro_all_font_choices()
                ),
            ),
            'font-size-nav'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Nav Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),
        )
    );

    /**
     * Slider Title
     */
    $typography_sections['font-slider-title'] = array(
        'panel'   => $panel,
        'title'   => __( 'Header', 'wpzoom' ),
        'options' => array(

            'font-family-header-tel'   => array(
                'setting' => array(
                    'sanitize_callback' => 'academica_pro_sanitize_font_choice',
                ),
                'control' => array(
                    'label'   => __( 'Header Telephone Font Family', 'wpzoom' ),
                    'type'    => 'select',
                    'choices' => academica_pro_all_font_choices()
                ),
            ),
            'font-size-header-tel'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Header Telephone Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),

        )
    );

    /**
     * Widgets
     */
    $typography_sections['font-widgets'] = array(
        'panel'   => $panel,
        'title'   => __( 'Widget Title', 'wpzoom' ),
        'options' => array(
            'font-family-widgets'   => array(
                'setting' => array(
                    'sanitize_callback' => 'academica_pro_sanitize_font_choice',
                ),
                'control' => array(
                    'label'   => __( 'Widgets Font Family', 'wpzoom' ),
                    'type'    => 'select',
                    'choices' => academica_pro_all_font_choices()
                ),
            ),
            'font-size-widgets'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Widgets Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),

            'font-size-footer-widgets'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Footer Widgets Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),

        )
    );

    /**
     * Post Title
     */
    $typography_sections['font-post-title'] = array(
        'panel'   => $panel,
        'title'   => __( 'Post/Page', 'wpzoom' ),
        'options' => array(
            'font-family-post-title'   => array(
                'setting' => array(
                    'sanitize_callback' => 'academica_pro_sanitize_font_choice',
                ),
                'control' => array(
                    'label'   => __( 'Title Font Family', 'wpzoom' ),
                    'type'    => 'select',
                    'choices' => academica_pro_all_font_choices()
                ),
            ),
            'font-size-post-title'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Title Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),

            'font-family-post-content'   => array(
                'setting' => array(
                    'sanitize_callback' => 'academica_pro_sanitize_font_choice',
                ),
                'control' => array(
                    'label'   => __( 'Content Font Family', 'wpzoom' ),
                    'type'    => 'select',
                    'choices' => academica_pro_all_font_choices()
                ),
            ),
            'font-size-post-content'     => array(
                'setting' => array(
                    'sanitize_callback' => 'absint',
                ),
                'control' => array(
                    'label' => __( 'Content Font Size (in px)', 'wpzoom' ),
                    'type'  => 'number'
                ),
            ),

        )
    );

    return array_merge( $sections, $typography_sections );
}

add_filter( 'zoom_customizer_sections', 'academica_pro_customizer_define_typography_sections' );
