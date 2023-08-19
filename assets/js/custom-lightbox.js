// Open lightbox when an image is clicked
document.querySelectorAll('.portfolio-item img').forEach(image => {
    image.addEventListener('click', function() {
      const imageSrc = this.getAttribute('src');
      const overlay = document.querySelector('.lightbox-overlay');
      const lightbox = document.querySelector('.lightbox-container');
      const lightboxImage = document.querySelector('.lightbox-image');
  
      lightboxImage.setAttribute('src', imageSrc);
      overlay.style.display = 'block';
      lightbox.style.display = 'block';
    });
  });
  
  // Close lightbox when overlay or close button is clicked
  document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  
  function closeLightbox() {
    const overlay = document.querySelector('.lightbox-overlay');
    const lightbox = document.querySelector('.lightbox-container');
  
    overlay.style.display = 'none';
    lightbox.style.display = 'none';
  }
  