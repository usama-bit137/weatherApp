export const WeatherFactory = (name, main) => {
  const location = name;
  const currentTemp = main.temp;
  const currentPressure = main.pressure;
  const feelLike = main.feels_like;
  return {
    location, currentTemp, currentPressure, feelLike,
  };
};
