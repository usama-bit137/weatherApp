export const WeatherFactory = (name, main) => {
  const location = name;
  const currentTemp = main.temp;
  const { pressure } = main;
  const feelLike = main.feels_like;

  return {
    location, currentTemp, pressure, feelLike,
  };
};
