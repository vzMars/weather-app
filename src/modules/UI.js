import thunder from '../images/200.png';
import drizzle from '../images/300.png';
import rain from '../images/500.png';
import snow from '../images/600.png';
import atmos from '../images/700.png';
import clear from '../images/800.png';
import clouds from '../images/801.png';
import feels from '../images/feels_like.png';
import humidity from '../images/humidity.png';

export default class UI {
  static renderWeatherContainer(data) {
    const main = document.querySelector('main');
    const location = document.querySelector('#location');
    const temperature = document.querySelector('#temperature');
    const description = document.querySelector('#description');
    const feelsIcon = document.querySelector('#feels-like-icon');
    const feelsText = document.querySelector('#feels-like');
    const humidityIcon = document.querySelector('#humidity-icon');
    const humidityText = document.querySelector('#humidity');

    location.textContent = data.name;
    description.textContent = data.description;
    humidityText.textContent = `${data.humidity}%`;
    temperature.textContent = `${data.temp}°F`;
    feelsText.textContent = `${data.feels_like}°F`;

    UI.setWeatherIcon(data.id);
    feelsIcon.src = feels;
    humidityIcon.src = humidity;

    if (main.classList.contains('hidden')) {
      main.classList.toggle('hidden');
    }
  }

  static celsiusToFahrenheit() {
    const temperature = document.querySelector('#temperature');
    const feelsText = document.querySelector('#feels-like');

    const fahrenheitTemp = Math.round(
      (+temperature.textContent.split('°')[0] * 9) / 5 + 32
    );
    const fahrenheitFeels = Math.round(
      (+feelsText.textContent.split('°')[0] * 9) / 5 + 32
    );

    temperature.textContent = `${fahrenheitTemp}°F`;
    feelsText.textContent = `${fahrenheitFeels}°F`;
  }

  static fahrenheitToCelsius() {
    const temperature = document.querySelector('#temperature');
    const feelsText = document.querySelector('#feels-like');

    const celsiusTemp = Math.round(
      ((+temperature.textContent.split('°')[0] - 32) * 5) / 9
    );
    const celsiusFeels = Math.round(
      ((+feelsText.textContent.split('°')[0] - 32) * 5) / 9
    );

    temperature.textContent = `${celsiusTemp}°C`;
    feelsText.textContent = `${celsiusFeels}°C`;
  }

  static setWeatherIcon(id) {
    const weatherIcon = document.querySelector('#temperature-icon');
    if (id < 300) {
      weatherIcon.src = thunder;
    } else if (id < 500) {
      weatherIcon.src = drizzle;
    } else if (id < 600) {
      weatherIcon.src = rain;
    } else if (id < 700) {
      weatherIcon.src = snow;
    } else if (id < 800) {
      weatherIcon.src = atmos;
    } else if (id < 801) {
      weatherIcon.src = clear;
    } else {
      weatherIcon.src = clouds;
    }
  }
}
