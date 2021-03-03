<?php 

// Creating the widget 
class Sidebar_Categories extends WP_Widget {
  
    function __construct() {
    parent::__construct(
      
    // Base ID of your widget
    'Sidebar_Categories', 
      
    // Widget name will appear in UI
    __('Sidebar Categories Widget', 'savage'), 
      
    // Widget description
    array( 'description' => __( 'Ads dynamic category listing to sidebar', 'savage' ), ) 
    );
    }
      
    // Creating widget front-end
      
    public function widget( $args, $instance ) {
    $title = apply_filters( 'widget_title', $instance['title'] );

    // Get the product categories that don't have parent
    
    // before and after widget arguments are defined by themes
    echo $args['before_widget'];
    // if ( ! empty( $title ) )
    // echo $args['before_title'] . $title . $args['after_title'];
    
    // This is where you run the code and display the output
    ?>
        <div class="sidebar" id="accordion">
            <?php
                require('sidebar-categories-widget-code.php');
            ?>
        </div>
       <?php
    
    echo $args['after_widget'];
    }
              
    // Widget Backend 
    public function form( $instance ) {
    if ( isset( $instance[ 'title' ] ) ) {
    $title = $instance[ 'title' ];
    }
    else {
    $title = __( 'New title', 'savage' );
    }
    // Widget admin form
    ?>
    <p>
        <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
    </p>
    <?php 
    }
          
    // Updating widget replacing old instances with new
    public function update( $new_instance, $old_instance ) {
    $instance = array();
    $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
    return $instance;
    }
     
    // Class Sidebar_Categories ends here
    } 
     
     
    // Register and load the widget
    function savage_load_widget() {
        register_widget( 'Sidebar_Categories' );
    }
    add_action( 'widgets_init', 'savage_load_widget' );