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
                <div class="linkuri-utile">
                    <a>Link-uri utile</a>
                    <ul>
                        <li><a href="#">Livrare comenzi</a></li>
                        <li><a href="#">Retur produse</a></li>
                        <li><a href="#">Modalități de plată</a></li>
                    </ul>
                </div>
                
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
                <a class="btn dark-blue cart" href="<?php echo wc_get_cart_url(); ?>"><svg xmlns="http://www.w3.org/2000/svg" width="22.99" height="21.888" viewBox="0 0 22.99 21.888">
  <path id="cart001_-_E0BD" data-name="cart001 - E0BD" d="M-7.5-28.044h-3.99v.988h3.23l4.047,16.682A2.176,2.176,0,0,0-5.7-8.322,2.161,2.161,0,0,0-3.553-6.156,2.165,2.165,0,0,0-1.387-8.322a2.183,2.183,0,0,0-.342-1.159H3.838A2.183,2.183,0,0,0,3.5-8.322,2.165,2.165,0,0,0,5.662-6.156,2.161,2.161,0,0,0,7.809-8.322a2.157,2.157,0,0,0-2.147-2.147H-3.23l-.532-2.223H8.189L11.5-22.154H-6.061Zm17.594,6.878-2.6,7.486h-11.5l-1.824-7.486ZM-2.375-8.322A1.184,1.184,0,0,1-3.553-7.144,1.168,1.168,0,0,1-4.712-8.322,1.152,1.152,0,0,1-3.553-9.481,1.168,1.168,0,0,1-2.375-8.322Zm9.2,0A1.168,1.168,0,0,1,5.662-7.144,1.184,1.184,0,0,1,4.484-8.322,1.168,1.168,0,0,1,5.662-9.481,1.152,1.152,0,0,1,6.821-8.322Z" transform="translate(11.495 28.044)" fill="#fff"/>
</svg>
Coșul meu</a>
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