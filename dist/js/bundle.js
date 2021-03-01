/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-page */ "./src/js/components/product-page.js");
/* harmony import */ var _components_product_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_product_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shop-page */ "./src/js/components/shop-page.js");
/* harmony import */ var _components_shop_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_shop_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_footer__WEBPACK_IMPORTED_MODULE_4__);





console.log("bundle");

/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  }); // newsletter email validation + popup

  $(".newsletter-container .newsletter-signup-form__button ").on("click", function (e) {
    e.preventDefault();
    var emailaddressVal = $("#newsletter-input").val(); // $('#mce-EMAIL').val(emailaddressVal);

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
      $("#newsletter-input").val(""); // $("#placeholder-input").attr("placeholder", "Invalid Email").placeholder();

      hasError = true;
    }

    if (hasError == false) {
      $("#mce-EMAIL").attr("value", emailaddressVal).change(); // $('.modal').toggleClass('hidden');

      $(".newsletter-popup").addClass("newsletter-popup--active");
    }
  }); // show newsletter popup directly if there's an error or notice

  $(".mc4wp-alert").filter(function () {
    $(".newsletter-popup").addClass("newsletter-popup--active");
  }); // hide the newsletter popup when the background is clicked

  $(".newsletter-overlay").click(function () {
    $(".newsletter-popup").removeClass("newsletter-popup--active");
  });
})(jQuery);

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(".mobile-header-menu-container ul li a").click(function (e) {
    $(this).next().toggle("slow");
  });
  $(".mobile-header-menu-container ul li .sub-menu li").click(function (e) {
    e.stopPropagation();
    $(this).children("sub-menu").toggle();
  }); // $(document).click(function(event) {
  //   console.log(event.target);
  // });

  $(".hamburger").click(function () {
    $(".mobile-header-menu-container").toggle("slow");
    $(this).toggleClass("hamburger-active");
  }); // $(".header .cart").click(function (e) {
  //   $(".dropdown-cos").toggle("fast");
  // });
})(jQuery);

/***/ }),

/***/ "./src/js/components/product-page.js":
/*!*******************************************!*\
  !*** ./src/js/components/product-page.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  console.log("Hello from product page");
  $(".woocommerce div.product form.cart div.quantity").prepend('<span class="quantity-minus">-</span>');
  $(".woocommerce div.product form.cart div.quantity").append('<span class="quantity-plus">+</span>');
  $(document).on("click", ".quantity-plus", function () {
    var input = $(this).parent().find("input");
    var value = parseInt(input.val());
    var step = parseInt(input.attr("step"));
    var max = parseInt(input.attr("max"));
    var new_value = value + step;
    if (max && new_value > max) new_value = max;
    input.val(new_value).trigger("change");
  });
  $(document).on("click", ".quantity-minus", function () {
    var input = $(this).parent().find("input");
    var value = parseInt(input.val());
    var step = parseInt(input.attr("step"));
    var min = parseInt(input.attr("min"));
    var new_value = value - step;
    if (min && new_value < min) new_value = min;
    input.val(new_value).trigger("change");
  });
})(jQuery);

/***/ }),

