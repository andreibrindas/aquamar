<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class() ?> >

<header>
    <div class="blue-bar-section ">
        <div class="container flex row justify-between align-center">
            <div class="header-left">
                <a>Partenerul tău de încredere în domeniul piscinelor.</a>
            </div>
            <div class="header-right">
                <a href="#">
                    Link-uri utile
                </a>
                <a href="tel:+0720000000"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/telefon.png" alt="">0720 000 000</a>
            </div>
        </div>
    </div>
    <div class="header">
        <div class="container flex row justify-between">
             <div class="header-left">
                 <div class="logo">
                     <a href="<?php echo get_home_url(); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo.svg" alt="logo aquamar piscine">
                    </a>
                 </div>
                 <div class="header-menu-container">
                    <?php wp_nav_menu(['menu' => 'header-menu']) ?>
                 </div>
             </div>
             <div class="header-right">
                <div class="search">
                    <?php 
                        // get_search_form();
                        echo do_shortcode('[wcas-search-form]'); 
                        
                    ?>
                </div>
                <div class="log-in">
                    <?php if ( is_user_logged_in() ) { ?>
                        <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('My Account','woothemes'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/contul-meu.png" alt=""><?php _e('Contul meu','aquamar'); ?></a>
                    <?php } else { ?>
                        <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('Login / Register','woothemes'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/contul-meu.png" alt=""><?php _e('Intră în cont','aquamar'); ?></a>
                    <?php } ?>
                </div>
                <a class="btn dark-blue cart" href="<?php echo wc_get_cart_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/cosul-meu.png" alt="">Coșul meu</a>
             </div>
        </div>
    </div>
    <!-- mobile header start -->
    <div class="mobile-header">
        <div class="container">
            <div class="hamburger" >
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <!-- <div class="mobile-head-container"> -->
                <div class="mobile-logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo-mobile.svg" alt="">
                </div>
                <div class="mobile-cart">
                    <a href="<?php echo wc_get_cart_url(); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/dist/images/mobile-cart.png" alt="">
                    </a>
                </div>
            <!-- </div> -->
            <div class="mobile-log-in">
                    <?php if ( is_user_logged_in() ) { ?>
                        <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('My Account','woothemes'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/contul-meu-mobil.png" alt=""><?php _e('Contul meu','aquamar'); ?></a>
                    <?php } else { ?>
                        <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('Login / Register','woothemes'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/contul-meu-mobil.png" alt=""><?php _e('Intră în cont','aquamar'); ?></a>
                    <?php } ?>
            </div>
        </div>
       
        <div class="mobile-header-menu-container">
            <!-- <div class="container">  -->
                <?php wp_nav_menu(['menu' => 'header-menu']) ?>
            <!-- </div> -->
        </div>
    </div>
    <div class="container">
        <div class="mobile-search">
            <?php get_search_form() ?>
        </div>
    </div>
</header>