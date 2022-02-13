import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElement = document.querySelector('.gallery');
const markup = galleryItems.map((galleryItem) => `<a class="gallery__link" href="${galleryItem.original}">
<img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"></a>`).join("");

galleryElement.insertAdjacentHTML(`beforeend`,markup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });