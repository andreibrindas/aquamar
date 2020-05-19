(function ($) {
  $(".mobile-header-menu-container ul li a").click(function (e) {
    $(this).next().toggle("slow");
  });
  $(".mobile-header-menu-container ul li .sub-menu li").click(function (e) {
    e.stopPropagation();
    $(this).children("sub-menu").toggle();
  });

  // $(document).click(function(event) {
  //   console.log(event.target);
  // });

  $(".hamburger").click(function () {
    $(".mobile-header-menu-container").toggle("slow");
    $(this).toggleClass("hamburger-active");
  });

  // $(".header .cart").click(function (e) {
  //   $(".dropdown-cos").toggle("fast");
  // });
})(jQuery);
