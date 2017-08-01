<?php

function academica_pro_customizer_define_header_sections( $sections ) {
    $panel           = WPZOOM::$theme_raw_name . '_header';
    $header_sections = array();

    $theme_prefix = WPZOOM::$theme_raw_name . '_';

    return array_merge( $sections, $header_sections );
}

add_filter( 'zoom_customizer_sections', 'academica_pro_customizer_define_header_sections' );
