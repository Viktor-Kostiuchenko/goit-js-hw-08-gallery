// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  galleryContainerEl: document.querySelector('.js-gallery'),
  lightboxEl: document.querySelector('.js-lightbox'),
  lightboxOverlayEl: document.querySelector('.lightbox__overlay'),
  lightboxImageEl: document.querySelector('.lightbox__image'),
  lightboxBtnEl: document.querySelector('[data-action="close-lightbox"]')
};
exports.default = _default;
},{}],"js/data/gallery-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
  description: 'Avenue'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg',
  description: 'Forest road'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/13/12/04/seagull-6542951__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/13/12/04/seagull-6542951_960_720.jpg',
  description: 'Seagull'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  description: 'Tree'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg',
  description: 'Fantasy'
}, {
  preview: 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg',
  description: 'Dandelion'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg',
  description: 'Morning forest'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg',
  description: 'Sunset'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg',
  description: 'Foggy forest'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/05/22/22/21/rathaussteg-779998__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/05/22/22/21/rathaussteg-779998_960_720.jpg',
  description: 'Rathaussteg'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/05/21/08/17/goldcoast-2330710__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/05/21/08/17/goldcoast-2330710_960_720.jpg',
  description: 'Goldcoast'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/04/18/17/43/monastery-3331085__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/04/18/17/43/monastery-3331085_960_720.jpg',
  description: 'Monastery'
}, {
  preview: 'https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_960_720.jpg',
  description: 'Stones'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg',
  description: 'Polynesia'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/10/22/17/10/bread-1761197__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/10/22/17/10/bread-1761197_960_720.jpg',
  description: 'Bread'
}, {
  preview: 'https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_960_720.jpg',
  description: 'Food'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/08/18/22/01/lavenders-894919__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/08/18/22/01/lavenders-894919_960_720.jpg',
  description: 'Lavenders'
}, {
  preview: 'https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_960_720.jpg',
  description: 'Flower field'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/26/20/53/bird-6577119__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/26/20/53/bird-6577119_960_720.jpg',
  description: 'Bird'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/27/10/27/desert-6578359__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/27/10/27/desert-6578359_960_720.jpg',
  description: 'Desert'
}, {
  preview: 'https://cdn.pixabay.com/photo/2020/12/22/16/30/art-5852645__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2020/12/22/16/30/art-5852645_960_720.jpg',
  description: 'Art'
}, {
  preview: 'https://cdn.pixabay.com/photo/2020/07/19/09/57/hill-5419527__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2020/07/19/09/57/hill-5419527_960_720.jpg',
  description: 'Hill'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/05/07/55/daffodils-6523446__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/05/07/55/daffodils-6523446_960_720.jpg',
  description: 'Daffodils'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_960_720.jpg',
  description: 'Pots'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/04/20/13/38/furniture-731449__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/04/20/13/38/furniture-731449_960_720.jpg',
  description: 'Furniture-'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/21/11/29/kingfisher-6562537__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/21/11/29/kingfisher-6562537_960_720.jpg',
  description: 'Kingfisher'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/07/13/09/37/dogs-6463032__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/13/09/37/dogs-6463032_960_720.jpg',
  description: 'Dogs'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}];
exports.default = _default;
},{}],"js/gallery-markup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.galleryElementsMarkup = void 0;

var _galleryItems = _interopRequireDefault(require("./data/gallery-items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var galleryElementsMarkup = createGalleryElements(_galleryItems.default); // 1. Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// refs.galleryContainerEl.insertAdjacentHTML('beforeend', galleryElementsMarkup)

exports.galleryElementsMarkup = galleryElementsMarkup;

function createGalleryElements(items) {
  return items.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "\n      <li class=\"gallery__item\">\n        <a\n          class=\"gallery__link\"\n          href=\"".concat(original, "\"\n        >\n          <img\n            class=\"gallery__image\"\n            src=\"").concat(preview, "\"\n            data-source=\"").concat(original, "\"\n            alt=\"").concat(description, "\"\n          />\n        </a>\n      </li>\n    ");
  }).join('');
}
},{"./data/gallery-items.js":"js/data/gallery-items.js"}],"js/set-attributes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSetAttributes = void 0;

var _refs = _interopRequireDefault(require("./refs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 4.Подмена значения атрибута src элемента img.lightbox__image.
var onSetAttributes = function onSetAttributes(src, alt) {
  _refs.default.lightboxImageEl.src = src;
  _refs.default.lightboxImageEl.alt = alt;
};

exports.onSetAttributes = onSetAttributes;
},{"./refs.js":"js/refs.js"}],"js/modal-window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onModalWindowKeyDown = exports.onBackdropClick = exports.onCloseModalWindow = exports.onOpenModalWindow = void 0;

var _galleryItems = _interopRequireDefault(require("./data/gallery-items.js"));

var _refs = _interopRequireDefault(require("./refs.js"));

