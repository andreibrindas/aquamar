(function($) {
  $(".mobile .toggle-filters").click(function(e) {
    // console.log($("this"));
    $(this)
      .next(".sidebar-content")
      .toggle("slow");
  });
})(jQuery);
