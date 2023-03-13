export default function setLayout() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const formElement = document.createElement("form");
  const searchInput = document.createElement("input");
  const searchLabel = document.createElement("label");

  const celsiusButton = document.createElement("button");
  celsiusButton.textContent = "°C";

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
  formElement.appendChild(celsiusButton);
  header.textContent = "Wheather?";

  header.appendChild(formElement);
  header.classList.add("grid-container");

  body.appendChild(header);
}
