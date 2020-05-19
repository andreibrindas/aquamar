// Slick sliders

(function($) {
  $(document).ready(function() {
    // Slick slider pentru Produse recomandate
    $(".recomandate-gallery").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    });

    // Slick slider pentru pachete intretinere
    $(".pachete-gallery").slick({
      centerMode: true,
      dots: true,
      centerPadding: "400px",
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            centerPadding: "200px"
          }
        },
        {
          breakpoint: 1250,
          settings: {
            centerPadding: "100px"
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerMode: true,
            arrows: false,
            centerPadding: "500px"
          }
        },
        {
          breakpoint: 850,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "100px",
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }
      ]
    });

    $(".blog-mobil-gallery").slick({
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1
    });

    // $(".related-products-container").slick({
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 800,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: false
    //       }
    //     }
    //   ]
    // });
  });
})(jQuery);
