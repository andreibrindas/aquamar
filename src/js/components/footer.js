(function($) {
  $(document).ready(function() {
    if (window.innerWidth < 850) {
      $(".footer-menu-column .title").click(function() {
        $(this)
          .next()
          .toggle("slow");
      });

      $(window).resize(function() {
        if ($(window).width() > 850) {
          $(".footer-menu-column ul").toggle(true);
        } else {
          $(".footer-menu-column ul").toggle(false);
        }
      });
    }
  });
})(jQuery);
