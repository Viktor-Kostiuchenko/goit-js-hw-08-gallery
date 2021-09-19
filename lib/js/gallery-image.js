"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onGalleryContainerClick = void 0;

var _modalWindow = require("./modal-window");

var _setAttributes = require("./set-attributes");

// Подмена значения атрибута src элемента img.lightbox__image.
const onGalleryContainerClick = event => {
  const isGalleryImage = event.target.classList.contains('gallery__image');

  if (!isGalleryImage) {
    return;
  }

  event.preventDefault();
  (0, _modalWindow.onOpenModalWindow)();
  (0, _setAttributes.onSetAttributes)(event.target.dataset.source, event.target.alt);
};

exports.onGalleryContainerClick = onGalleryContainerClick;