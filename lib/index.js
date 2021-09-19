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