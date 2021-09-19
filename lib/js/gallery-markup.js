"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.galleryElementsMarkup = void 0;

require("core-js/modules/es.symbol.description.js");

var _galleryItems = _interopRequireDefault(require("./data/gallery-items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const galleryElementsMarkup = createGalleryElements(_galleryItems.default); // 1. Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// refs.galleryContainerEl.insertAdjacentHTML('beforeend', galleryElementsMarkup)

exports.galleryElementsMarkup = galleryElementsMarkup;

function createGalleryElements(items) {
  return items.map(_ref => {
    let {
      preview,
      original,
      description
    } = _ref;
    return "\n      <li class=\"gallery__item\">\n        <a\n          class=\"gallery__link\"\n          href=\"".concat(original, "\"\n        >\n          <img\n            class=\"gallery__image\"\n            src=\"").concat(preview, "\"\n            data-source=\"").concat(original, "\"\n            alt=\"").concat(description, "\"\n          />\n        </a>\n      </li>\n    ");
  }).join('');
}