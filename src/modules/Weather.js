export default class Weather {
  static async getData(location, unit) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=17c08553eeb63939b321ceef5b107ab0`;
    try {
      const response = await fetch(url);
      return Weather.processData(await response.json(), unit);
    } catch (error) {
      console.log(error);
    }
  }

  static processData(data, unit) {
    const { name } = data;
    const { id, description } = data.weather[0];
    const { temp, temp_min, temp_max } = data.main;
    const { feels_like, humidity, pressure } = data.main;
    let { speed } = data.wind;
    speed =
      unit === 'metric'
        ? `${Math.round(speed * 3.6)}kph`
        : `${Math.round(speed)}mph`;

    return {
      name,
      id,
      description,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      pressure,
      speed,
    };
  }
}
