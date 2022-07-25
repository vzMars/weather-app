import 'normalize.css';
import './style.css';
import Weather from './modules/Weather';
import UI from './modules/UI';

const locationSearch = document.querySelector('#location-search');
const btn = document.querySelector('button');

btn.addEventListener('click', async () => {
  if (locationSearch.value) {
    const weatherData = await Weather.getData('Bronx County', 'imperial');
    console.log(weatherData);
    locationSearch.value = '';
  }
});

// Weather.getData('Bronx County', 'imperial').then((data) => console.log(data));

// Weather.getData('Bronx County', 'metric').then((data) => console.log(data));
