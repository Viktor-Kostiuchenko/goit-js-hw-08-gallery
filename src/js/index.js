import galleryItems from './data/gallery-items';

import refs from './refs'


// 1. Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
import { galleryElementsMarkup } from './gallery-markup'

refs.galleryContainerEl.insertAdjacentHTML('beforeend', galleryElementsMarkup)


// 2.Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
refs.galleryContainerEl.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(event) {
  const isGalleryImage= event.target.classList.contains('gallery__image')

  if (!isGalleryImage) {
    return
  }
  event.preventDefault();

  onOpenModalWindow()
  onSetAttributes(event.target.dataset.source, event.target.alt)
}


// 4.Подмена значения атрибута src элемента img.lightbox__image.
import { onSetAttributes } from './set-attributes'


// 3.Открытие модального окна по клику на элементе галереи.
// 5.Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"], кнопку "ESC" и клику в бекдороп. Пролистывание изображений
// 6.Очистка значения атрибута src элемента img.lightbox__image. 
import { onOpenModalWindow, onCloseModalWindow, onBackdropClick, onModalWindowKeyDown } from './modal-window'

refs.lightboxBtnEl.addEventListener('click', onCloseModalWindow)
refs.lightboxOverlayEl.addEventListener('click', onBackdropClick)


// 7. Ленивая загрузка изображений
import { setLazyLoadingImages, addSrcAttrToLazyImages, addLazySizesScript} from './lazy-loading'

if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();
}

















