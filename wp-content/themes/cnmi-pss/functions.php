<?php
/**
 * CNMI PSS functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package CNMI_PSS
 */

if ( ! function_exists( 'cnmi_pss_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function cnmi_pss_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on CNMI PSS, use a find and replace
	 * to change 'cnmi-pss' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'cnmi-pss', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', 'cnmi-pss' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'cnmi_pss_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
}
endif;
add_action( 'after_setup_theme', 'cnmi_pss_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function cnmi_pss_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'cnmi_pss_content_width', 640 );
}
add_action( 'after_setup_theme', 'cnmi_pss_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function cnmi_pss_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'cnmi-pss' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'cnmi-pss' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'cnmi_pss_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function cnmi_pss_scripts() {
	wp_enqueue_style( 'cnmi-pss-style', get_stylesheet_uri() );

	wp_enqueue_script( 'cnmi-pss-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'cnmi-pss-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'cnmi_pss_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Additional features to allow styling of the templates.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';



/**
 * header_dropdown - Generate Bootstrap dropdown for navbar, automatically including
 * 									 posts of the correct nav taxonomy.
 *
 * @param  {string} $nav_category taxonomy value
 */
function cnmi_header_dropdown($nav_category) {
	$pages = new WP_Query(array(
		'post_type' => 'page',
		'nav' => $nav_category,
	));
	if ($pages->have_posts()) {
		echo '<li role="menuitem" class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' . $nav_category . '<span class="caret"></span></a>
		<ul role="menu" class="dropdown-menu">';
		while($pages->have_posts()):
			$pages->the_post();
			echo '<li role="menuitem"><a href="' .  get_the_permalink() . '">' . get_the_title() . '</a></li>';
		endwhile;
		echo '</ul></li>';
	}
}

/**
 * cnmi_search_form - Generate a small search form
 *
 * @param  {string} $location location of search bar. Must be either 'header' or 'nav'
 */
function cnmi_search_form ($location) {
	echo '<form class="form-inline" method="get" id="' . $location . '-search-form" action="' . get_bloginfo("url") . '/">
		<div class="form-group">
			<label for="' . $location . '-search-bar" class="screen-reader-text">Search:</label>
			<input class="form-control" type="text" placeholder="Search" id="' . $location . '-search-bar" name="search-bar"/>
		</div>
			<button class="btn btn-default form-control" type="submit" id="' . $location . '-search-submit">Submit</button>
	</form>';
}

/**
 * cnmi_contact_info - Simple function to fetch contact information posts by slug
 *
 * @param  {string} $slug slug to fetch
 */
function cnmi_contact_info($slug) {
	$info = new WP_Query(array(
		'post_type' => 'contact_info',
		'name' => $slug,
	));
	if($info->have_posts()):
		$info->the_post();
		the_content();
	endif;
}
