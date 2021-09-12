import refs from './refs.js'

// 4.Подмена значения атрибута src элемента img.lightbox__image.
export const onSetAttributes = (src, alt) => {
  refs.lightboxImageEl.src = src
  refs.lightboxImageEl.alt = alt
}