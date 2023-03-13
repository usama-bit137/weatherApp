import "./style.css";
import setLayout from "./layout";
import { WeatherFactory } from "./factory";

setLayout();

// We are going to have an input in a search-bar, whose value 
// we will input to the factory function.

// This location bit will be a by user input, but London
// is a good placeholder for now.
const searchBtn = document.getElementById("search-btn");
let location = "";

async function fetchWeather() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=2bd361fd896a074e2c8c2fce72989c80", {
  mode:"cors"
}).then((response) => {
  return response.json()
}).then((response) => {
  // we will save these in some sort of 
  console.log(response.name)
  console.log(response.main)
}).catch(() => {
  throw("Error fetching weather data from OpenWeatherApi!")
});
}

searchBtn.addEventListener("click", () => {
  location = document.getElementById("search-bar").value;
  fetchWeather(); 
})
