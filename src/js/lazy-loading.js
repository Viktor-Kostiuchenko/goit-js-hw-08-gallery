// 7. Ленивая загрузка изображений
export const addSrcAttrToLazyImages = () => {
  const lazyImages = document.querySelectorAll('.gallery__image');
  lazyImages.forEach(image => {
    image.addEventListener('load', { once: true });
    image.setAttribute('loading', 'lazy')
});
}

export const addLazySizesScript = () => {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}