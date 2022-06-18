import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// console.log(galleryContainer);

const galleryMarkup = createCardsGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
          return  `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = 'event.preventDefault()'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        })
        .join('');
}


function onGalleryContainerClick(event) {
    const isGalleryImageEl = event.target.classList.contains('gallery__image');

    if (!isGalleryImageEl) {
        return;
    } else {
        const instance = basicLightbox.create(`
    <img src= "${event.target.dataset.source}"/>
`,
    { onShow: () => {window.addEventListener('keydown', onEscPress) } },
    );

      instance.show();
      function onEscPress(event) {
        if (event.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress);
        }
      }
    }
    
    console.log(event.target);
}






// console.log(galleryItems);
