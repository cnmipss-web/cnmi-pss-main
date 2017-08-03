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
 * Modifying user roles so contributors can only make pending, not public changes
 */
function change_post_status($data) {
    if( (current_user_can('contributor'))
     && (($data['post_type'] == 'page') || ($data['post_type'] == 'post'))) {
        if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
        //then set the fields you want to update
        $data['post_status'] = 'draft';     
    }
    return $data;
}

//add_filter('wp_insert_post_data', 'change_post_status', '99');



/**
 * header_dropdown - Generate Bootstrap dropdown for navbar, automatically including
 *                   posts of the correct nav taxonomy.
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
    echo '<form class="form-inline l-nav-form" method="get" id="' . $location . '-search-form" action="' . get_bloginfo("url") . '/">
    <div class="form-group">
      <label for="' . $location . '-search-bar" class="screen-reader-text">Search:</label>
      <input class="form-control" type="search" placeholder="Search" id="' . $location . '-search-bar" name="s"/>
    </div>
      <button class="btn btn-default form-control" type="submit" id="' . $location . '-search-submit">Search</button>
  </form>';
}

/**
 * cnmi_contact_info - Simple function to fetch contact information posts by slug
 *
 * @param  {string} $slug slug to fetch
 */
function cnmi_contact_info($slug, $type = 'full') {
    $info = new WP_Query(array(
        'post_type' => 'contact_info',
        'name' => $slug,
    ));
    if($info->have_posts()):
            $info->the_post();
    $address = get_field('address');
    if(strlen($address) > 0) {
        $address = '<p>' . $address . '</p><p>';
    }
    $tel = get_field('telephone');
    if(strlen($tel) > 0) {
        $tel = 'Tel: ' . $tel . '<br />';
    }
    $fax = get_field('fax');
    if(strlen($fax) > 0) {
        $fax = 'Fax: ' . $fax . '<br />';
    }
    $email = get_field('email');
    if(strlen($email) > 0) {
        $email = 'Email: ' . $email;
    }
    $contact_info = '';
    if($type == 'full' || in_array('add', $type)) {
        $contact_info .= $address;
    } else {
        $contact_info = '<p>';
    }
    if($type == 'full' || in_array('tel', $type))
        $contact_info .= $tel;
    if($type == 'full' || in_array('fax', $type))
        $contact_info .= $fax;
    if($type == 'full' || in_array('ema', $type))
        $contact_info .= $email;

    echo $contact_info . '</p>';
    endif;
    wp_reset_postdata();
}

function cnmi_school_info($slug, $type = 'full') {
    $info = new WP_Query(array(
        'post_type' => 'school',
        'name' => $slug,
    ));

    $first_column = '<div class="col-xs-12 col-sm-6"><h2 class="school-admin">Administrative Staff</h2>' . get_field('admin_staff') . '</div>';
    $second_column = '<div class="col-xs-12 col-sm-6"><br />';
    if($info->have_posts()):
                     $info->the_post();
    $address = get_field('address');
    if(strlen($address) > 0) {
        $address = '<p>' . $address . '</p><p>';
    }

    $tel = get_field('telephone');
    if(strlen($tel) > 0) {
        $tel = 'Tel: ' . $tel . '<br />';
    }

    $fax = get_field('fax');
    if(strlen($fax) > 0) {
        $fax = 'Fax: ' . $fax . '<br />';
    }

    $email = get_field('email');
    if(strlen($email) > 0) {
        $email = 'Email: ' . $email . '<br />';
    }

    $contact_info = '';
    if($type == 'full' || in_array('add', $type)) {
        $contact_info .= $address;
    } else {
        $contact_info = '<p>';
    }

    if($type == 'full' || in_array('tel', $type))
        $contact_info .= $tel;
    if($type == 'full' || in_array('fax', $type))
        $contact_info .= $fax;
    if($type == 'full' || in_array('ema', $type))
        $contact_info .= $email;

    $contact_info .= '<a href="' . get_field('website') .'">' . get_the_title() . ' Website</a>';
    $second_column .= $contact_info . '</p></div>';

    echo $first_column . $second_column;
    endif;
    wp_reset_postdata();
}

