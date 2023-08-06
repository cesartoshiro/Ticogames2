// Obtener referencias a los elementos del DOM
const songForm = document.getElementById('song-form');
const songsContainer = document.getElementById('songs-container');

// Manejar el envío del formulario
songForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
  const title = document.getElementById('song-title').value;
  const artist = document.getElementById('song-artist').value;
  const duration = document.getElementById('song-duration').value;

  // Crear un nuevo elemento de canción
  const song = document.createElement('div');
  song.classList.add('song');
  song.innerHTML = `
    <h3>${title}</h3>
    <p>Artista: ${artist}</p>
    <p>Duración: ${duration}</p>
  `;

  // Agregar la canción al contenedor
  songsContainer.appendChild(song);

  // Limpiar el formulario
  songForm.reset();
});

$(document).ready(function() {
  // Manejar el clic en los elementos del menú
  $('#events').click(function() {
    showContent('events');
  });

  $('#traversing').click(function() {
    showContent('traversing');
  });

  $('#effects').click(function() {
    showContent('effects');
  });

  // Función para mostrar el contenido según la selección del menú
  function showContent(contentId) {
    // Obtener el contenido correspondiente
    var content = '';

    switch (contentId) {
      case 'events':
        content = 'Aquí se muestra el contenido de eventos en jQuery';
        break;
      case 'traversing':
        content = 'Aquí se muestra el contenido de traversing en jQuery';
        break;
      case 'effects':
        content = 'Aquí se muestra el contenido de efectos en jQuery';
        break;
    }

    // Mostrar el contenido en el contenedor correspondiente
    $('#content').html(content);
  }
});

