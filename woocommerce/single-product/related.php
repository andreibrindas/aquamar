<?php
/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.9.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $related_products ) : ?>

	<section class="related products ">

		<?php
		$heading = apply_filters( 'woocommerce_product_related_products_heading', __( 'Related products', 'woocommerce' ) );

		if ( $heading ) :
			?>
			<h2><?php echo esc_html( $heading ); ?></h2>
		<?php endif; ?>
		
		<?php woocommerce_product_loop_start(); ?>
			<div class="related-products-container">
				<?php foreach ( $related_products as $related_product ) : ?>

					<?php
						// print("<pre>");
						// print_r($related_product);
						// print("</pre>");
					?>

					
						<?php
						$post_object = get_post( $related_product->get_id() );

						setup_postdata( $GLOBALS['post'] =& $post_object ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited, Squiz.PHP.DisallowMultipleAssignments.Found

						// wc_get_template_part( 'content', 'product' );

						
						?>

						<div class="product-item product-sm">
							<a href="<?php echo get_permalink( $related_product->id ) ?>" class="product-image-link">
								<img src="<?php echo get_the_post_thumbnail_url($related_product->id);?>" alt="">
							</a>
							<a href="<?php echo get_permalink( $related_product->id ) ?>" class="title t-6"><?php echo $related_product->name ?></a>
							<img src="<?php echo get_template_directory_uri(); ?>/dist/images/curved-line.svg" alt="">
							<div class="bottom-section">
								<div class="price-container">
										<p class="small">de la</p>
										<p class="current-price"><?php echo $related_product->price ?> lei</p>
										<?php 
											if ( $related_product->is_on_sale() ){
												?>
													<p class="reduced-price">
													<?php echo $related_product->regular_price; ?> lei
													</p>
												<?php
												
											}
										?>
								</div>
								<div class="add-to-cart">
									<a href="<?php echo get_permalink( $related_product->id ) ?>" class="btn light-blue">Vezi detalii</a>
								</div>
							</div>
						</div>

				<?php endforeach; ?>
			</div>

		<?php woocommerce_product_loop_end(); ?>

	</section>
	<?php
endif;

wp_reset_postdata();
