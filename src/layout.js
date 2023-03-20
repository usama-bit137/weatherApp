export default function setLayout() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const section = document.createElement("section");
  const formElement = document.createElement("form");
  const searchInput = document.createElement("input");
  const searchLabel = document.createElement("label");

  searchLabel.setAttribute("for", "title");
  searchLabel.classList.add("title-element");
  formElement.appendChild(searchLabel);

  searchInput.setAttribute("type", "text");
  searchInput.classList.add("title-element");
  searchInput.classList.add("input-box");
  searchInput.setAttribute("id", "search-bar");
  formElement.appendChild(searchInput);

  const searchBtn = document.createElement("button");
  searchBtn.setAttribute("id", "search-btn");
  searchBtn.setAttribute("type", "button");
  searchBtn.textContent = "Check Weather";
  formElement.appendChild(searchBtn);
  header.textContent = "Wheather?";

  const itemDiv = document.createElement("div");
  itemDiv.setAttribute("class", "card");
  const locationDiv = document.createElement("div");
  locationDiv.setAttribute("class", "name-div");
  const descDiv = document.createElement("div");
  descDiv.setAttribute("class", "desc");
  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("class", "temp");
  const pressureDiv = document.createElement("div");
  pressureDiv.setAttribute("class", "pressure");
  const feelsLike = document.createElement("div");
  feelsLike.setAttribute("class", "feels");

  itemDiv.appendChild(locationDiv);
  itemDiv.appendChild(tempDiv);
  itemDiv.appendChild(descDiv);
  itemDiv.appendChild(pressureDiv);
  itemDiv.appendChild(feelsLike);

  section.appendChild(itemDiv);
  header.appendChild(formElement);
  header.classList.add("grid-container");
  body.appendChild(header);
  body.appendChild(section);
}
