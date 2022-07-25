export default class Weather {
  static async getData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=17c08553eeb63939b321ceef5b107ab0`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Location:${location} not found`);
      return Weather.processData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  static processData(data) {
    const name = data.name;
    const id = data.weather[0].id;
    const description = data.weather[0].description;
    const temp = Math.round(data.main.temp);
    const feels_like = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;

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
