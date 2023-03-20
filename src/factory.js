export const WeatherFactory = (response) => {
  const location = `${response.name}, ${response.sys.country}`;
  const weatherDesc = response.weather[0].main;
  const weatherFullDesc = response.weather[0].description;
  const currentTemp = response.main.temp - 273;
  const currentPressure = response.main.pressure;
  const feelLike = response.main.feels_like - 273;
  return {
    location, weatherDesc, weatherFullDesc, currentTemp, currentPressure, feelLike,
  };
};
