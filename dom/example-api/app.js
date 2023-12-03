const list = document.querySelector("#main_list");
const countries = ["colombia", "brasil", "italia", "peru"]; // api
let content = "";
for (let index = 0; index < countries.length; index++) {
  content += `
        <li> ${countries[index]}</li>
    `;
}

// console.log(content);
list.innerHTML = content;

// for (let index = 0; index < countries.length; index++) {
//   const country = countries[index];

//   // 1. crear li
//   let li = document.createElement("li");
//   li.innerText = country;

//   // 2. inserto li en ul
//   list.appendChild(li);
// }

// const countries = [
//   {
//     name: "colombia",
//     flag: "https://flagcdn.com/w320/co.png",
//   },
//   {
//     name: "chile",
//     flag: "https://flagcdn.com/cl.svg",
//   },
// ]; // api

// const contenedor_padre = document.querySelector(".contenedor_tarjetas");

// for (let index = 0; index < countries.length; index++) {
//   let div_main = document.createElement("div");
//   let img = document.createElement("img");
//   let h1 = document.createElement("h1");

//   // contenidos
//   h1.innerText = countries[index].name;
//   img.src = countries[index].flag;

//   div_main.append(img, h1);
//   contenedor_padre.appendChild(div_main);
// }

const span = document.querySelector(".main_span");
// agregar eventos

span.addEventListener("click", () => {
  console.log("hubo un click!!");
});

span.addEventListener("mouseover", () => {
  span.style.color =
    span.style.color == "red"
      ? (span.style.color = "green")
      : (span.style.color = "red");
});

function onclickWork() {
  console.log("hubo un click desde el html");
}
