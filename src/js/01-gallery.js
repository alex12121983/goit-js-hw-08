import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `
    <a class="gallery__item" href="${current.original}">
        <img class="gallery__image" src="${current.preview}" alt="${current.description}" />
    </a>
    `,
  ''
);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
