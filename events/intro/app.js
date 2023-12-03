const btn = document.querySelector("#main__btn");
const input = document.getElementById("main__input");

// eventos desde el js
btn.addEventListener("click", () => {
  alert("Hello world!");
});

btn.addEventListener("onmouseover", () => {
  console.log("mouse click");
});

input.addEventListener("keyup", (event) => {
  const inputValue = event.target.value;
  //  logica asociada al valor del input
  if (inputValue === "hola") {
    alert("Hola mundo");
  }
  console.log(inputValue);
});

input.addEventListener("mouseover", () => {
  console.log("mouse over");
});

// eventos desde el html on<action>
function onMouseOverOn() {
  console.log("eventos desde el html");
}

// asociar varias listerners a un mismo elemento
const emailInput = document.getElementById("email__input");
const actionOne = () => console.log("action one");
const actionTwo = () => console.log("action two");
emailInput.addEventListener("click", actionOne);
emailInput.addEventListener("click", actionTwo);
// remover un listener: la accion no puedes ser una funcion anonima ( arrow function )
// emailInput.removeEventListener("click", actionOne);