var _setAttributes = require("./set-attributes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Открытие модального окна по клику на элементе галереи.
var onOpenModalWindow = function onOpenModalWindow() {
  _refs.default.lightboxEl.classList.add('is-open');

  window.addEventListener('keydown', onModalWindowKeyDown);
}; // Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]
// Очистка значения атрибута src элемента img.lightbox__image. 


exports.onOpenModalWindow = onOpenModalWindow;

var onCloseModalWindow = function onCloseModalWindow() {
  _refs.default.lightboxEl.classList.remove('is-open');

  (0, _setAttributes.onSetAttributes)('', '');
  window.removeEventListener('keydown', onModalWindowKeyDown);
}; // закрытие модального окна при клике в бекдроп


exports.onCloseModalWindow = onCloseModalWindow;

var onBackdropClick = function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow();
  }
}; // Закрытие модального окна по нажатию клавиши ESC
// и пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо" 


exports.onBackdropClick = onBackdropClick;

var onModalWindowKeyDown = function onModalWindowKeyDown(event) {
  var imageIndex = _galleryItems.default.findIndex(function (image) {
    return image.original === _refs.default.lightboxImageEl.src;
  });

  switch (event.code) {
    case "Escape":
      onCloseModalWindow();
      break;

    case "ArrowLeft":
      // if - если нужно зациклить пролистывание
      if (imageIndex === 0) {
        imageIndex += _galleryItems.default.length;
      }

      imageIndex -= 1;
      break;

    case "ArrowRight":
      // if- если нужно зациклить пролистывание
      if (imageIndex === _galleryItems.default.length - 1) {
        imageIndex = -1;
      }

      imageIndex += 1;
  }

  _refs.default.lightboxImageEl.src = _galleryItems.default[imageIndex].original;
  _refs.default.lightboxImageEl.alt = _galleryItems.default[imageIndex].description;
};

exports.onModalWindowKeyDown = onModalWindowKeyDown;
},{"./data/gallery-items.js":"js/data/gallery-items.js","./refs.js":"js/refs.js","./set-attributes.js":"js/set-attributes.js"}],"js/gallery-image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onGalleryContainerClick = void 0;

var _modalWindow = require("./modal-window");

var _setAttributes = require("./set-attributes");

// Подмена значения атрибута src элемента img.lightbox__image.
var onGalleryContainerClick = function onGalleryContainerClick(event) {
  var isGalleryImage = event.target.classList.contains('gallery__image');

  if (!isGalleryImage) {
    return;
  }

  event.preventDefault();
  (0, _modalWindow.onOpenModalWindow)();
  (0, _setAttributes.onSetAttributes)(event.target.dataset.source, event.target.alt);
};

exports.onGalleryContainerClick = onGalleryContainerClick;
},{"./modal-window":"js/modal-window.js","./set-attributes":"js/set-attributes.js"}],"js/lazy-loading.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLazySizesScript = exports.addSrcAttrToLazyImages = void 0;

// 7. Ленивая загрузка изображений
var addSrcAttrToLazyImages = function addSrcAttrToLazyImages() {
  var lazyImages = document.querySelectorAll('.gallery__image');
  lazyImages.forEach(function (image) {
    image.addEventListener('load', {
      once: true
    });
    image.setAttribute('loading', 'lazy');
  });
};

exports.addSrcAttrToLazyImages = addSrcAttrToLazyImages;

var addLazySizesScript = function addLazySizesScript() {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity = 'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
};

exports.addLazySizesScript = addLazySizesScript;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _refs = _interopRequireDefault(require("./js/refs"));

var _galleryMarkup = require("./js/gallery-markup");

var _galleryImage = require("./js/gallery-image");

var _modalWindow = require("./js/modal-window");

var _lazyLoading = require("./js/lazy-loading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
_refs.default.galleryContainerEl.insertAdjacentHTML('beforeend', _galleryMarkup.galleryElementsMarkup); // Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.


_refs.default.galleryContainerEl.addEventListener('click', _galleryImage.onGalleryContainerClick); // Открытие модального окна по клику на элементе галереи.
// Закрытие модального окна по клику на кнопку, кнопку "ESC" и клику в бекдороп. Пролистывание изображений
// Очистка значения атрибута src элемента img.lightbox__image. 


_refs.default.lightboxBtnEl.addEventListener('click', _modalWindow.onCloseModalWindow);

_refs.default.lightboxOverlayEl.addEventListener('click', _modalWindow.onBackdropClick); // Ленивая загрузка изображений


if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает lazyload');
  (0, _lazyLoading.addSrcAttrToLazyImages)();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  (0, _lazyLoading.addLazySizesScript)();
}
},{"./js/refs":"js/refs.js","./js/gallery-markup":"js/gallery-markup.js","./js/gallery-image":"js/gallery-image.js","./js/modal-window":"js/modal-window.js","./js/lazy-loading":"js/lazy-loading.js"}],"C:/Users/kosti/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58798" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/kosti/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map