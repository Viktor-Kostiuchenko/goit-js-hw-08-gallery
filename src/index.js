import refs from './js/refs'

import { galleryElementsMarkup } from './js/gallery-markup'
import { onGalleryContainerClick } from './js/gallery-image'
import { onCloseModalWindow, onBackdropClick } from './js/modal-window'
import { addSrcAttrToLazyImages, addLazySizesScript} from './js/lazy-loading'

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
refs.galleryContainerEl.insertAdjacentHTML('beforeend', galleryElementsMarkup)

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
refs.galleryContainerEl.addEventListener('click', onGalleryContainerClick)

// Открытие модального окна по клику на элементе галереи.
// Закрытие модального окна по клику на кнопку, кнопку "ESC" и клику в бекдороп. Пролистывание изображений
// Очистка значения атрибута src элемента img.lightbox__image. 
refs.lightboxBtnEl.addEventListener('click', onCloseModalWindow)
refs.lightboxOverlayEl.addEventListener('click', onBackdropClick)

// Ленивая загрузка изображений
if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();
}

















