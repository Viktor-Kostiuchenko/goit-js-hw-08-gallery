import galleryItems from './data/gallery-images.js';

const refs = {
  galleryContainerEl: document.querySelector('.js-gallery'),
  lightboxEl: document.querySelector('.js-lightbox'),
  lightboxOverlayEl: document.querySelector('.lightbox__overlay'),
  lightboxImageEl: document.querySelector('.lightbox__image'),
  lightboxBtnEl: document.querySelector('[data-action="close-lightbox"]')
}


// 1. Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
const galleryElementsMarkup = createGalleryElements(galleryItems);

refs.galleryContainerEl.insertAdjacentHTML('beforeend', galleryElementsMarkup)

function createGalleryElements(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}


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


// 3.Открытие модального окна по клику на элементе галереи.
function onOpenModalWindow() {
  refs.lightboxEl.classList.add('is-open')
  window.addEventListener('keydown', onModalWindowKeyDown)
}


// 4.Подмена значения атрибута src элемента img.lightbox__image.
function onSetAttributes(src, alt) {
  refs.lightboxImageEl.src = src
  refs.lightboxImageEl.alt = alt
}


// 5.Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]
// и 6.Очистка значения атрибута src элемента img.lightbox__image. 
refs.lightboxBtnEl.addEventListener('click', onCloseModalWindow)

function onCloseModalWindow() {
  refs.lightboxEl.classList.remove('is-open')
  onSetAttributes('', '')
  window.removeEventListener('keydown', onModalWindowKeyDown)
}

// закрытие модального окна при клике в бекдроп
refs.lightboxOverlayEl.addEventListener('click', onBackdropClick)

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow()
  }
}

// Закрытие модального окна по нажатию клавиши ESC
// и пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо" 
function onModalWindowKeyDown(event) {
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


// 7. ленивая загрузка изображений

if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('.gallery__image');
  lazyImages.forEach(image => {
    image.addEventListener('load', { once: true });
    image.setAttribute('loading', 'lazy')
});
}


function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}


