import 'normalize.css';
import './style.css';
import Weather from './modules/Weather';
import UI from './modules/UI';

const locationSearch = document.querySelector('#location-search');
const btn = document.querySelector('button');
const checkbox = document.querySelector('#myToggle');

checkbox.addEventListener('click', (e) => {
  if (e.target.checked) {
    UI.fahrenheitToCelsius();
  } else {
    UI.celsiusToFahrenheit();
  }
});

btn.addEventListener('click', async () => {
  const location = locationSearch.value;
  if (location) {
    const weatherData = await Weather.getData(location);
    locationSearch.value = '';
    if (weatherData) {
      checkbox.checked = false;
      UI.renderWeatherContainer(weatherData);
    }
  }
});
