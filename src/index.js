import "./style.css";
import setLayout from "./layout";
import { WeatherFactory } from "./factory";

setLayout();

const searchBtn = document.getElementById("search-btn");
let location = "";

async function fetchWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2bd361fd896a074e2c8c2fce72989c80`, {
    mode: "cors",
  }).then((response) => response.json()).then((response) => {
    const information = WeatherFactory(response.name, response.main);
    console.log(information);
    return information;
  }).catch(() => {
    throw ("Error fetching weather data from OpenWeatherApi!");
  });
}

/*
  This is the button press event which will trigger the fetch
*/
searchBtn.addEventListener("click", () => {
  const searchField = document.getElementById("search-bar");
  location = searchField.value;
  if (location === "") {
    throw ("Please enter a valid location");
  } else {
    fetchWeather();
    searchField.value = "";
  }
});
