import galleryItems from './data/gallery-items.js';
import refs from './refs.js'
import {onSetAttributes} from './set-attributes.js'

// Открытие модального окна по клику на элементе галереи.
export const onOpenModalWindow = () => {
  refs.lightboxEl.classList.add('is-open')
  window.addEventListener('keydown', onModalWindowKeyDown)
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]
// Очистка значения атрибута src элемента img.lightbox__image. 
export const onCloseModalWindow = () => {
  refs.lightboxEl.classList.remove('is-open')
  onSetAttributes('', '')
  window.removeEventListener('keydown', onModalWindowKeyDown)
}

// закрытие модального окна при клике в бекдроп
export const onBackdropClick = (event) => {
  if (event.currentTarget === event.target) {
    onCloseModalWindow()
  }
}

// Закрытие модального окна по нажатию клавиши ESC
// и пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо" 
export const onModalWindowKeyDown = (event) => {
  let imageIndex = galleryItems.findIndex(
    image => image.original === refs.lightboxImageEl.src,
  );
  
  switch (event.code) {
    case "Escape":
      onCloseModalWindow()
      break;
    
    case "ArrowLeft":
      // if - если нужно зациклить пролистывание
      if (imageIndex === 0) {
        imageIndex += galleryItems.length;
      }
      imageIndex -= 1;
      break;
    
    case "ArrowRight":
      // if- если нужно зациклить пролистывание
      if (imageIndex === galleryItems.length - 1) {
        imageIndex = -1;
      }
      imageIndex += 1;
  }
  refs.lightboxImageEl.src = galleryItems[imageIndex].original;
  refs.lightboxImageEl.alt = galleryItems[imageIndex].description;
}