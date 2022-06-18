import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createCardsGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
          return  `<div class="gallery__item">
  <a class="gallery__item" href="${original}" onclick = 'event.preventDefault()'>
  <img class="gallery__image" 
  src="${preview}" 
  title="${description}" />
</a>
</div>`;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "title", captionDelay: 250  });

console.log(galleryItems);


