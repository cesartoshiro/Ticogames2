function saveImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageData = e.target.result;
        const images = getSavedImages();
        images.push(imageData);
        saveImages(images);
        displayImages();
      };
      reader.readAsDataURL(file);
    }
  }
  
  function getSavedImages() {
    const savedImages = localStorage.getItem('savedImages');
    if (savedImages) {
      return JSON.parse(savedImages);
    } else {
      return [];
    }
  }
  
  function saveImages(images) {
    localStorage.setItem('savedImages', JSON.stringify(images));
  }
  
  function displayImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    const images = getSavedImages();
    for (let i = 0; i < images.length; i++) {
      const imgElement = document.createElement('img');
      imgElement.src = images[i];
      gallery.appendChild(imgElement);
    }
  }
  
  window.onload = function() {
    displayImages();
  };
  