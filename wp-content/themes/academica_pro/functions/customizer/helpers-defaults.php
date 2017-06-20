<?php

function academica_pro_option_defaults() {
    $defaults = array(
        /**
         * General
         */
        // Site Title & Tagline
        'hide-tagline'                        => 0,
        // Logo
        'logo'                                => '',
        'logo-retina-ready'                   => 0,
        'logo-favicon'                        => 0,
        /**
         * Typography
         */
        // Site Title & Tag Line
        'font-family-site-title'              => 'Roboto',
        'font-size-site-title'                => 36,
        'font-family-site-tagline'            => 'Roboto',
        'font-size-site-tagline'              => 13,
        // Navigation
        'font-family-nav'                     => 'Roboto',
        'font-size-nav'                       => 15,
        // Homepage Header
        'font-family-header-tel'             => 'Roboto',
        'font-size-header-tel'                => 15,
        // Widgets
        'font-family-widgets'                 => 'Roboto',
        'font-size-widgets'                   => 15,
        'font-size-footer-widgets'            => 15,
        // Post Title
        'font-family-post-title'              => 'Roboto',
        'font-size-post-title'                => 26,
        'font-family-post-content'            => 'Roboto',
        'font-size-post-content'              => 15,

        /**
         * Color Scheme
         */
        // General
        'color-link'                          => '#1a4167',
        'color-link-hover'                    => '#a41d31',
        'color-text'                          => '#666666',
        'color-widget-title'                  => '#1a4167',
        // Header
        'color-background-header'             => '#ffffff',
        'color-menu-background'               => '#1a4167',
        'color-menu-border'                   => '#dfc253',
        'color-menu-link'                     => '#ffffff',
        'color-menu-link-hover'               => '#e0c572',
		// Background
        'color-background-content'            => '#ffffff',
        // Footer
        'color-footer-widget-area-background' => '#1a4167',
        'color-footer-widget-area-border'     => '#dfc253',
        'color-footer-text'                   => '#d3dde6',
        'color-footer-widget-title'           => '#ffffff',
        'color-footer-copy-background'        => '#022c55',
        'color-footer-copy-text'              => '#d3dde6',
        /**
         * Header
         */
        // Background Image
        'header-background-image'             => '',
        'header-background-repeat'            => 'no-repeat',
        'header-background-position'          => 'center',
        'header-background-size'              => 'cover',
        /**
         * Footer
         */
        'color-footer-link'                          => '#dfc253',
        'color-footer-link-hover'                    => '#ffffff',
        // Copyright
        'footer-text'                         => sprintf( __( 'Copyright &copy; %1$s &mdash; %2$s. All Rights Reserved', 'wpzoom' ), date( 'Y' ), get_bloginfo( 'name' ) ),
    );

    return $defaults;
}

function academica_pro_get_default( $option ) {
    $defaults = academica_pro_option_defaults();
    $default  = ( isset( $defaults[ $option ] ) ) ? $defaults[ $option ] : false;

    return $default;
}
