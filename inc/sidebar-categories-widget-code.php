<?php 


$parent_product_categories = get_terms(['taxonomy' => 'product_cat','hide_empty' => false, 'parent' => 0]);

// Current category that is being viewed
$curent_category = get_queried_object(  );

// var_dump($curent_category);



// var_dump($children);


        if ( !is_product_category( $curent_category->slug ) ) {
            foreach ($parent_product_categories as $category) {
                ?> 
                    <a href="<?php echo get_term_link( $category->term_id, 'product_cat' ) ?>" class="sidebar__title"><?php echo $category->name ?></a>
                <?php
            }
        } else {

            
            $level_one_cat = get_terms( ['taxonomy' => 'product_cat', 'hide_empty' => false, 'parent' => $curent_category->term_id] );

            ?>
                <h2 class="sidebar__title"><?php echo $curent_category->name ?></h2>
            <?php

            foreach ( $level_one_cat as $level_one ) {
                $level_two_cat = get_terms( ['taxonomy' => 'product_cat', 'hide_empty' => false, 'parent' => $level_one->term_id] );

                $children = get_terms ( 'product_cat', [
                    'parent' => $level_one->term_id,
                    'hide_empty' => false
                ] );
                // var_dump($children)
                if ( ! empty($children) ) {
                    ?>
                        <a href="#collapse<?php echo $level_one->term_id  ?>" class="sidebar__sub-category-header ml-4" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse<?php echo $level_one->term_id ?>"><?php echo $level_one->name ?></a>
                            <div class="sidebar__level-two collapse" data-toggle="collapse" data-parent="#accordion" id="collapse<?php echo $level_one->term_id ?>">

                                <?php
                                // var_dump($level_two_cat);
                                foreach ( $level_two_cat as $level_two ) {                                    
                                    ?><a href="<?php echo get_term_link( $level_two->term_id, 'product_cat' ) ?>" class="sidebar__sub-category ml-4"><?php echo $level_two->name ?></a><?php
                                }?>

                                <a href="<?php echo get_term_link( $level_one->term_id, 'product_cat' ) ?>" class="sidebar__sub-category ml-4">Vezi toate</a>

                        </div>

                    <?php
                } else {
                    ?>
                        <a href="<?php echo get_term_link( $level_one->term_id, 'product_cat' ) ?>" class="sidebar__sub-category-header ml-4" ><?php echo $level_one->name ?></a>
                        <!-- <i class="icon-close"></i> -->
                    <?php
                }
                    
            }
            

        }
        
        
 