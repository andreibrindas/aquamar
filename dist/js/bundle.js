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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zaG9wLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGljayIsIm5leHQiLCJ0b2dnbGUiLCJyZXNpemUiLCJ3aWR0aCIsImpRdWVyeSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZHJlbiIsInRvZ2dsZUNsYXNzIiwicHJlcGVuZCIsImFwcGVuZCIsIm9uIiwiaW5wdXQiLCJwYXJlbnQiLCJmaW5kIiwidmFsdWUiLCJwYXJzZUludCIsInZhbCIsInN0ZXAiLCJhdHRyIiwibWF4IiwibmV3X3ZhbHVlIiwidHJpZ2dlciIsIm1pbiIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJhcnJvd3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQXpIRDtBQTBIRCxDQTNIRCxFQTJIR3hCLE1BM0hILEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9wcm9kdWN0LXBhZ2VcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3Nob3AtcGFnZVwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmNvbnNvbGUubG9nKFwiYnVuZGxlXCIpO1xyXG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XHJcbiAgICAgICQoXCIuZm9vdGVyLW1lbnUtY29sdW1uIC50aXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAudG9nZ2xlKFwic2xvd1wiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDg1MCkge1xyXG4gICAgICAgICAgJChcIi5mb290ZXItbWVudS1jb2x1bW4gdWxcIikudG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmZvb3Rlci1tZW51LWNvbHVtbiB1bFwiKS50b2dnbGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiIsIihmdW5jdGlvbigkKSB7XHJcbiAgJChcIi5tb2JpbGUtaGVhZGVyLW1lbnUtY29udGFpbmVyIHVsIGxpIGFcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgJCh0aGlzKVxyXG4gICAgICAubmV4dCgpXHJcbiAgICAgIC50b2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG4gICQoXCIubW9iaWxlLWhlYWRlci1tZW51LWNvbnRhaW5lciB1bCBsaSAuc3ViLW1lbnUgbGlcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICQodGhpcylcclxuICAgICAgLmNoaWxkcmVuKFwic3ViLW1lbnVcIilcclxuICAgICAgLnRvZ2dsZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gIC8vICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuICAvLyB9KTtcclxuXHJcbiAgJChcIi5oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLm1vYmlsZS1oZWFkZXItbWVudS1jb250YWluZXJcIikudG9nZ2xlKFwic2xvd1wiKTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJoYW1idXJnZXItYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBwcm9kdWN0IHBhZ2VcIik7XHJcbiAgJChcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCBmb3JtLmNhcnQgZGl2LnF1YW50aXR5XCIpLnByZXBlbmQoXHJcbiAgICAnPHNwYW4gY2xhc3M9XCJxdWFudGl0eS1taW51c1wiPi08L3NwYW4+J1xyXG4gICk7XHJcbiAgJChcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCBmb3JtLmNhcnQgZGl2LnF1YW50aXR5XCIpLmFwcGVuZChcclxuICAgICc8c3BhbiBjbGFzcz1cInF1YW50aXR5LXBsdXNcIj4rPC9zcGFuPidcclxuICApO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnF1YW50aXR5LXBsdXNcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaW5wdXQgPSAkKHRoaXMpXHJcbiAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAuZmluZChcImlucHV0XCIpO1xyXG4gICAgdmFyIHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsKCkpO1xyXG4gICAgdmFyIHN0ZXAgPSBwYXJzZUludChpbnB1dC5hdHRyKFwic3RlcFwiKSk7XHJcbiAgICB2YXIgbWF4ID0gcGFyc2VJbnQoaW5wdXQuYXR0cihcIm1heFwiKSk7XHJcbiAgICB2YXIgbmV3X3ZhbHVlID0gdmFsdWUgKyBzdGVwO1xyXG4gICAgaWYgKG1heCAmJiBuZXdfdmFsdWUgPiBtYXgpIG5ld192YWx1ZSA9IG1heDtcclxuICAgIGlucHV0LnZhbChuZXdfdmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIucXVhbnRpdHktbWludXNcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaW5wdXQgPSAkKHRoaXMpXHJcbiAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAuZmluZChcImlucHV0XCIpO1xyXG4gICAgdmFyIHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsKCkpO1xyXG4gICAgdmFyIHN0ZXAgPSBwYXJzZUludChpbnB1dC5hdHRyKFwic3RlcFwiKSk7XHJcbiAgICB2YXIgbWluID0gcGFyc2VJbnQoaW5wdXQuYXR0cihcIm1pblwiKSk7XHJcbiAgICB2YXIgbmV3X3ZhbHVlID0gdmFsdWUgLSBzdGVwO1xyXG4gICAgaWYgKG1pbiAmJiBuZXdfdmFsdWUgPCBtaW4pIG5ld192YWx1ZSA9IG1pbjtcclxuICAgIGlucHV0LnZhbChuZXdfdmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiIsIihmdW5jdGlvbigkKSB7XHJcbiAgJChcIi5tb2JpbGUgLnRvZ2dsZS1maWx0ZXJzXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCQoXCJ0aGlzXCIpKTtcclxuICAgICQodGhpcylcclxuICAgICAgLm5leHQoXCIuc2lkZWJhci1jb250ZW50XCIpXHJcbiAgICAgIC50b2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iLCIvLyBTbGljayBzbGlkZXJzXHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gU2xpY2sgc2xpZGVyIHBlbnRydSBQcm9kdXNlIHJlY29tYW5kYXRlXHJcbiAgICAkKFwiLnJlY29tYW5kYXRlLWdhbGxlcnlcIikuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogODAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNsaWNrIHNsaWRlciBwZW50cnUgcGFjaGV0ZSBpbnRyZXRpbmVyZVxyXG4gICAgJChcIi5wYWNoZXRlLWdhbGxlcnlcIikuc2xpY2soe1xyXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwMHB4XCIsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDE2MDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjIwMHB4XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNTAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjEwMHB4XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjUwMHB4XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDg1MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmJsb2ctbW9iaWwtZ2FsbGVyeVwiKS5zbGljayh7XHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKFwiLnJlbGF0ZWQtcHJvZHVjdHMtY29udGFpbmVyXCIpLnNsaWNrKHtcclxuICAgIC8vICAgZG90czogdHJ1ZSxcclxuICAgIC8vICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAvLyAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIC8vICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAvLyAgIHJlc3BvbnNpdmU6IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgLy8gICAgICAgc2V0dGluZ3M6IHtcclxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIC8vICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIGRvdHM6IHRydWVcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcclxuICAgIC8vICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgIC8vICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAvLyAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICBdXHJcbiAgICAvLyB9KTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==