if (! function_exists('sort_query_posts_by'))
{
    function sort_by($query, $order_by, $order = 'asc')
    {
        // global $wp_query;
        $order_by = strtolower($order_by);
        $order    = strtolower($order);

        if ($order_by == 'rand') {
            shuffle($query->posts);
            return;
        }

        if ($order_by == 'none') {
            $order_by = 'id';
            $order = 'asc';
        }

        $props = array(
            'author'        => 'return sqp_compare_by_number($o1->post_author, $o2->post_author, '.$order.');',
            'comment_count' => 'return sqp_compare_by_number($o1->comment_count, $o2->comment_count, '.$order.');',
            'date'          => 'return sqp_compare_by_number(strtotime($o1->post_date), strtotime($o2->post_date), '.$order.');',
            'id'            => 'return sqp_compare_by_number($o1->ID, $o2->ID, '.$order.');',
            'menu_order'    => 'return sqp_compare_by_number($o1->menu_order, $o2->menu_order, '.$order.');',
            'modified'      => 'return sqp_compare_by_number(strtotime($o1->post_modified), strtotime($o2->post_modified), '.$order.');',
            'parent'        => 'return sqp_compare_by_number($o1->post_parent, $o2->post_parent, '.$order.');',
            'title'         => 'return sqp_compare_by_string($o1->post_title, $o2->post_title, '.$order.');'
        );

        usort($query->posts, create_function('$o1, $o2', $props[$order_by]));
    }

    function sqp_compare_by_number($n1, $n2, $order)
    {
        $n1 = (int) $n1;
        $n2 = (int) $n2;
        $v  = $n1 > $n2 ? 1 : ($n1 < $n2 ? -1 : 0);
        return ($order == 'desc') ? $v * -1 : $v;
    }

    function sqp_compare_by_string($s1, $s2, $order)
    {
        $v = strnatcasecmp($s1, $s2);
        return ($order == 'desc') ? $v * -1 : $v;
    }
}

/**
 * cnmi_create_school_btns - Helper function to generate markup for school link buttons
 *
 * @param  {string} $level Which level of school to create buttons for.  Options:
 *                            -Elementary School
 *                            -Middle School
 *                            -Jr Sr High School
 *                            -High School
 *
 */
function cnmi_create_school_btns($level_list) {
    echo '<div class="row">';
    foreach ($level_list as $level) {
        $schools = new WP_Query(array(
            'post_type' => 'school',
            'level' => $level,
            'posts_per_page' => -1
        ));
        sort_by($schools, 'title');
        while($schools->have_posts()) {
            $schools->the_post();
            if ($level == 'Head Start') {
                $div_class = "col-xs-12 col-sm-6 col-lg-4";
            } else {
                $div_class= "col-xs-6 col-sm-3";
            }
            $elem = '<div class="' . $div_class . '"><a href="' . get_the_permalink() . '" title="' . get_field('long_name') . '" class="btn btn-school">' . '<span aria-hidden="true">' . get_field('short_name') . '</span></a></div>';
            echo $elem;
        }
    }
    echo "</div>";
    wp_reset_postdata();
}


/**
 * Returns the navigation to next/previous set of posts, when applicable.
 *
 * @since 4.1.0
 *
 * @global WP_Query $wp_query WordPress Query object.
 *
 * @param array $args {
 *     Optional. Default posts navigation arguments. Default empty array.
 *
 *     @type string $prev_text          Anchor text to display in the previous posts link.
 *                                      Default 'Older posts'.
 *     @type string $next_text          Anchor text to display in the next posts link.
 *                                      Default 'Newer posts'.
 *     @type string $screen_reader_text Screen reader text for nav element.
 *                                      Default 'Posts navigation'.
 * }
 * @return string Markup for posts links.
 */
function cnmi_posts_navigation( $args = array() ) {
    $navigation = '';
    
    // Don't print empty markup if there's only one page.
    if ( $GLOBALS['wp_query']->max_num_pages > 1 ) {
        $args = wp_parse_args( $args, array(
            'prev_text'          => __( 'Older News' ),
            'next_text'          => __( 'More Recent News' ),
            'screen_reader_text' => __( 'Posts navigation' ),
        ) );
        
        $next_link = get_previous_posts_link( $args['next_text'] );
        $prev_link = get_next_posts_link( $args['prev_text'] );
        
        if ( $next_link ) {
            $navigation .= '<button class="btn nav-next">' . $next_link . '</button>';
        }
        $navigation .= '&nbsp;';
        if ( $prev_link ) {
            $navigation .= '<button class="btn nav-previous">' . $prev_link . '</button>';
        }
        
        
        $navigation = _navigation_markup( $navigation, 'posts-navigation', $args['screen_reader_text'] );
    }
    
    echo $navigation;
}

function cnmi_get_report_tabs() {
    $tabs = array();
    for ($i = 1; $i <= 5; $i++) {
        $tabs[] = array(
            'title' => get_field('tab_title_' . $i),
            'content' => get_field('tab_content_' . $i),
            'id' => ('tab' . $i),
        );
    }
    return $tabs;
}
