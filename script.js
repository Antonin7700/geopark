// Initialisation de la carte avec Leaflet
var map = L.map('map').setView([0, 0], 2); // Centre initial de la carte

// Ajout d'une couche de tuiles de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fonction pour ajouter un marqueur à la carte
function addMarker(lat, lng) {
  L.marker([lat, lng]).addTo(map)
    .bindPopup('Votre position').openPopup();
}

// Utiliser la géolocalisation HTML5 pour obtenir la position de l'utilisateur
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    
    // Ajouter un marqueur à la position récupérée
    addMarker(latitude, longitude);

    // Centrer la carte sur la position récupérée
    map.setView([latitude, longitude], 13); // 13 est le niveau de zoom
  }, () => {
    // En cas d'erreur de géolocalisation
    alert("La géolocalisation a échoué. Veuillez activer la géolocalisation dans votre navigateur.");
  });
} else {
  // Si la géolocalisation n'est pas supportée par le navigateur
  alert("Votre navigateur ne prend pas en charge la géolocalisation.");
}

// Appel à l'API ipgeolocation.io pour obtenir la localisation
fetch('https://api.ipgeolocation.io/ipgeo?apiKey=7bc26af802a540889b5bcf77168a9c2b')
  .then(response => response.json())
  .then(data => {
    var { latitude, longitude } = data;
    
    // Ajouter un marqueur à la position récupérée
    addMarker(latitude, longitude);

    // Centrer la carte sur la position récupérée
    map.setView([latitude, longitude], 13); // 13 est le niveau de zoom
  })
  .catch(error => console.error('Error:', error));
