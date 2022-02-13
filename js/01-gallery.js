import { galleryItems } from './gallery-items.js';

const galleryElement = document.querySelector('.gallery');
const markup = galleryItems.map((galleryItem) => `<div class ="gallery__item"><a class="gallery__link" href="${galleryItem.original}">
<img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"></a></div>`).join("");

galleryElement.insertAdjacentHTML(`beforeend`,markup);


galleryElement.addEventListener("click", onClickEvent)

function onClickEvent (event) {
    event.preventDefault();

    if(event.target.nodeName!=="IMG") {
        return;
    }
    const imageSrc = event.target.dataset.source
    console.log(imageSrc)

    const instance = basicLightbox.create(`
	<img src=${imageSrc}>
`)
    instance.show();

}

