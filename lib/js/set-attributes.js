"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSetAttributes = void 0;

var _refs = _interopRequireDefault(require("./refs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 4.Подмена значения атрибута src элемента img.lightbox__image.
const onSetAttributes = (src, alt) => {
  _refs.default.lightboxImageEl.src = src;
  _refs.default.lightboxImageEl.alt = alt;
};

exports.onSetAttributes = onSetAttributes;