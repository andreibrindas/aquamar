(function($) {
  console.log("Hello from product page");
  $(".woocommerce div.product form.cart div.quantity").prepend(
    '<span class="quantity-minus">-</span>'
  );
  $(".woocommerce div.product form.cart div.quantity").append(
    '<span class="quantity-plus">+</span>'
  );

  $(document).on("click", ".quantity-plus", function() {
    var input = $(this)
      .parent()
      .find("input");
    var value = parseInt(input.val());
    var step = parseInt(input.attr("step"));
    var max = parseInt(input.attr("max"));
    var new_value = value + step;
    if (max && new_value > max) new_value = max;
    input.val(new_value).trigger("change");
  });

  $(document).on("click", ".quantity-minus", function() {
    var input = $(this)
      .parent()
      .find("input");
    var value = parseInt(input.val());
    var step = parseInt(input.attr("step"));
    var min = parseInt(input.attr("min"));
    var new_value = value - step;
    if (min && new_value < min) new_value = min;
    input.val(new_value).trigger("change");
  });
})(jQuery);
