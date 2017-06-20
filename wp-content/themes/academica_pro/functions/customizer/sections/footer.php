<?php

function academica_pro_customizer_define_footer_sections( $sections ) {
    $panel           = WPZOOM::$theme_raw_name . '_footer';
    $footer_sections = array();

    $theme_prefix = WPZOOM::$theme_raw_name . '_';

    /**
     * Copyright
     */
    $footer_sections['copyright'] = array(
        'panel'   => $panel,
        'title'   => __( 'Copyright', 'wpzoom' ),
        'options' => array(
            'footer-text' => array(
                'setting' => array(
                    'sanitize_callback'	=> 'academica_pro_sanitize_text',
                ),
                'control' => array(
                    'label'				=> __( 'Footer Copyright Text', 'wpzoom' ),
                    'type'				=> 'text',
                ),
            )
        )
    );

    return array_merge( $sections, $footer_sections );
}

add_filter( 'zoom_customizer_sections', 'academica_pro_customizer_define_footer_sections' );
