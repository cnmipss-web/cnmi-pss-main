<?php

/**
 * Process user options to generate CSS needed to implement the choices.
 *
 * This function reads in the options from theme mods and determines whether a CSS rule is needed to implement an
 * option. CSS is only written for choices that are non-default in order to avoid adding unnecessary CSS. All options
 * are also filterable allowing for more precise control via a child theme or plugin.
 *
 * Note that all CSS for options is present in this function except for the CSS for fonts and the logo, which require
 * a lot more code to implement.
 *
 * @return void
 */
function academica_pro_css_add_rules() {
    /**
     * Colors section
     */
    // General
    academica_pro_css_add_simple_color_rule( 'color-link', 'a', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-link-hover', 'a:hover, a:focus', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-text', 'body', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-widget-title', '.widget .title, h3#reply-title', 'color' );
    
    // Header
    academica_pro_css_add_simple_color_rule( 'color-menu-link', '#menu-main a', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-menu-link-hover', '#menu-main a:hover, #menu-main a:focus, #menu-main li.current-menu-item a, #menu-main li.current-item a', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-menu-background', '#nav-main-menu, #menu-main li li', 'background-color' );
    academica_pro_css_add_simple_color_rule( 'color-menu-border', '#nav-main-menu', 'border-color' );

    // Background
    academica_pro_css_add_simple_color_rule( 'color-background-header', 'header', 'background' );
	academica_pro_css_add_simple_color_rule( 'color-background-content', '.widget', 'background' );

    // Footer
    academica_pro_css_add_simple_color_rule( 'color-footer-widget-area-background', 'footer', 'background-color' );
    academica_pro_css_add_simple_color_rule( 'color-footer-widget-area-border', 'footer', 'border-color' );
    academica_pro_css_add_simple_color_rule( 'color-footer-link', 'footer a', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-footer-link-hover', 'footer a:hover, footer a:focus', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-footer-text', 'footer', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-footer-widget-title', 'footer .widget .title', 'color' );
    academica_pro_css_add_simple_color_rule( 'color-footer-copy-background', '#footer-copy', 'background-color' );
    academica_pro_css_add_simple_color_rule( 'color-footer-copy-text', '#footer-copy', 'color' );

}

add_action( 'academica_pro_css', 'academica_pro_css_add_rules' );

function academica_pro_css_add_simple_color_rule( $setting_id, $selectors, $declarations ) {
    $value = maybe_hash_hex_color( get_theme_mod( $setting_id, academica_pro_get_default( $setting_id ) ) );

    if ( $value === academica_pro_get_default( $setting_id ) ) {
        return;
    }

    if ( is_string( $selectors ) ) {
        $selectors = array( $selectors );
    }

    if ( is_string( $declarations ) ) {
        $declarations = array(
            $declarations => $value
        );
    }

    academica_pro_get_css()->add( array(
        'selectors'    => $selectors,
        'declarations' => $declarations
    ) );
}
