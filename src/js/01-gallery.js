//  импорт библиотеки SimpleLightbox
import SimpleLightbox from 'simplelightbox';
// импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const arrayEl = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`,
  '',
);
galleryEl.insertAdjacentHTML('afterbegin', arrayEl);

const optionsForModal = {
  captionsData: 'alt',
  captionDelay: 250,
};

const modalFromLib = new SimpleLightbox('.gallery__link', optionsForModal);
