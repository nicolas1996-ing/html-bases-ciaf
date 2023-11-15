// getElementByTagName

/* const parrafos = document.getElementsByTagName("p"); // p, h, img, input, etc ...
const primer_p = parrafos[0]; // primer elemento <p> ... </p>

setTimeout(() => {
  primer_p.innerText = "soy otro texto";
}, 3000); */

// getElementByClassName
/*
const parrafos_ppal = document.getElementsByClassName("p__main");
const parrafo_ppal = parrafos_ppal[0];
parrafo_ppal.style.color = "red";
parrafo_ppal.style.cssText = "color: green; font-size: 10px";
console.log(parrafo_ppal.innerText);
*/

// getElementById
/* const parrafo_por_id = document.getElementById("p__from__id");
parrafo_por_id.style.color = "red";
console.log(parrafo_por_id.innerText);
 */

// document.querySelector
const parrafo__ppal_by_id = document.querySelector("#p__from__id"); // id,class,etiqueta html => primer elemento
const parrafo__ppal_by_class = document.querySelector(".p__main");
console.log("querySelector: ", parrafo__ppal_by_id.innerText);
console.log("querySelector: ", parrafo__ppal_by_class.innerText);

// document.querySelectorAll
// const parrafo__ppal_II = document.querySelectorAll("#p__from__id"); // id,class,etiqueta html => primer elemento
// console.log("querySelectorAll: ", parrafo__ppal_II);
