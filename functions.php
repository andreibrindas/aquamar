<?php

// theme supports
add_theme_support( 'title-tag' );
add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' );



function aquamar_assets() {
    wp_enqueue_style( 'slick-stylesheet', get_template_directory_uri() . '/inc/slick/slick.css', array(), '1.0.0', 'all' );
    wp_enqueue_style( 'slick-theme-stylesheet', get_template_directory_uri() . '/inc/slick/slick-theme.css', array(), '1.0.0', 'all' );
    wp_enqueue_style( 'aquamar-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );

    wp_enqueue_script( 'slick-scripts', get_template_directory_uri() . '/inc/slick/slick.min.js', array('jquery'), '1.0.0', true );
    wp_enqueue_script( 'aquamar-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'aquamar_assets' );
  

function wpforo_search_form( $html ) {

    $html = str_replace( 'placeholder="Search ', 'placeholder="Caută... ', $html );

    return $html;
}
add_filter( 'get_search_form', 'wpforo_search_form' );

// add menu locations
function aquamar_add_menu_locations( ) {
    register_nav_menus(
        [
            'header-menu' => __( 'Meniu Header' ),
            'footer-menu' => __( 'Meniu Footer' ),
            ]
        );
}
add_action( 'init', 'aquamar_add_menu_locations' );

// Sidebar

function aquamar_widgets_init() {
    // shop sidebar
	register_sidebar( array(
		'name'          => __( 'Widget Area', 'aquamar' ),
		'id'            => 'shop-sidebar',
		'description'   => __( 'Add widgets here to appear in your sidebar.', 'aquamar' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s attribute-section">',
		'after_widget'  => '</div>',
		'before_title'  => '<p class="attribute-name">',
		'after_title'   => '</p>',
	) );
	
}
add_action( 'widgets_init', 'aquamar_widgets_init' );



//////////////////
// Woocommerce //
////////////////

// Add woocommerce support for the theme
function aquamar_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
}
add_action( 'after_setup_theme', 'aquamar_add_woocommerce_support' );

// Remove default Woocommerce actions
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

// Add Woocommerce actions for wrapping the content
add_action( 'woocommerce_before_main_content', 'aquamar_wrapper_start', 10 );
add_action( 'woocommerce_after_main_content', 'aquamar_wrapper_end', 10 );

function aquamar_wrapper_start() {
    echo "<section id='main'>";
}

function aquamar_wrapper_end() {
    echo "</section>";
}

/**
 * Remove the breadcrumbs 
 */
add_action( 'init', 'woo_remove_wc_breadcrumbs' );
function woo_remove_wc_breadcrumbs() {
    remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
}


function aquamar_redefine_products_per_page( $per_page ) {
    $per_page = 12;
    return $per_page;
}

add_filter( 'loop_shop_per_page', 'aquamar_redefine_products_per_page', 9999 );