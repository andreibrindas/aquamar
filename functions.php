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
    // add_theme_support( 'wc-product-gallery-zoom' );
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


//
function product_information_table() {
    $var = '';
    global $product;
    $informatii = explode(', ', $product->get_attribute('informatii'));
    ob_start();
    ?>
    <?php if(count($informatii)):?>
    <style>
        .information-table table {
            border-collapse: collapse;
        }
        .information-table table tr {
            border-top: 1px solid #dddddd;
            border-bottom: 1px solid #dddddd;
            padding: 10px;
        }
        .information-table table tr td {
            padding: 15px 0;
        }
    </style>
    <div class="table-responsive information-table infotable <?= $var?>">
    <table>
        <tbody>
        <?php
            $show = false;
            $vars = ['N', 'R50/53'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <!-- PERICOL -->
            <tr class="pericol">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/pericol.jpg" />
                </td>
                <td>
                    <strong>Periculos</strong>
                    <div class="text-container">
                        <?php if(in_array('N', $informatii)): ?>
                            <p class="n"><strong>N</strong> Periculos pentru mediu</p>
                        <?php endif; ?>
                        <?php if(in_array('R50/53', $informatii)): ?>
                            <p class="r50_53"><strong>R50/53</strong> Foarte toxic pentru organismele acvatice, poate avea efecte adverse pe termen lung asupra mediului acvatic</p>
                        <?php endif; ?>
                    </div>
                </td>
            </tr>
        <?php endif; ?>
        
        <?php
            $show = false;
            $vars = ['C', 'R31', 'R34'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <!-- COROZIV -->
            <tr class="coroziv">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/coroziv.jpg" />
                </td>
                <td>
                    <strong>Coroziv pentru metale</strong>
                    <div class="text-container">
                        <?php if(in_array('C', $informatii)): ?>
                            <p class="c"><strong>C</strong> Coroziv</p>
                        <?php endif; ?>
                        <?php if(in_array('R31', $informatii)): ?>
                            <p class="r31"><strong>R31</strong> În contact cu acizii degajă gaze toxice</p>
                        <?php endif; ?>
                        <?php if(in_array('R34', $informatii)): ?>
                            <p class="r34"><strong>R34</strong> Provoacă arsuri</p>
                        <?php endif; ?>
                    </div>
                </td>
            </tr>
        <?php endif; ?>
        
        <?php
            $show = false;
            $vars = ['Coroziv'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <tr class="coroziv2">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/coroziv2.jpg" />
                </td>
                <td>
                    <strong>Coroziv</strong>
                </td>
            </tr>
        <?php endif; ?>
            
        <?php
            $show = false;
            $vars = ['Iritant'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <!-- IRITANT ICON -->
            <tr class="iritant">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/nociv.jpg" />
                </td>
                <td><strong>Iritant</strong>
                </td>
            </tr>
        <?php endif; ?>

        <?php
            $show = false;
            $vars = ['X', 'R22', 'R36', 'R36/37'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <!-- NOCIV -->
            <tr class="nociv">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/nociv.jpg" />
                </td>
                <td>
                    <div class="text-container">
                        <?php if (in_array('X', $informatii)): ?>
                            <p class="xn"><strong>X</strong> Nociv</p>
                        <?php endif ?>
                        <?php if (in_array('R22', $informatii)): ?>
                            <p class="r22"><strong>R22</strong> Toxic pentru sănătate în caz de ingerare</p>
                        <?php endif ?>
                        <?php if (in_array('R36', $informatii)): ?>
                            <p class="r36"><strong>R36</strong> Iritant pentru ochi</p>    
                        <?php endif ?>
                        <?php if (in_array('R36/37', $informatii)): ?>
                            <p class="r36_37"><strong>R36/37</strong> Iritant pentru ochi şi căile respiratorii</p>
                        <?php endif ?>                            
                    </div>
                </td>
            </tr>
        <?php endif; ?>

        <?php
            $show = false;
            $vars = ['Toxic'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>            
            <!-- ATENTIE ICON -->
            <tr class="toxic">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/toxic.jpg" />
                </td>
                <td><strong>Toxic</strong>
                </td>
            </tr>
        <?php endif; ?>

        <?php
            $show = false;
            $vars = ['Atentie'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <tr class="atentie">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/atentie2.jpg" />
                </td>
                <td><strong>Atentie</strong>
                </td>
            </tr>
        <?php endif; ?>

        <?php
            $show = false;
            $vars = ['Periculos'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <tr class="atentie2">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/atentie2.jpg" />
                </td>
                <td><strong>Periculos</strong>
                </td>
            </tr>
        <?php endif; ?>
        
        <?php
            $show = false;
            $vars = ['O+', 'R8'];
            foreach ($vars as $var) {
                if(in_array($var, $informatii))
                {
                    $show = true;
                    break;
                }
            }
            if($show):
        ?>
            <!-- OXIDANT -->
            <tr class="oxidant">
                <td style="width:100px">
                    <img class="img-responsive thumbnail" src="<?= get_template_directory_uri(); ?>/dist/images/oxidant.jpg" />
                </td>
                <td>
                    <div class="text-container">
                        <?php if (in_array('O+', $informatii)): ?>
                            <p class="oplus"><strong>O+</strong> Oxidant</p>    
                        <?php endif ?>
                        <?php if (in_array('R8', $informatii)): ?>
                            <p class="r8"><strong>R8</strong> Pericol de incendiu in contact cu materiale combustibile</p>
                        <?php endif ?>
                    </div>                    
                </td>
            </tr>
        <?php endif; ?>
            
            <!-- FRAZE DIVERSE -->
            <tr class="fraze">
                <td colspan="2">
                    <ol>
                        <?php
                            $show = false;
                            $vars = ['H290', 'H302', 'H312', 'H314', 'H315', 'H318', 'H319', 'H332', 'H400', 'H335', 'EUH031', 'H410'];
                            foreach ($vars as $var) {
                                if(in_array($var, $informatii))
                                {
                                    $show = true;
                                    break;
                                }
                            }
                            if($show):
                        ?>
                            <!-- FRAZE DE PERICOL -->
                            <li class="fraze_pericol">
                                <strong>Fraze de pericol:</strong>
                                <dl class="dl-horizontal">
                                    <?php if (in_array('H290', $informatii)): ?>
                                        <p class="h290"><strong>H290</strong> Poate fi coroziv pentru metale</p>    
                                    <?php endif ?>
                                    <?php if (in_array('H302', $informatii)): ?>
                                        <p class="h302"><strong>H302</strong> Nociv în caz de ingerare</p>
                                    <?php endif ?>
                                    <?php if (in_array('H312', $informatii)): ?>
                                        <p class="h312"><strong>H312</strong> Dăunător sănătății la contact cu pielea</p>
                                    <?php endif ?>
                                    <?php if (in_array('H314', $informatii)): ?>
                                        <p class="h314"><strong>H314</strong> Provoacă arsuri grave ale pielii şi lezarea ochilor</p>
                                    <?php endif ?>
                                    <?php if (in_array('H315', $informatii)): ?>
                                        <p class="h315"><strong>H315</strong> Provoacă iritaţii ale pielii</p>
                                    <?php endif ?>
                                    <?php if (in_array('H318', $informatii)): ?>
                                        <p class="h318"><strong>H318</strong> Provoacă leziuni oculare grave. Cat.1</p>
                                    <?php endif ?>
                                    <?php if (in_array('H319', $informatii)): ?>
                                        <p class="h319"><strong>H319</strong> Provoacă iritaţii grave ale ochilor</p>
                                    <?php endif ?>
                                    <?php if (in_array('H332', $informatii)): ?>
                                        <p class="h332"><strong>H332</strong> Nociv în caz de inhalare</p>
                                    <?php endif ?>
                                    <?php if (in_array('H400', $informatii)): ?>
                                        <p class="h400"><strong>H400</strong> Foarte toxic pentru organismele acvatice</p>
                                    <?php endif ?>
                                    <?php if (in_array('H335', $informatii)): ?>
                                        <p class="h335"><strong>H335</strong> Foarte toxic pentru organismele acvatice</p>
                                    <?php endif ?>
                                    <?php if (in_array('EUH031', $informatii)): ?>
                                        <p class="euh031"><strong>EUH031</strong> În contact cu acizii degajă un gaz toxic</p>
                                    <?php endif ?>
                                    <?php if (in_array('H410', $informatii)): ?>
                                        <p class="h410"><strong>H410</strong> Foarte toxic pentru organismele acvatice, poate provoca efecte adverse pe termen lung asupra mediului acvatic.</p>
                                    <?php endif ?>
                                </dl>
                            </li>
                        <?php endif; ?>
                        
                        <?php
                            $show = false;
                            $vars = ['P301', 'P312', 'P304', 'P340', 'P305', 'P351', 'P338', 'P330', 'P337', 'P378', 'P403', 'P233', 'P501', 'P303', 'P361', 'P353'];
                            foreach ($vars as $var) {
                                if(in_array($var, $informatii))
                                {
                                    $show = true;
                                    break;
                                }
                            }
                            if($show):
                        ?>
                            <!-- FRAZE DE INTERVENTIE -->
                            <li class="fraze_pericol">
                                <strong>Fraze de pericol:</strong>
                                <dl class="dl-horizontal">
                                    <?php if (in_array('P301', $informatii) || in_array('P312', $informatii)) : ?>
                                        <p class="p301 p312"><strong>P301 / P312</strong> ÎN CAZ DE ÎNGHIŢIRE: În caz de indispoziții, sunați la un CENTRU DE INFORMARE TOXICOLOGICĂ sau medicul</p>    
                                    <?php endif ?>
                                    <?php if (in_array('P304', $informatii) || in_array('P340', $informatii)): ?>
                                        <p class="h304 p340"><strong>P304 P340</strong> ÎN CAZ DE INHALARE: Transportați victima la aer liber și mențineți-o în stare de repaus într-o poziție confortabilă (pentru respirație)</p>
                                    <?php endif ?>
                                    <?php if (in_array('P305', $informatii) || in_array('P351', $informatii) || in_array('P338', $informatii)): ?>
                                        <p class="p305 p351 p338"><strong>P305 / P351 / P338</strong> Dăunător sănătății la contact cu pielea</p>
                                    <?php endif ?>
                                    <?php if (in_array('H314', $informatii)): ?>
                                        <p class="h314"><strong>H314</strong> ÎN CAZ DE CONTACT CU OCHII: În caz de indispoziții, sunați la un CENTRU DE INFORMARE TOXICOLOGICĂ sau medicul</p>
                                    <?php endif ?>
                                    <?php if (in_array('P330', $informatii)): ?>
                                        <p class="p330"><strong>H315</strong> Clătiți gura</p>
                                    <?php endif ?>
                                    <?php if (in_array('P337', $informatii) || in_array('P378', $informatii)): ?>
                                        <p class="p337 p378"><strong>P337 / P378</strong> Dacă iritarea ochilor persistă: solicitați sfat medical</p>
                                    <?php endif ?>
                                    <?php if (in_array('P403', $informatii) || in_array('P233', $informatii)): ?>
                                        <p class="p403 p233"><strong>P403 / P233</strong> Recipientele se păstrează într-un loc răcoros, uscat, bine aerisit</p>
                                    <?php endif ?>
                                    <?php if (in_array('P501', $informatii)): ?>
                                        <p class="p501"><strong>P501</strong> Aruncați conținutul / recipientul la o instalație de eliminare a deșeurilor aprobată</p>
                                    <?php endif ?>
                                    <?php if (in_array('P303', $informatii) || in_array('P361', $informatii) || in_array('P353', $informatii)): ?>
                                        <p class="p303 p361 p353"><strong>P303 / P361 / P353</strong> ÎN CAZ DE CONTACT CU PIELEA (sau părul), scoateţi imediat toată îmbrăcămintea contaminată. </p>
                                    <?php endif ?>
                                </dl>
                            </li>
                        <?php endif; ?>
                        
                        <?php
                            $show = false;
                            $vars = ['P210', 'P221', 'P261', 'P102', 'P220', 'P264', 'P270', 'P271', 'P273', 'P280', 'P391', 'INQ'];
                            foreach ($vars as $var) {
                                if(in_array($var, $informatii))
                                {
                                    $show = true;
                                    break;
                                }
                            }
                            if($show):
                        ?>
                            <!-- FRAZE DE PREVENIRE -->
                            <li class="fraze_pericol">
                                <strong>Fraze de pericol:</strong>
                                <dl class="dl-horizontal">
                                    <?php if (in_array('P210', $informatii)): ?>
                                        <p class="p210"><strong>P210</strong> A se păstra departe de surse de căldura / scântei / flăcări deschise / suprafețe încinse. - Fumatul interzis.</p>
                                    <?php endif ?>
                                    <?php if (in_array('P221', $informatii)): ?>
                                        <p class="p221"><strong>P221</strong> Luați toate măsurile de precauție pentru a evita amestecul cu combustibili</p>
                                    <?php endif ?>
                                    <?php if (in_array('P261', $informatii)): ?>
                                        <p class="p261"><strong>P261</strong> Evitați sa inspirați vaporii</p>
                                    <?php endif ?>
                                    <?php if (in_array('P102', $informatii)): ?>
                                        <p class="p102"><strong>P102</strong> A nu se lașa la îndemna copiilor</p>
                                    <?php endif ?>
                                    <?php if (in_array('P220', $informatii)): ?>
                                        <p class="p220"><strong>P220</strong> A se păstra/depozita departe de îmbrăcăminte / … / materiale combustibile</p>
                                    <?php endif ?>
                                    <?php if (in_array('P264', $informatii)): ?>
                                        <p class="p264"><strong>P264</strong> Spălați bine mâinile după utilizare</p>
                                    <?php endif ?>
                                    <?php if (in_array('P270', $informatii)): ?>
                                        <p class="p270"><strong>P270</strong> A nu mânca, bea sau fuma în timpul utilizării produsului</p>
                                    <?php endif ?>
                                    <?php if (in_array('P271', $informatii)): ?>
                                        <p class="p271"><strong>P271</strong> A se utiliza numai în aer liber sau în spatii bine ventilate</p>
                                    <?php endif ?>
                                    <?php if (in_array('P273', $informatii)): ?>
                                        <p class="p273"><strong>P273</strong> A se evita dispersarea în mediu</p>
                                    <?php endif ?>
                                    <?php if (in_array('P280', $informatii)): ?>
                                        <p class="p280"><strong>P280</strong> Purtați mânuși de protecție/îmbrăcăminte de protecție / protecție pentru ochi / protecție pentru față</p>
                                    <?php endif ?>
                                    <?php if (in_array('P391', $informatii)): ?>
                                        <p class="p391"><strong>P391</strong> Colectați scurgerile de produs</p>
                                    <?php endif ?>
                                    <?php if (in_array('INQ', $informatii)): ?>
                                        <p class="inq"><strong>INQ</strong> Producător Inquide SA</p>
                                    <?php endif ?>
                                </dl>
                            </li>
                        <?php endif; ?>
                        
                        <?php
                            $show = false;
                            $vars = ['R20/21/22', 'R21/22', 'R21/22', 'R34', 'R35', 'R36', 'R37','R38', 'R41', 'R50'];
                            foreach ($vars as $var) {
                                if(in_array($var, $informatii))
                                {
                                    $show = true;
                                    break;
                                }
                            }
                            if($show):
                        ?>
                            <!-- FRAZE DE RISC -->
                            <li class="fraze_risc">
                                <strong>Fraze de risc:</strong>
                                <dl class="dl-horizontal">
                                    <?php if (in_array('R20/21/22', $informatii)): ?>
                                        <p class="r20_21_22"><strong>R20/21/22</strong> Nociv prin inhalare, in contact cu pielea si prin inghitire</p>
                                    <?php endif ?>
                                    <?php if (in_array('R21/22', $informatii)): ?>
                                        <p class="r21_22"><strong>R21/22</strong> Nociv în contact cu pielea și prin înghițire</p>
                                    <?php endif ?>
                                    <?php if (in_array('R34', $informatii)): ?>
                                        <p class="r34"><strong>R34</strong> Provoacă arsuri</p>
                                    <?php endif ?>
                                    <?php if (in_array('R35', $informatii)): ?>
                                        <p class="r35"><strong>R35</strong> Provoacă arsuri grave</p>
                                    <?php endif ?>
                                    <?php if (in_array('R36', $informatii)): ?>
                                        <p class="r36"><strong>R36</strong> Iritant pentru ochi</p>
                                    <?php endif ?>
                                    <?php if (in_array('R37', $informatii)): ?>
                                        <p class="r37"><strong>R37</strong> Iritant pentru caile respiratorii</p>
                                    <?php endif ?>
                                    <?php if (in_array('R38', $informatii)): ?>
                                        <p class="r38"><strong>R38</strong> Iritant pentru piele</p>
                                    <?php endif ?>
                                    <?php if (in_array('R41', $informatii)): ?>
                                        <p class="r41"><strong>R41</strong> Risc de leziuni oculare grave</p>
                                    <?php endif ?>
                                    <?php if (in_array('R50', $informatii)): ?>
                                        <p class="r50"><strong>R50</strong> Foarte toxic pentru organismele acvatice</p>
                                    <?php endif ?>
                                </dl>
                            </li>
                        <?php endif; ?>
                        
                        <?php
                            $show = false;
                            $vars = ['S1', 'S2', 'S8', 'S20', 'S22','S23', 'S24', 'S26', 'S28', 'S30', 'S35', 'S37/39', 'S36/37/39', 'S41', 'S45', 'S46', 'S50', 'S60', 'S61'];
                            foreach ($vars as $var) {
                                if(in_array($var, $informatii))
                                {
                                    $show = true;
                                    break;
                                }
                            }
                            if($show):
                        ?>
                            <!-- FRAZE DE SECURITATE -->
                            <li class="fraze_securitate">
                                <strong>Fraze de securitate:</strong>
                                <dl class="dl-horizontal">
                                    <?php if (in_array('S1', $informatii)): ?>
                                        <p class="s1"><strong>S1</strong> A se păstra sub cheie</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S2', $informatii)): ?>
                                        <p class="s2"><strong>S2</strong> A nu se lăsa la îndemâna copiilor</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S8', $informatii)): ?>
                                        <p class="s8"><strong>S8</strong> A se păstra recipientul închis ermetic</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S20', $informatii)): ?>
                                        <p class="s20"><strong>S20</strong> A nu se consuma alimente şi băuturi pe durata utilizării</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S22', $informatii)): ?>
                                        <p class="s22"><strong>S22</strong> Nu inhalaţi praful</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S23', $informatii)): ?>
                                        <p class="s23"><strong>S23</strong> A nu inspira gazul / fumul / vaporii / aerosolii</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S24', $informatii)): ?>
                                        <p class="s24"><strong>S24</strong> Se va evita contactul cu ochii şi pielea</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S26', $informatii)): ?>
                                        <p class="s26"><strong>S26</strong> La contactul cu ochii, se spală imediat cu multă apă și se consultă medicul</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S28', $informatii)): ?>
                                        <p class="s28"><strong>S28</strong> La contactul cu pielea, se spală imediat cu multă apă şi săpun</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S30', $informatii)): ?>
                                        <p class="s30"><strong>S30</strong> A nu se turna niciodată apă peste produs</p>    
                                    <?php endif ?>
                                    <?php if (in_array('S35', $informatii)): ?>
                                        <p class="s35"><strong>S35</strong> A se elimina reziduurile produsului şi ambalajul (recipientul) după ce s-au luat toate măsurile de precauţie</p>
                                    <?php endif ?>
                                    <?php if (in_array('S37/39', $informatii)): ?>
                                        <p class="s37_39"><strong>S37/39</strong> A se purta mănuși de protecție corespunzătoare și a se proteja corespunzător ochii/fața</p>
                                    <?php endif ?>
                                    <?php if (in_array('S36/37/39', $informatii)): ?>
                                        <p class="s36_37_39"><strong>S36/37/39</strong> A se purta echipament de protecție și mănuși de protecție corespunzătoare, a se proteja corespunzător ochii/fața</p>
                                    <?php endif ?>
                                    <?php if (in_array('S41', $informatii)): ?>
                                        <p class="s41"><strong>S41</strong> În caz de incendiu și / sau explozie, a nu se inspira fumul</p>
                                    <?php endif ?>
                                    <?php if (in_array('S45', $informatii)): ?>
                                        <p class="s45"><strong>S45</strong> În caz de accident sau dacă vă simțiți rău, a se consulta imediat medicul. (dacă este posibil, i se arăta eticheta)</p>
                                    <?php endif ?>
                                    <?php if (in_array('S46', $informatii)): ?>
                                        <p class="s46"><strong>S46</strong> În caz de înghițire, a se consulta imediat medicul și a i se arăta ambalajul (recipientul) sau eticheta</p>
                                    <?php endif ?>
                                    <?php if (in_array('S50', $informatii)): ?>
                                        <p class="s50"><strong>S50</strong> A nu se amesteca cu acizi!</p>
                                    <?php endif ?>
                                    <?php if (in_array('S60', $informatii)): ?>
                                        <p class="s60"><strong>S60</strong> A se elimina produsul şi ambalajul (recipientul) ca deşeu periculos</p>
                                    <?php endif ?>
                                    <?php if (in_array('S61', $informatii)): ?>
                                        <p class="s61"><strong>S61</strong> A se evita dispersarea în mediu. A se consulta instrucţiunile speciale / fişa tehnică de securitate</p>    
                                    <?php endif ?>                                    
                                </dl> 
                            </li>
                        <?php endif; ?>
                        
                        <!-- MASURI DE PRIM AJUTOR -->
                        <li class="prim_ajutor">
                            <strong>Măsuri de prim - ajutor</strong>
                            <ul>
                                <li><strong>Indicaţii generale</strong>: Se vor îndepărta obiectele vestimentare contaminate de produs. În caz de leşin, pacientul trebuie ţinut şi transportat în poziţie laterală cât mai stabilă.</li>
                                <li><strong>După inhalare</strong>: Transport în aer liber. Repaus şi consultaţi un medic.</li>
                                <li><strong>După contact cu pielea</strong>: Spălaţi imediat cu apă şi săpun şi clătiţi bine. Dacă iritaţia persistă, consultaţi medicul.</li>
                                <li><strong>După contact cu ochii</strong>: Spălaţi ochii cu multă apă, ţinând pleoapele deschise.</li>
                                <li><strong>După ingerare</strong>: Clătiţi gura şi beţi apă multă. Consultaţi imediat medicul.</li>
                                <li><strong>Instrucţiuni pentru medic</strong>: Tratament local al simptomelor de iritaţie. Nu induceţi voma. Pericol de distrugere a stomacului. În caz de iritare a căilor respiratorii, se vor inspira 5 doze de aerosoli cu Dexametazonă la fiecare 10 minute, până ce durerile încetează. Dacă totuşi se ia în calcul un edem pulmonar, vor exista simptome latente timp de două zile. Repaus la pat. Profilaxia infecţiei. La nevoie, oxigen.</li>
                                <li><strong>Pot apărea următoarele simptome</strong>: Arsuri şi dureri ale ochilor, mucoasei nazale şi faringelor, precum şi ale ochilor. Pot apărea băşici. Tuse, sufocaţie, pericol de asfixiere. Pericol de formare a unui edem pulmonar (chiar cu întârziere de câteva zile).</li>
                            </ul>
                        </li>
                    </ol>
                </td>
            </tr>
            
        </tbody>
    </table>
    <p style="margin-top: 10px;"><strong>A se consulta instrucţiunile speciale/fişa tehnică de securitate</strong></p>
    </div>
    <?php endif;?>
    <?php
    return ob_get_clean();
}
add_shortcode('information', 'product_information_table');

add_filter( 'woocommerce_sale_flash', 'add_percentage_to_sale_badge', 20, 3 );
function add_percentage_to_sale_badge( $html, $post, $product ) {
    if( $product->is_type('variable')){
        $percentages = array();

        // Get all variation prices
        $prices = $product->get_variation_prices();

        // Loop through variation prices
        foreach( $prices['price'] as $key => $price ){
            // Only on sale variations
            if( $prices['regular_price'][$key] !== $price ){
                // Calculate and set in the array the percentage for each variation on sale
                $percentages[] = round(100 - ($prices['sale_price'][$key] / $prices['regular_price'][$key] * 100));
            }
        }
        // We keep the highest value
        $percentage = max($percentages) . '%';
    } else {
        $regular_price = (float) $product->get_regular_price();
        $sale_price    = (float) $product->get_sale_price();

        $percentage    = round(100 - ($sale_price / $regular_price * 100)) . '%';
    }
    return '<span class="onsale">' . esc_html__( '-', 'woocommerce' ) . ' ' . $percentage . '</span>';
}


add_action( 'woocommerce_before_shop_loop_item', 'bbloomer_show_sale_percentage_loop', 25 );
  
function bbloomer_show_sale_percentage_loop() {
   global $product;
   if ( ! $product->is_on_sale() ) return;
   if ( $product->is_type( 'simple' ) ) {
      $max_percentage = ( ( $product->get_regular_price() - $product->get_sale_price() ) / $product->get_regular_price() ) * 100;
   } elseif ( $product->is_type( 'variable' ) ) {
      $max_percentage = 0;
      foreach ( $product->get_children() as $child_id ) {
         $variation = wc_get_product( $child_id );
         $price = $variation->get_regular_price();
         $sale = $variation->get_sale_price();
         if ( $price != 0 && ! empty( $sale ) ) $percentage = ( $price - $sale ) / $price * 100;
         if ( $percentage > $max_percentage ) {
            $max_percentage = $percentage;
         }
      }
   }
   if ( $max_percentage > 0 ) echo "<div class='sale-perc'>-" . round($max_percentage) . "%</div>"; 
}


add_filter('woocommerce_checkout_fields', 'custom_woocommerce_billing_fields', 10, 1);

function custom_woocommerce_billing_fields($fields)
{

    $fields['billing']['billing_cif'] = array(
        'label' => __('CIF', 'woocommerce'), // Add custom field label
        'placeholder' => _x('', 'placeholder', 'woocommerce'), // Add custom field placeholder
        'required' => false, // if field is required or not
        'clear' => false, // add clear or not
        'type' => 'text', // add field type
        'class' => array('my-css'),    // add class name
        'priority' => 30
    );


    return $fields;
    // print("<pre>");
    // print_r($fields);
    // print("</pre>");
}

add_action( 'woocommerce_admin_order_data_after_billing_address', 'my_custom_checkout_field_display_admin_order_meta', 10, 1 );

function my_custom_checkout_field_display_admin_order_meta($order){
    echo '<p><strong>'.__('CIF companie').':</strong> ' . get_post_meta( $order->get_id(), '_billing_cif', true ) . '</p>';
}


add_action( 'woocommerce_before_shop_loop_item', 'bbloomer_new_badge_shop_page', 3 );
          
function bbloomer_new_badge_shop_page() {
   global $product;
   $newness_days = 30;
   $created = strtotime( $product->get_date_created() );
   if ( ( time() - ( 60 * 60 * 24 * $newness_days ) ) < $created ) {
      echo '<span class="new">' . esc_html__( 'Nou!', 'woocommerce' ) . '</span>';
   }
}

// Woocommerce checkbox for newsletter
add_action( 'woocommerce_review_order_before_submit', 'add_newsletter_subscription', 9 );
    
function add_newsletter_subscription() {
   
woocommerce_form_field( 'gdpr_3381', array(
  'type'          => 'checkbox',
  'class'         => array('form-row privacy'),
  'label_class'   => array('woocommerce-form__label woocommerce-form__label-for-checkbox checkbox'),
  'input_class'   => array('woocommerce-form__input woocommerce-form__input-checkbox input-checkbox'),
  'required'      => 0,
  'label'         => 'Sunt de acord ca datele mele să fie prelucrate de Aquamar Solutions',
)); 
   
}


// $aqua_includes = array(
// 	// '/siebar-categories-widget.php',

// );

// foreach ( $aqua_includes as $file ) {
// 	require_once get_template_directory() . '/inc' . $file;
// }