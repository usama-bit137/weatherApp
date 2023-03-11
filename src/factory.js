export const WeatherFactory = location => {
  const getLocation = () => location;
  const getCurrentTemp = () => currentTemp; 
  const getCurrentWind = () => currentWind;
  const getCurrentFeel = () => CurrentFeel; 

  return { location, currentTemp, currentWind, currentFeel }
}