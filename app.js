// app.js
import config from './config.js';

document.getElementById('getLocationBtn').addEventListener('click', () => {
  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${config.apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log('Data from API:', data); // Vérifiez les données reçues dans la console

      if (data.latitude && data.longitude) {
        const { latitude, longitude } = data;
        document.getElementById('location').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
      } else {
        document.getElementById('location').innerText = 'Unable to determine location';
      }
    })
    .catch(error => console.error('Error:', error));
});
