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