import 'normalize.css';
import './style.css';
import Weather from './modules/Weather';

Weather.getData('Bronx').then((data) => console.log(data));
