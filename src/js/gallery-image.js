import { onOpenModalWindow } from './modal-window'
// Подмена значения атрибута src элемента img.lightbox__image.
import { onSetAttributes } from './set-attributes'


export const onGalleryContainerClick = (event) => {
  const isGalleryImage= event.target.classList.contains('gallery__image')

  if (!isGalleryImage) {
    return
  }
  event.preventDefault();

  onOpenModalWindow()
  onSetAttributes(event.target.dataset.source, event.target.alt)
}
