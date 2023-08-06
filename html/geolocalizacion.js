// Obtener referencia al elemento del DOM donde se mostrará la ubicación
const locationElement = document.getElementById('location');

// Verificar si el navegador del usuario es compatible con la API de Geolocalización
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation, showError);
} else {
  locationElement.innerHTML = 'Geolocalización no es compatible con este navegador.';
}

// Función que se llama cuando se obtiene la ubicación correctamente
function showLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  locationElement.innerHTML = `Latitud: ${latitude}<br>Longitud: ${longitude}`;
}

// Función que se llama cuando hay un error al obtener la ubicación
function showError(error) {
  let message = '';

  switch (error.code) {
    case error.PERMISSION_DENIED:
      message = 'Permiso de geolocalización denegado.';
      break;
    case error.POSITION_UNAVAILABLE:
      message = 'Información de ubicación no disponible.';
      break;
    case error.TIMEOUT:
      message = 'Tiempo de espera agotado para obtener la ubicación.';
      break;
    case error.UNKNOWN_ERROR:
      message = 'Error desconocido al obtener la ubicación.';
      break;
  }

  locationElement.innerHTML = message;
}
