import 'normalize.css';
import './style.css';
import Weather from './modules/Weather';

Weather.getData('Bronx County', 'imperial').then((data) => console.log(data));
// Weather.getData('Bronx County', 'metric').then((data) => console.log(data));
