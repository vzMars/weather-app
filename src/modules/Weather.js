export default class Weather {
  static async getData(location, unit) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=17c08553eeb63939b321ceef5b107ab0`;
    try {
      const response = await fetch(url);
      return Weather.processData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  static processData(data) {
    const { name } = data;
    const { id, description } = data.weather[0];
    const { temp } = data.main;
    const { feels_like, humidity } = data.main;

    return {
      name,
      id,
      description,
      temp,
      feels_like,
      humidity,
    };
  }
}
