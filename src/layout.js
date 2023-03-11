export default function gridLayout() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  
  header.classList.add("grid-container");
  header.textContent = "hello, it worked";
  
  body.appendChild(header);
}