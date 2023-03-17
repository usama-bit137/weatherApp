import "./style.css";
import setLayout from "./layout";
import { WeatherFactory } from "./factory";

setLayout();

let prevSearch = [];

const card = document.querySelector(".card");
const nameDiv = document.querySelector(".name-div");
const tempDiv = document.querySelector(".temp");
const pressureDiv = document.querySelector(".pressure");
const feelDiv = document.querySelector(".feels");

const searchBtn = document.getElementById("search-btn");
let location = "";

async function fetchWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2bd361fd896a074e2c8c2fce72989c80`, {
    mode: "cors",
  }).then((response) => response.json()).then((response) => {
    let information = WeatherFactory(response.name, response.main);
    console.log(typeof (information));
    prevSearch.push(information);
    console.log(prevSearch);
    nameDiv.textContent = `City: ${information.location}`;
    tempDiv.textContent = `Temperature ${information.currentTemp}`;
    pressureDiv.textContent = `Pressure: ${information.currentPressure}`;
    feelDiv.textContent = `Feels Like: ${information.feelLike}`;

    card.appendChild(nameDiv);
    card.appendChild(tempDiv);
    card.appendChild(pressureDiv);
    card.appendChild(feelDiv);
  });
}

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