/***/ "./src/js/components/shop-page.js":
/*!****************************************!*\
  !*** ./src/js/components/shop-page.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(".mobile .toggle-filters").click(function (e) {
    // console.log($("this"));
    $(this).next(".sidebar-content").toggle("slow");
  });
})(jQuery);

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Slick sliders
(function ($) {
  $(document).ready(function () {
    // Slick slider pentru Produse recomandate
    $(".recomandate-gallery").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }]
    }); // Slick slider pentru pachete intretinere

    $(".pachete-gallery").slick({
      centerMode: true,
      dots: true,
      centerPadding: "400px",
      slidesToShow: 1,
      responsive: [{
        breakpoint: 1600,
        settings: {
          centerPadding: "200px"
        }
      }, {
        breakpoint: 1250,
        settings: {
          centerPadding: "100px"
        }
      }, {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "500px"
        }
      }, {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }]
    });
    $(".blog-mobil-gallery").slick({
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1
    }); // $(".related-products-container").slick({
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

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\filip\Local Sites\aquamar\app\public\wp-content\themes\aqua\src\js\bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG9wLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGljayIsIm5leHQiLCJ0b2dnbGUiLCJyZXNpemUiLCJ3aWR0aCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxhZGRyZXNzVmFsIiwidmFsIiwicmVtb3ZlQ2xhc3MiLCJoYXNFcnJvciIsImVtYWlsUmVnIiwiYXR0ciIsInRlc3QiLCJjaGFuZ2UiLCJhZGRDbGFzcyIsImZpbHRlciIsImpRdWVyeSIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkcmVuIiwidG9nZ2xlQ2xhc3MiLCJwcmVwZW5kIiwiYXBwZW5kIiwiaW5wdXQiLCJwYXJlbnQiLCJmaW5kIiwidmFsdWUiLCJwYXJzZUludCIsInN0ZXAiLCJtYXgiLCJuZXdfdmFsdWUiLCJ0cmlnZ2VyIiwibWluIiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImFycm93cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEU7Ozs7Ozs7Ozs7O0FDTEEsQ0FBQyxVQUFVQyxDQUFWLEVBQWE7QUFDWkEsR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCLFFBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUMzQkosT0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NLLEtBQWhDLENBQXNDLFlBQVk7QUFDaERMLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixHQUFlQyxNQUFmLENBQXNCLE1BQXRCO0FBQ0QsT0FGRDtBQUlBUCxPQUFDLENBQUNHLE1BQUQsQ0FBRCxDQUFVSyxNQUFWLENBQWlCLFlBQVk7QUFDM0IsWUFBSVIsQ0FBQyxDQUFDRyxNQUFELENBQUQsQ0FBVU0sS0FBVixLQUFvQixHQUF4QixFQUE2QjtBQUMzQlQsV0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJPLE1BQTVCLENBQW1DLElBQW5DO0FBQ0QsU0FGRCxNQUVPO0FBQ0xQLFdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCTyxNQUE1QixDQUFtQyxLQUFuQztBQUNEO0FBQ0YsT0FORDtBQU9EO0FBQ0YsR0FkRCxFQURZLENBaUJaOztBQUNBUCxHQUFDLENBQUMsd0RBQUQsQ0FBRCxDQUE0RFUsRUFBNUQsQ0FDRSxPQURGLEVBRUUsVUFBVUMsQ0FBVixFQUFhO0FBQ1hBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLGVBQWUsR0FBR2IsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJjLEdBQXZCLEVBQXRCLENBRlcsQ0FHWDs7QUFDQWQsS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLEtBQXpCLENBQStCLFlBQVk7QUFDekNMLE9BQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCZSxXQUF2QixDQUFtQyxRQUFuQztBQUNELEtBRkQ7QUFJQSxRQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxxQ0FBZjs7QUFFQSxRQUFJSixlQUFlLElBQUksRUFBdkIsRUFBMkI7QUFDekJiLE9BQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCa0IsSUFBdkIsQ0FBNEIsYUFBNUIsRUFBMkMsMEJBQTNDO0FBRUFsQixPQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmMsR0FBdkIsQ0FBMkIsRUFBM0I7QUFDQUUsY0FBUSxHQUFHLElBQVg7QUFDRCxLQUxELE1BS08sSUFBSSxDQUFDQyxRQUFRLENBQUNFLElBQVQsQ0FBY04sZUFBZCxDQUFMLEVBQXFDO0FBQzFDYixPQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmtCLElBQXZCLENBQTRCLGFBQTVCLEVBQTJDLDBCQUEzQztBQUNBbEIsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJjLEdBQXZCLENBQTJCLEVBQTNCLEVBRjBDLENBRzFDOztBQUNBRSxjQUFRLEdBQUcsSUFBWDtBQUNEOztBQUVELFFBQUlBLFFBQVEsSUFBSSxLQUFoQixFQUF1QjtBQUNyQmhCLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JrQixJQUFoQixDQUFxQixPQUFyQixFQUE4QkwsZUFBOUIsRUFBK0NPLE1BQS9DLEdBRHFCLENBRXJCOztBQUVBcEIsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJxQixRQUF2QixDQUFnQywwQkFBaEM7QUFDRDtBQUNGLEdBL0JILEVBbEJZLENBb0RaOztBQUNBckIsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnNCLE1BQWxCLENBQXlCLFlBQVk7QUFDbkN0QixLQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnFCLFFBQXZCLENBQWdDLDBCQUFoQztBQUNELEdBRkQsRUFyRFksQ0F5RFo7O0FBQ0FyQixHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkssS0FBekIsQ0FBK0IsWUFBWTtBQUN6Q0wsS0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJlLFdBQXZCLENBQW1DLDBCQUFuQztBQUNELEdBRkQ7QUFHRCxDQTdERCxFQTZER1EsTUE3REgsRTs7Ozs7Ozs7Ozs7QUNBQSxDQUFDLFVBQVV2QixDQUFWLEVBQWE7QUFDWkEsR0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNLLEtBQTNDLENBQWlELFVBQVVNLENBQVYsRUFBYTtBQUM1RFgsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLEdBQWVDLE1BQWYsQ0FBc0IsTUFBdEI7QUFDRCxHQUZEO0FBR0FQLEdBQUMsQ0FBQyxrREFBRCxDQUFELENBQXNESyxLQUF0RCxDQUE0RCxVQUFVTSxDQUFWLEVBQWE7QUFDdkVBLEtBQUMsQ0FBQ2EsZUFBRjtBQUNBeEIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsUUFBUixDQUFpQixVQUFqQixFQUE2QmxCLE1BQTdCO0FBQ0QsR0FIRCxFQUpZLENBU1o7QUFDQTtBQUNBOztBQUVBUCxHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSyxLQUFoQixDQUFzQixZQUFZO0FBQ2hDTCxLQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ08sTUFBbkMsQ0FBMEMsTUFBMUM7QUFDQVAsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEIsV0FBUixDQUFvQixrQkFBcEI7QUFDRCxHQUhELEVBYlksQ0FrQlo7QUFDQTtBQUNBO0FBQ0QsQ0FyQkQsRUFxQkdILE1BckJILEU7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxVQUFTdkIsQ0FBVCxFQUFZO0FBQ1hGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FDLEdBQUMsQ0FBQyxpREFBRCxDQUFELENBQXFEMkIsT0FBckQsQ0FDRSx1Q0FERjtBQUdBM0IsR0FBQyxDQUFDLGlEQUFELENBQUQsQ0FBcUQ0QixNQUFyRCxDQUNFLHNDQURGO0FBSUE1QixHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZUyxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsWUFBVztBQUNuRCxRQUFJbUIsS0FBSyxHQUFHN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNUOEIsTUFEUyxHQUVUQyxJQUZTLENBRUosT0FGSSxDQUFaO0FBR0EsUUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNKLEtBQUssQ0FBQ2YsR0FBTixFQUFELENBQXBCO0FBQ0EsUUFBSW9CLElBQUksR0FBR0QsUUFBUSxDQUFDSixLQUFLLENBQUNYLElBQU4sQ0FBVyxNQUFYLENBQUQsQ0FBbkI7QUFDQSxRQUFJaUIsR0FBRyxHQUFHRixRQUFRLENBQUNKLEtBQUssQ0FBQ1gsSUFBTixDQUFXLEtBQVgsQ0FBRCxDQUFsQjtBQUNBLFFBQUlrQixTQUFTLEdBQUdKLEtBQUssR0FBR0UsSUFBeEI7QUFDQSxRQUFJQyxHQUFHLElBQUlDLFNBQVMsR0FBR0QsR0FBdkIsRUFBNEJDLFNBQVMsR0FBR0QsR0FBWjtBQUM1Qk4sU0FBSyxDQUFDZixHQUFOLENBQVVzQixTQUFWLEVBQXFCQyxPQUFyQixDQUE2QixRQUE3QjtBQUNELEdBVkQ7QUFZQXJDLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlTLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGlCQUF4QixFQUEyQyxZQUFXO0FBQ3BELFFBQUltQixLQUFLLEdBQUc3QixDQUFDLENBQUMsSUFBRCxDQUFELENBQ1Q4QixNQURTLEdBRVRDLElBRlMsQ0FFSixPQUZJLENBQVo7QUFHQSxRQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0osS0FBSyxDQUFDZixHQUFOLEVBQUQsQ0FBcEI7QUFDQSxRQUFJb0IsSUFBSSxHQUFHRCxRQUFRLENBQUNKLEtBQUssQ0FBQ1gsSUFBTixDQUFXLE1BQVgsQ0FBRCxDQUFuQjtBQUNBLFFBQUlvQixHQUFHLEdBQUdMLFFBQVEsQ0FBQ0osS0FBSyxDQUFDWCxJQUFOLENBQVcsS0FBWCxDQUFELENBQWxCO0FBQ0EsUUFBSWtCLFNBQVMsR0FBR0osS0FBSyxHQUFHRSxJQUF4QjtBQUNBLFFBQUlJLEdBQUcsSUFBSUYsU0FBUyxHQUFHRSxHQUF2QixFQUE0QkYsU0FBUyxHQUFHRSxHQUFaO0FBQzVCVCxTQUFLLENBQUNmLEdBQU4sQ0FBVXNCLFNBQVYsRUFBcUJDLE9BQXJCLENBQTZCLFFBQTdCO0FBQ0QsR0FWRDtBQVdELENBaENELEVBZ0NHZCxNQWhDSCxFOzs7Ozs7Ozs7OztBQ0FBLENBQUMsVUFBU3ZCLENBQVQsRUFBWTtBQUNYQSxHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkssS0FBN0IsQ0FBbUMsVUFBU00sQ0FBVCxFQUFZO0FBQzdDO0FBQ0FYLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR00sSUFESCxDQUNRLGtCQURSLEVBRUdDLE1BRkgsQ0FFVSxNQUZWO0FBR0QsR0FMRDtBQU1ELENBUEQsRUFPR2dCLE1BUEgsRTs7Ozs7Ozs7Ozs7QUNBQTtBQUVBLENBQUMsVUFBVXZCLENBQVYsRUFBYTtBQUNaQSxHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUI7QUFDQUYsS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJ1QyxLQUExQixDQUFnQztBQUM5QkMsVUFBSSxFQUFFLElBRHdCO0FBRTlCQyxjQUFRLEVBQUUsSUFGb0I7QUFHOUJDLGtCQUFZLEVBQUUsQ0FIZ0I7QUFJOUJDLG9CQUFjLEVBQUUsQ0FKYztBQUs5QkMsZ0JBQVUsRUFBRSxDQUNWO0FBQ0VDLGtCQUFVLEVBQUUsSUFEZDtBQUVFQyxnQkFBUSxFQUFFO0FBQ1JKLHNCQUFZLEVBQUUsQ0FETjtBQUVSQyx3QkFBYyxFQUFFLENBRlI7QUFHUkYsa0JBQVEsRUFBRSxJQUhGO0FBSVJELGNBQUksRUFBRTtBQUpFO0FBRlosT0FEVSxFQVVWO0FBQ0VLLGtCQUFVLEVBQUUsR0FEZDtBQUVFQyxnQkFBUSxFQUFFO0FBQ1JKLHNCQUFZLEVBQUUsQ0FETjtBQUVSQyx3QkFBYyxFQUFFO0FBRlI7QUFGWixPQVZVLEVBaUJWO0FBQ0VFLGtCQUFVLEVBQUUsR0FEZDtBQUVFQyxnQkFBUSxFQUFFO0FBQ1JKLHNCQUFZLEVBQUUsQ0FETjtBQUVSQyx3QkFBYyxFQUFFLENBRlI7QUFHUkgsY0FBSSxFQUFFO0FBSEU7QUFGWixPQWpCVTtBQUxrQixLQUFoQyxFQUY0QixDQW1DNUI7O0FBQ0F4QyxLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQnVDLEtBQXRCLENBQTRCO0FBQzFCUSxnQkFBVSxFQUFFLElBRGM7QUFFMUJQLFVBQUksRUFBRSxJQUZvQjtBQUcxQlEsbUJBQWEsRUFBRSxPQUhXO0FBSTFCTixrQkFBWSxFQUFFLENBSlk7QUFLMUJFLGdCQUFVLEVBQUUsQ0FDVjtBQUNFQyxrQkFBVSxFQUFFLElBRGQ7QUFFRUMsZ0JBQVEsRUFBRTtBQUNSRSx1QkFBYSxFQUFFO0FBRFA7QUFGWixPQURVLEVBT1Y7QUFDRUgsa0JBQVUsRUFBRSxJQURkO0FBRUVDLGdCQUFRLEVBQUU7QUFDUkUsdUJBQWEsRUFBRTtBQURQO0FBRlosT0FQVSxFQWFWO0FBQ0VILGtCQUFVLEVBQUUsSUFEZDtBQUVFQyxnQkFBUSxFQUFFO0FBQ1JDLG9CQUFVLEVBQUUsSUFESjtBQUVSRSxnQkFBTSxFQUFFLEtBRkE7QUFHUkQsdUJBQWEsRUFBRTtBQUhQO0FBRlosT0FiVSxFQXFCVjtBQUNFSCxrQkFBVSxFQUFFLEdBRGQ7QUFFRUMsZ0JBQVEsRUFBRTtBQUNSRyxnQkFBTSxFQUFFLEtBREE7QUFFUkYsb0JBQVUsRUFBRSxJQUZKO0FBR1JDLHVCQUFhLEVBQUUsT0FIUDtBQUlSTixzQkFBWSxFQUFFO0FBSk47QUFGWixPQXJCVSxFQThCVjtBQUNFRyxrQkFBVSxFQUFFLEdBRGQ7QUFFRUMsZ0JBQVEsRUFBRTtBQUNSRyxnQkFBTSxFQUFFLEtBREE7QUFFUkYsb0JBQVUsRUFBRSxJQUZKO0FBR1JDLHVCQUFhLEVBQUUsTUFIUDtBQUlSTixzQkFBWSxFQUFFO0FBSk47QUFGWixPQTlCVTtBQUxjLEtBQTVCO0FBK0NBMUMsS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ1QyxLQUF6QixDQUErQjtBQUM3Qkcsa0JBQVksRUFBRSxDQURlO0FBRTdCRCxjQUFRLEVBQUUsSUFGbUI7QUFHN0JFLG9CQUFjLEVBQUU7QUFIYSxLQUEvQixFQW5GNEIsQ0F5RjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQXpIRDtBQTBIRCxDQTNIRCxFQTJIR3BCLE1BM0hILEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9wcm9kdWN0LXBhZ2VcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3Nob3AtcGFnZVwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmNvbnNvbGUubG9nKFwiYnVuZGxlXCIpO1xyXG4iLCIoZnVuY3Rpb24gKCQpIHtcclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcclxuICAgICAgJChcIi5mb290ZXItbWVudS1jb2x1bW4gLnRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS50b2dnbGUoXCJzbG93XCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDg1MCkge1xyXG4gICAgICAgICAgJChcIi5mb290ZXItbWVudS1jb2x1bW4gdWxcIikudG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmZvb3Rlci1tZW51LWNvbHVtbiB1bFwiKS50b2dnbGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIG5ld3NsZXR0ZXIgZW1haWwgdmFsaWRhdGlvbiArIHBvcHVwXHJcbiAgJChcIi5uZXdzbGV0dGVyLWNvbnRhaW5lciAubmV3c2xldHRlci1zaWdudXAtZm9ybV9fYnV0dG9uIFwiKS5vbihcclxuICAgIFwiY2xpY2tcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGVtYWlsYWRkcmVzc1ZhbCA9ICQoXCIjbmV3c2xldHRlci1pbnB1dFwiKS52YWwoKTtcclxuICAgICAgLy8gJCgnI21jZS1FTUFJTCcpLnZhbChlbWFpbGFkZHJlc3NWYWwpO1xyXG4gICAgICAkKFwiLm5ld3NsZXR0ZXItb3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5uZXdzbGV0dGVyLXBvcHVwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciBoYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICB2YXIgZW1haWxSZWcgPSAvXihbXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSk/JC87XHJcblxyXG4gICAgICBpZiAoZW1haWxhZGRyZXNzVmFsID09IFwiXCIpIHtcclxuICAgICAgICAkKFwiI25ld3NsZXR0ZXItaW5wdXRcIikuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiQWRyZXNhIGRlIGVtYWlsIGludmFsaWTEg1wiKTtcclxuXHJcbiAgICAgICAgJChcIiNuZXdzbGV0dGVyLWlucHV0XCIpLnZhbChcIlwiKTtcclxuICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWVtYWlsUmVnLnRlc3QoZW1haWxhZGRyZXNzVmFsKSkge1xyXG4gICAgICAgICQoXCIjbmV3c2xldHRlci1pbnB1dFwiKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCJBZHJlc2EgZGUgZW1haWwgaW52YWxpZMSDXCIpO1xyXG4gICAgICAgICQoXCIjbmV3c2xldHRlci1pbnB1dFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgLy8gJChcIiNwbGFjZWhvbGRlci1pbnB1dFwiKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCJJbnZhbGlkIEVtYWlsXCIpLnBsYWNlaG9sZGVyKCk7XHJcbiAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaGFzRXJyb3IgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKFwiI21jZS1FTUFJTFwiKS5hdHRyKFwidmFsdWVcIiwgZW1haWxhZGRyZXNzVmFsKS5jaGFuZ2UoKTtcclxuICAgICAgICAvLyAkKCcubW9kYWwnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICQoXCIubmV3c2xldHRlci1wb3B1cFwiKS5hZGRDbGFzcyhcIm5ld3NsZXR0ZXItcG9wdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIC8vIHNob3cgbmV3c2xldHRlciBwb3B1cCBkaXJlY3RseSBpZiB0aGVyZSdzIGFuIGVycm9yIG9yIG5vdGljZVxyXG4gICQoXCIubWM0d3AtYWxlcnRcIikuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubmV3c2xldHRlci1wb3B1cFwiKS5hZGRDbGFzcyhcIm5ld3NsZXR0ZXItcG9wdXAtLWFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gaGlkZSB0aGUgbmV3c2xldHRlciBwb3B1cCB3aGVuIHRoZSBiYWNrZ3JvdW5kIGlzIGNsaWNrZWRcclxuICAkKFwiLm5ld3NsZXR0ZXItb3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm5ld3NsZXR0ZXItcG9wdXBcIikucmVtb3ZlQ2xhc3MoXCJuZXdzbGV0dGVyLXBvcHVwLS1hY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiIsIihmdW5jdGlvbiAoJCkge1xyXG4gICQoXCIubW9iaWxlLWhlYWRlci1tZW51LWNvbnRhaW5lciB1bCBsaSBhXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKHRoaXMpLm5leHQoKS50b2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG4gICQoXCIubW9iaWxlLWhlYWRlci1tZW51LWNvbnRhaW5lciB1bCBsaSAuc3ViLW1lbnUgbGlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKFwic3ViLW1lbnVcIikudG9nZ2xlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAkKFwiLmhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm1vYmlsZS1oZWFkZXItbWVudS1jb250YWluZXJcIikudG9nZ2xlKFwic2xvd1wiKTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJoYW1idXJnZXItYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAkKFwiLmhlYWRlciAuY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgJChcIi5kcm9wZG93bi1jb3NcIikudG9nZ2xlKFwiZmFzdFwiKTtcclxuICAvLyB9KTtcclxufSkoalF1ZXJ5KTtcclxuIiwiKGZ1bmN0aW9uKCQpIHtcclxuICBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gcHJvZHVjdCBwYWdlXCIpO1xyXG4gICQoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgZm9ybS5jYXJ0IGRpdi5xdWFudGl0eVwiKS5wcmVwZW5kKFxyXG4gICAgJzxzcGFuIGNsYXNzPVwicXVhbnRpdHktbWludXNcIj4tPC9zcGFuPidcclxuICApO1xyXG4gICQoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgZm9ybS5jYXJ0IGRpdi5xdWFudGl0eVwiKS5hcHBlbmQoXHJcbiAgICAnPHNwYW4gY2xhc3M9XCJxdWFudGl0eS1wbHVzXCI+Kzwvc3Bhbj4nXHJcbiAgKTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5xdWFudGl0eS1wbHVzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlucHV0ID0gJCh0aGlzKVxyXG4gICAgICAucGFyZW50KClcclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcclxuICAgIHZhciBzdGVwID0gcGFyc2VJbnQoaW5wdXQuYXR0cihcInN0ZXBcIikpO1xyXG4gICAgdmFyIG1heCA9IHBhcnNlSW50KGlucHV0LmF0dHIoXCJtYXhcIikpO1xyXG4gICAgdmFyIG5ld192YWx1ZSA9IHZhbHVlICsgc3RlcDtcclxuICAgIGlmIChtYXggJiYgbmV3X3ZhbHVlID4gbWF4KSBuZXdfdmFsdWUgPSBtYXg7XHJcbiAgICBpbnB1dC52YWwobmV3X3ZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnF1YW50aXR5LW1pbnVzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlucHV0ID0gJCh0aGlzKVxyXG4gICAgICAucGFyZW50KClcclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcclxuICAgIHZhciBzdGVwID0gcGFyc2VJbnQoaW5wdXQuYXR0cihcInN0ZXBcIikpO1xyXG4gICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoXCJtaW5cIikpO1xyXG4gICAgdmFyIG5ld192YWx1ZSA9IHZhbHVlIC0gc3RlcDtcclxuICAgIGlmIChtaW4gJiYgbmV3X3ZhbHVlIDwgbWluKSBuZXdfdmFsdWUgPSBtaW47XHJcbiAgICBpbnB1dC52YWwobmV3X3ZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gICQoXCIubW9iaWxlIC50b2dnbGUtZmlsdGVyc1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKFwidGhpc1wiKSk7XHJcbiAgICAkKHRoaXMpXHJcbiAgICAgIC5uZXh0KFwiLnNpZGViYXItY29udGVudFwiKVxyXG4gICAgICAudG9nZ2xlKFwic2xvd1wiKTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIiwiLy8gU2xpY2sgc2xpZGVyc1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU2xpY2sgc2xpZGVyIHBlbnRydSBQcm9kdXNlIHJlY29tYW5kYXRlXHJcbiAgICAkKFwiLnJlY29tYW5kYXRlLWdhbGxlcnlcIikuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA4MDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2xpY2sgc2xpZGVyIHBlbnRydSBwYWNoZXRlIGludHJldGluZXJlXHJcbiAgICAkKFwiLnBhY2hldGUtZ2FsbGVyeVwiKS5zbGljayh7XHJcbiAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDAwcHhcIixcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogMTYwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMjAwcHhcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMjUwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCIxMDBweFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogODUwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuYmxvZy1tb2JpbC1nYWxsZXJ5XCIpLnNsaWNrKHtcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKFwiLnJlbGF0ZWQtcHJvZHVjdHMtY29udGFpbmVyXCIpLnNsaWNrKHtcclxuICAgIC8vICAgZG90czogdHJ1ZSxcclxuICAgIC8vICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAvLyAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIC8vICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAvLyAgIHJlc3BvbnNpdmU6IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgLy8gICAgICAgc2V0dGluZ3M6IHtcclxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIC8vICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIGRvdHM6IHRydWVcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcclxuICAgIC8vICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgIC8vICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAvLyAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICBdXHJcbiAgICAvLyB9KTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==