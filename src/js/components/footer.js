(function ($) {
  $(document).ready(function () {
    if (window.innerWidth < 850) {
      $(".footer-menu-column .title").click(function () {
        $(this).next().toggle("slow");
      });

      $(window).resize(function () {
        if ($(window).width() > 850) {
          $(".footer-menu-column ul").toggle(true);
        } else {
          $(".footer-menu-column ul").toggle(false);
        }
      });
    }
  });

  // newsletter email validation + popup
  $(".newsletter-container .newsletter-signup-form__button ").on(
    "click",
    function (e) {
      e.preventDefault();
      var emailaddressVal = $("#newsletter-input").val();
      // $('#mce-EMAIL').val(emailaddressVal);
      $(".newsletter-overlay").click(function () {
        $(".newsletter-popup").removeClass("active");
      });

      var hasError = false;
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      if (emailaddressVal == "") {
        $("#newsletter-input").attr("placeholder", "Adresa de email invalidă");

        $("#newsletter-input").val("");
        hasError = true;
      } else if (!emailReg.test(emailaddressVal)) {
        $("#newsletter-input").attr("placeholder", "Adresa de email invalidă");
        $("#newsletter-input").val("");
        // $("#placeholder-input").attr("placeholder", "Invalid Email").placeholder();
        hasError = true;
      }

      if (hasError == false) {
        $("#mce-EMAIL").attr("value", emailaddressVal).change();
        // $('.modal').toggleClass('hidden');

        $(".newsletter-popup").addClass("newsletter-popup--active");
      }
    }
  );

  // show newsletter popup directly if there's an error or notice
  $(".mc4wp-alert").filter(function () {
    $(".newsletter-popup").addClass("newsletter-popup--active");
  });

  // hide the newsletter popup when the background is clicked
  $(".newsletter-overlay").click(function () {
    $(".newsletter-popup").removeClass("newsletter-popup--active");
  });
})(jQuery);
