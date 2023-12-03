/* 
const action = (event) => {
  console.log(event.target.innerHTML);
  window.alert(`hola from ${event.target.innerHTML}`);
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", action);
});
*/

// delegacion de eventos
const nodo_contendor = document.querySelector(".nodo_hijo");
nodo_contendor.addEventListener("click", (event) => {
  // solo cuando doy click sobre algún botón
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.innerHTML);
    window.alert(`hola from ${event.target.innerHTML}`);
  }
});
