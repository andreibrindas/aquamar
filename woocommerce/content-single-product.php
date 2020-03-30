<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;
?>
<div class="sidebar-support">
	<div class="upper">
		<img src="<?php echo get_template_directory_uri(); ?>/dist/images/support.svg" alt="">
		<p>Ai o întrebare?</p>
		<p>Te ajutăm să alegi.</p>
		<a href="tel:0720000000">0720 000 000</a>
	</div>
	<div class="bottom">
		<div class="item">
			<div class="image">
				<img src="<?php echo get_template_directory_uri(); ?>/dist/images/certificat.svg" alt="">
			</div>
			<h5>PRODUSE <br> CERTIFICATE</h5>
		</div>
		<div class="item">
			<div class="image">
				<img src="<?php echo get_template_directory_uri(); ?>/dist/images/autorizat.svg" alt="">
			</div>
			<h5>DISTRIBUITOR <br> AUTORIZAT</h5>
		</div>
		<div class="item">
			<div class="image">
				<img src="<?php echo get_template_directory_uri(); ?>/dist/images/transport.svg" alt="">
			</div>
			<h5>LIVRARE <br> RAPIDĂ</h5>
		</div>
	</div>
</div>	


<div class="container">

<?php

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked wc_print_notices - 10
 */
do_action( 'woocommerce_before_single_product' );


if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}

?>

<?php woocommerce_breadcrumb(); ?>


<h1 class="title t-4 mobile-product-title"><?php the_title() ?></h1>

<div id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>
	<div class="product-data">
		<?php
		/**
		 * Hook: woocommerce_before_single_product_summary.
		 *
		 * @hooked woocommerce_show_product_sale_flash - 10
		 * @hooked woocommerce_show_product_images - 20
		 */
		do_action( 'woocommerce_before_single_product_summary' );
		?>


		<div class="summary entry-summary">
			<?php
			/**
			 * Hook: woocommerce_single_product_summary.
			 *
			 * @hooked woocommerce_template_single_title - 5
			 * @hooked woocommerce_template_single_rating - 10
			 * @hooked woocommerce_template_single_price - 10
			 * @hooked woocommerce_template_single_excerpt - 20
			 * @hooked woocommerce_template_single_add_to_cart - 30
			 * @hooked woocommerce_template_single_meta - 40
			 * @hooked woocommerce_template_single_sharing - 50
			 * @hooked WC_Structured_Data::generate_product_data() - 60
			 */
			do_action( 'woocommerce_single_product_summary' );
			?>
	</div>
	</div>
	<?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */
	do_action( 'woocommerce_after_single_product_summary' );
	?>
	
	
</div>
</div>	
<?php do_action( 'woocommerce_after_single_product' ); ?>
