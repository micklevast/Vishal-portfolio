document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.portfolio-item img');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        const imgSrc = this.getAttribute('src');
        openImagePopup(imgSrc);
      });
    });
  
    function openImagePopup(imgSrc) {
      const popupContainer = document.createElement('div');
      popupContainer.classList.add('image-popup-container');
  
      const popupImage = document.createElement('img');
      popupImage.classList.add('image-popup');
      popupImage.src = imgSrc;
  
      popupContainer.appendChild(popupImage);
      document.body.appendChild(popupContainer);
  
      popupContainer.addEventListener('click', closeImagePopup);
    }
  
    function closeImagePopup() {
      const popupContainer = document.querySelector('.image-popup-container');
      if (popupContainer) {
        popupContainer.remove();
      }
    }
  });
  