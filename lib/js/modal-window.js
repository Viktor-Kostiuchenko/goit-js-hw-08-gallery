"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onModalWindowKeyDown = exports.onBackdropClick = exports.onCloseModalWindow = exports.onOpenModalWindow = void 0;

require("core-js/modules/es.symbol.description.js");

var _galleryItems = _interopRequireDefault(require("./data/gallery-items.js"));

var _refs = _interopRequireDefault(require("./refs.js"));

var _setAttributes = require("./set-attributes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Открытие модального окна по клику на элементе галереи.
const onOpenModalWindow = () => {
  _refs.default.lightboxEl.classList.add('is-open');

  window.addEventListener('keydown', onModalWindowKeyDown);
}; // Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]
// Очистка значения атрибута src элемента img.lightbox__image. 


exports.onOpenModalWindow = onOpenModalWindow;

const onCloseModalWindow = () => {
  _refs.default.lightboxEl.classList.remove('is-open');

  (0, _setAttributes.onSetAttributes)('', '');
  window.removeEventListener('keydown', onModalWindowKeyDown);
}; // закрытие модального окна при клике в бекдроп


exports.onCloseModalWindow = onCloseModalWindow;

const onBackdropClick = event => {
  if (event.currentTarget === event.target) {
    onCloseModalWindow();
  }
}; // Закрытие модального окна по нажатию клавиши ESC
// и пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо" 


exports.onBackdropClick = onBackdropClick;

const onModalWindowKeyDown = event => {
  let imageIndex = _galleryItems.default.findIndex(image => image.original === _refs.default.lightboxImageEl.src);

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