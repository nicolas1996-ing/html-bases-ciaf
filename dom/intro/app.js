// ejecuta esta función cuando se cargue el documento

/*
window.onload = function () {
  // crea dinámicamente un par de elementos HTML en una página vacia
  let heading = document.createElement("h1");
  let heading_text = document.createTextNode(
    "texto que se renderiza después de cargarse la página"
  );
  heading.appendChild(heading_text);
  document.body.appendChild(heading);
};
*/

// console.log("hello world");
// console.log(window.innerHeight);
// window.prompt("ingrese su edad");
// sessionStorage.setItem("my-name", "nicolas");
// let myName = localStorage.getItem("my-name");
// console.log(myName);

// ====================================================================
// getElementById
/*
const main_p = document.getElementById("main__p");
main_p.innerText = "hello ciaf";
main_p.style.color = "red";
setInterval(() => {
  main_p.style.color =
    main_p.style.color == "blue"
      ? (main_p.style.color = "red")
      : (main_p.style.color = "blue");
}, 2000);
console.log(main_p);
console.log(main_p.innerText);
*/
// ====================================================================
const p_labels = document.getElementsByTagName("p");


