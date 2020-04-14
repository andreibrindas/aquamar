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
  });
  $(".header .cart").click(function (e) {
    $(".dropdown-cos").toggle("fast");
  });
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

module.exports = __webpack_require__(/*! C:\Users\Andrei\Local Sites\aquamar\app\public\wp-content\themes\aquamar\src\js\bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG9wLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGljayIsIm5leHQiLCJ0b2dnbGUiLCJyZXNpemUiLCJ3aWR0aCIsImpRdWVyeSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZHJlbiIsInRvZ2dsZUNsYXNzIiwicHJlcGVuZCIsImFwcGVuZCIsIm9uIiwiaW5wdXQiLCJwYXJlbnQiLCJmaW5kIiwidmFsdWUiLCJwYXJzZUludCIsInZhbCIsInN0ZXAiLCJhdHRyIiwibWF4IiwibmV3X3ZhbHVlIiwidHJpZ2dlciIsIm1pbiIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJhcnJvd3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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LENBQUQsQ0FBeUI4QixLQUF6QixDQUErQjtBQUM3Qkcsa0JBQVksRUFBRSxDQURlO0FBRTdCRCxjQUFRLEVBQUUsSUFGbUI7QUFHN0JFLG9CQUFjLEVBQUU7QUFIYSxLQUEvQixFQW5GMkIsQ0F5RjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQXpIRDtBQTBIRCxDQTNIRCxFQTJIR3hCLE1BM0hILEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9wcm9kdWN0LXBhZ2VcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3Nob3AtcGFnZVwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmNvbnNvbGUubG9nKFwiYnVuZGxlXCIpO1xyXG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XHJcbiAgICAgICQoXCIuZm9vdGVyLW1lbnUtY29sdW1uIC50aXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAudG9nZ2xlKFwic2xvd1wiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDg1MCkge1xyXG4gICAgICAgICAgJChcIi5mb290ZXItbWVudS1jb2x1bW4gdWxcIikudG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmZvb3Rlci1tZW51LWNvbHVtbiB1bFwiKS50b2dnbGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiIsIihmdW5jdGlvbiAoJCkge1xyXG4gICQoXCIubW9iaWxlLWhlYWRlci1tZW51LWNvbnRhaW5lciB1bCBsaSBhXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKHRoaXMpLm5leHQoKS50b2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG4gICQoXCIubW9iaWxlLWhlYWRlci1tZW51LWNvbnRhaW5lciB1bCBsaSAuc3ViLW1lbnUgbGlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKFwic3ViLW1lbnVcIikudG9nZ2xlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAkKFwiLmhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm1vYmlsZS1oZWFkZXItbWVudS1jb250YWluZXJcIikudG9nZ2xlKFwic2xvd1wiKTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJoYW1idXJnZXItYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmhlYWRlciAuY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5kcm9wZG93bi1jb3NcIikudG9nZ2xlKFwiZmFzdFwiKTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIiwiKGZ1bmN0aW9uKCQpIHtcclxuICBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gcHJvZHVjdCBwYWdlXCIpO1xyXG4gICQoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgZm9ybS5jYXJ0IGRpdi5xdWFudGl0eVwiKS5wcmVwZW5kKFxyXG4gICAgJzxzcGFuIGNsYXNzPVwicXVhbnRpdHktbWludXNcIj4tPC9zcGFuPidcclxuICApO1xyXG4gICQoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgZm9ybS5jYXJ0IGRpdi5xdWFudGl0eVwiKS5hcHBlbmQoXHJcbiAgICAnPHNwYW4gY2xhc3M9XCJxdWFudGl0eS1wbHVzXCI+Kzwvc3Bhbj4nXHJcbiAgKTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5xdWFudGl0eS1wbHVzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlucHV0ID0gJCh0aGlzKVxyXG4gICAgICAucGFyZW50KClcclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcclxuICAgIHZhciBzdGVwID0gcGFyc2VJbnQoaW5wdXQuYXR0cihcInN0ZXBcIikpO1xyXG4gICAgdmFyIG1heCA9IHBhcnNlSW50KGlucHV0LmF0dHIoXCJtYXhcIikpO1xyXG4gICAgdmFyIG5ld192YWx1ZSA9IHZhbHVlICsgc3RlcDtcclxuICAgIGlmIChtYXggJiYgbmV3X3ZhbHVlID4gbWF4KSBuZXdfdmFsdWUgPSBtYXg7XHJcbiAgICBpbnB1dC52YWwobmV3X3ZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnF1YW50aXR5LW1pbnVzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlucHV0ID0gJCh0aGlzKVxyXG4gICAgICAucGFyZW50KClcclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcclxuICAgIHZhciBzdGVwID0gcGFyc2VJbnQoaW5wdXQuYXR0cihcInN0ZXBcIikpO1xyXG4gICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoXCJtaW5cIikpO1xyXG4gICAgdmFyIG5ld192YWx1ZSA9IHZhbHVlIC0gc3RlcDtcclxuICAgIGlmIChtaW4gJiYgbmV3X3ZhbHVlIDwgbWluKSBuZXdfdmFsdWUgPSBtaW47XHJcbiAgICBpbnB1dC52YWwobmV3X3ZhbHVlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gICQoXCIubW9iaWxlIC50b2dnbGUtZmlsdGVyc1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKFwidGhpc1wiKSk7XHJcbiAgICAkKHRoaXMpXHJcbiAgICAgIC5uZXh0KFwiLnNpZGViYXItY29udGVudFwiKVxyXG4gICAgICAudG9nZ2xlKFwic2xvd1wiKTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIiwiLy8gU2xpY2sgc2xpZGVyc1xyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIFNsaWNrIHNsaWRlciBwZW50cnUgUHJvZHVzZSByZWNvbWFuZGF0ZVxyXG4gICAgJChcIi5yZWNvbWFuZGF0ZS1nYWxsZXJ5XCIpLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTbGljayBzbGlkZXIgcGVudHJ1IHBhY2hldGUgaW50cmV0aW5lcmVcclxuICAgICQoXCIucGFjaGV0ZS1nYWxsZXJ5XCIpLnNsaWNrKHtcclxuICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgY2VudGVyUGFkZGluZzogXCI0MDBweFwiLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxNjAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCIyMDBweFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMjUwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCIxMDBweFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMDAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI1MDBweFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA4NTAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5ibG9nLW1vYmlsLWdhbGxlcnlcIikuc2xpY2soe1xyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gJChcIi5yZWxhdGVkLXByb2R1Y3RzLWNvbnRhaW5lclwiKS5zbGljayh7XHJcbiAgICAvLyAgIGRvdHM6IHRydWUsXHJcbiAgICAvLyAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgLy8gICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAvLyAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgLy8gICByZXNwb25zaXZlOiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgIC8vICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAvLyAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBicmVha3BvaW50OiA4MDAsXHJcbiAgICAvLyAgICAgICBzZXR0aW5nczoge1xyXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAvLyAgICAgICBzZXR0aW5nczoge1xyXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgLy8gICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgXVxyXG4gICAgLy8gfSk7XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=