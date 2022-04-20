webpackHotUpdate("main",{

/***/ "./custom/customization.ts":
/*!*********************************!*\
  !*** ./custom/customization.ts ***!
  \*********************************/
/*! exports provided: generateFontImportLink, default */
/*! exports used: default, generateFontImportLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateFontImportLink; });
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ben_deadboys_shop_node_modules_core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_ben_deadboys_shop_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_ben_deadboys_shop_node_modules_core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_ben_deadboys_shop_node_modules_core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_ben_deadboys_shop_node_modules_core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_ben_deadboys_shop_node_modules_core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var _home_ben_deadboys_shop_node_modules_core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_ben_deadboys_shop_node_modules_core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);







var customizationJson = {
  collection: '352215253242',
  owner: 'harrybird',
  typography: {
    h1: {
      font: 'Bebas Neue',
      size: '64px',
      fontWeight: '400',
      isItalic: false
    },
    h2: {
      font: 'Bebas Neue',
      size: '32px',
      fontWeight: '400',
      isItalic: false
    },
    h3: {
      font: 'Bebas Neue',
      size: '24px',
      fontWeight: '400',
      isItalic: true
    },
    h4: {
      font: 'Roboto',
      size: '18px',
      fontWeight: '400',
      isItalic: false
    },
    paragraph: {
      font: 'Roboto',
      size: '12px',
      fontWeight: '400',
      isItalic: false
    },
    label: {
      font: 'Roboto',
      size: '14px',
      fontWeight: '600',
      isItalic: false
    },
    caption: {
      font: 'Roboto',
      size: '14px',
      fontWeight: '400',
      isItalic: false
    }
  },
  navbar: {
    logo: '/logo.png',
    logoLink: '/',
    backgroundColor: '#000000',
    defaultAvatarImage: '/default-avatar.png',
    navLinkFontType: 'label',
    navLinks: [// recommended 3 - 5
    {
      link: 'https://deadboysinc.com/',
      color: '#ffffff'
    }, {
      link: 'https://deadboysinc.com/',
      color: '#ffffff'
    }, {
      link: 'https://deadboysinc.com/',
      color: '#ffffff'
    }, {
      link: '/my-items',
      // always recommended to keep
      color: '#ffffff'
    }],
    balanceSubtitleFontType: 'label',
    buttonFontColor: '#ffffff',
    buttonBackgroundColor: 'transparent',
    buttonBorderColor: '#ffffff',
    buttonFontType: 'label',
    bottomBorderColor: '#cccccc'
  },
  footer: {
    logo: '/logo.png',
    socialMediaLinks: [{
      link: 'https://facebook.com',
      type: 'facebook',
      color: '#1877F2'
    }, {
      link: 'https://twitter.com',
      type: 'twitter',
      color: '#1DA1F2'
    }, {
      link: 'https://youtube.com',
      type: 'youtube',
      color: '#FF0000'
    }],
    backgroundColor: 'white',
    borderColor: 'transparent'
  },
  nftCard: {
    mainBackgroundColor: '#ffffff',
    secondaryBackgroundColor: 'transprent',
    borderColor: 'lightgrey',
    borderRadius: '8px',
    priceFont: {
      type: 'h4',
      color: '#377EFF'
    },
    countFont: {
      type: 'label',
      color: '#000000'
    },
    titleFont: {
      type: 'h4',
      color: '#000000',
      carouselHeight: '32px'
    },
    collectionNameFont: {
      type: 'label',
      color: '#666666'
    }
  },
  featuredSection: {
    carousel: false,
    titleFont: {
      type: 'h2',
      color: '#000000'
    },
    backgroundColor: '#f2f2f2',
    carouselButtonsBackgroundColor: '#ffffff',
    carouselButtonsBorderColor: 'lightgrey'
  },
  header: {
    image: '/header-image.png',
    imagePlacement: 'right',
    backgroundColor: 'black',
    highlightFont: {
      isShown: true,
      type: 'paragraph',
      color: '#377EFF'
    },
    mainHeadingFont: {
      type: 'h1',
      color: '#ffffff'
    },
    subheadingFont: {
      type: 'h4',
      color: 'grey'
    },
    button: {
      isShown: true,
      textColor: 'black',
      textFont: 'caption',
      backgroundColor: 'white',
      link: 'https:/google.com'
    }
  },
  myItemsPage: {
    backgroundColor: '#ffffff',
    headerFont: {
      type: 'h2',
      color: 'black'
    }
  },
  detailPage: {
    imagePlacement: 'left',
    imageBackgroundColor: 'transparent',
    imageShadow: false,
    cardTitleFont: {
      type: 'h1',
      color: 'black'
    },
    collectionNameFont: {
      type: 'caption',
      color: '#666666'
    },
    priceEditionLabelFont: {
      type: 'caption',
      color: '#666666'
    },
    priceFont: {
      type: 'h2',
      color: '#c71f3e'
    },
    editionFont: {
      type: 'h2',
      color: 'black'
    },
    cardDescriptionFont: {
      type: 'caption',
      color: '#666666'
    },
    errorFont: {
      type: 'caption',
      color: '#c71f3e'
    },
    button: {
      textColor: 'white',
      textFont: 'caption',
      backgroundColor: 'black'
    },
    dropdown: {
      borderColor: '#f2f2f2',
      arrowDropdownColor: '#666',
      textColor: 'black',
      textFont: 'caption'
    }
  }
};
var generateFontImportLink = function generateFontImportLink(typographyVariants) {
  var stylesByFont = {};
  typographyVariants.forEach(function (_ref) {
    var font = _ref.font,
        fontWeight = _ref.fontWeight,
        isItalic = _ref.isItalic;

    if (!stylesByFont[font] || !stylesByFont[font][fontWeight]) {
      var _stylesByFont$font;

      stylesByFont[font] = (_stylesByFont$font = {}, _stylesByFont$font[fontWeight] = {
        shouldLoadItalic: isItalic
      }, _stylesByFont$font);
    }

    if (isItalic) {
      stylesByFont[font][fontWeight] = {
        shouldLoadItalic: true
      };
    }
  });
  var fonts = Object.keys(stylesByFont).map(function (font) {
    var styles = stylesByFont[font];
    var shouldLoadItalic = false;
    var partialStyleStrings = Object.keys(styles).map(function (weight) {
      var iItalic = styles[weight].shouldLoadItalic;

      if (iItalic) {
        shouldLoadItalic = true;
      }

      return iItalic ? weight + ";1," + weight : "" + weight;
    });
    var stylesString = shouldLoadItalic ? partialStyleStrings.map(function (string) {
      return "0," + string;
    }).join(';') : partialStyleStrings.join(';');
    return "family=" + font.replace(/\s/g, '+') + ":" + (shouldLoadItalic ? 'ital,' : '') + "wght@" + stylesString;
  });
  return "https://fonts.googleapis.com/css2?" + fonts.join('&') + "&display=swap";
};
/* harmony default export */ __webpack_exports__["a"] = (customizationJson);

/***/ })

})
//# sourceMappingURL=main.c3f872f701436cc863ed.hot-update.js.map