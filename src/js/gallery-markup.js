import galleryItems from './data/gallery-items.js';
export const galleryElementsMarkup = createGalleryElements(galleryItems)

// 1. Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// refs.galleryContainerEl.insertAdjacentHTML('beforeend', galleryElementsMarkup)
function createGalleryElements(items){
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
