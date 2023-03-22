import "./style.css";
import setLayout from "./layout";
import { WeatherFactory } from "./factory";

setLayout();

let prevSearch = [];

const card = document.querySelector(".card");
const nameDiv = document.querySelector(".name-div");
const tempDiv = document.querySelector(".temp");
const descDiv = document.querySelector(".desc");
const pressureDiv = document.querySelector(".pressure");
const feelDiv = document.querySelector(".feels");
const body = document.querySelector("body");

const searchBtn = document.getElementById("search-btn");
let location = "";

async function fetchWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2bd361fd896a074e2c8c2fce72989c80`, {
    mode: "cors",
  }).then((response) => response.json()).then((response) => {
    let information = WeatherFactory(response);
    console.log(response);
    prevSearch.push(information);
    console.log(prevSearch);
    nameDiv.textContent = `${information.location}`;
    descDiv.textContent = `${information.weatherDesc}, ${information.weatherFullDesc}`;
    tempDiv.textContent = `Temperature: ${Math.round(information.currentTemp)} °C`;
    feelDiv.textContent = `Feels Like: ${Math.round(information.feelLike)} °C`;
    pressureDiv.textContent = `Pressure: ${information.currentPressure / 1000} atm `;

    card.appendChild(nameDiv);
    card.appendChild(descDiv);
    card.appendChild(tempDiv);
    card.appendChild(feelDiv);
    card.appendChild(pressureDiv);
  });
}

searchBtn.addEventListener("click", () => {
  card.classList.remove("hidden");
  const searchField = document.getElementById("search-bar");
  location = searchField.value;
  const loadingImg = document.createElement("img");
  loadingImg.src = "../src/img/sun.png";
  loadingImg.classList.add(".loading");

  if (location === "") {
    throw ("Please enter a valid location");
  } else {
    body.appendChild(loadingImg);
    setTimeout(() => {
      card.classList.add("show");
      fetchWeather();
      searchField.value = "";
      body.removeChild(loadingImg);
    }, 3000);
  }
});
