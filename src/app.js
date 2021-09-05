const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

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
