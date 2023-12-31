// // crear nodos no los agrega a nuestro proyecto
// document.createElement("h1");
// document.createTextNode("text-node");

// // agregar nodos al DOM
// /*
//     parentElement.appendChild
//     parentElement.append
//     parentElement.insertBefore
//     parentElement.insertAdjacentElement
// */

// // ======================================================================
// // ======================================================================
// // insertar despúes del nodo que padre

// // =======================================================================
// // append.child = agrega elementos al final del contenido del nodo padre
const div_append_child = document.querySelector("#div_append_child"); // nodo de referencia
const h2_append_child = document.createElement("h2"); // nodo a agregar

// forma 1. agregar contenido a una etiqueta
// h2_append_child.innerText = "este es un contenido de ejemplo";

// forma 2. agregar contenido a una etiqueta
h2_append_child.textContent = "explorando append_child"; // texto

// form 3. agregar contenido a una etiqueta
// const textContent = document.createTextNode("este es un contenido de ejemplo"); // texto
// h2_append_child.appendChild(textContent);
div_append_child.appendChild(h2_append_child);

// // =======================================================================
// // append = agregar varios elementos al tiempo
const div_append = document.querySelector("#div_append");
const span_append = document.createElement("span");
const h1_append = document.createElement("h1");
h1_append.className = "h1_append";

const p_append = document.createElement("p");

h1_append.textContent = "contenido del h1";
span_append.textContent = "explorando append";
p_append.textContent = "yo soy un parrafo en append";
div_append.append(h1_append, span_append, p_append);

// // ======================================================================
// // ======================================================================
// // insertar antes del nodo que padre

// // =======================================================================
// // insertBefore
// const hr_insert_before = document.createElement("hr");
// const main_node = document.querySelector("body"); // tomo como referencia el nodo
// const referencia = document.querySelector("#div_append");
// main_node.insertBefore(hr_insert_before, referencia); // inserte el hr antes el elemento referencia tomando como padre el contenedor body

// // ejemplo 2.
// const referenceMain = document.querySelector("#insert_before");
// const referenceSec = document.querySelector("#insert_before_p_2");
// const hr_insert_before_2 = document.createElement("hr");
// referenceMain.insertBefore(hr_insert_before_2, referenceSec);

// // =======================================================================
// // insertAdjacentElement
// const referenceMainAdjacent = document.querySelector("#insert_adjacent");
// const titleAdjacent = document.createElement("span");
// titleAdjacent.textContent = "titulo insertAdjacentElement";
// // referenceMainAdjacent.insertAdjacentElement("afterbegin", titleAdjacent); // antes de que se renderize el nodo
// // referenceMainAdjacent.insertAdjacentElement("beforebegin", titleAdjacent); // despues de que se renderiza el nodo ( queda como el primer elem)
// // referenceMainAdjacent.insertAdjacentElement("beforeend", titleAdjacent); // dentro del nodo como ultimo elemento
// // referenceMainAdjacent.insertAdjacentElement("afterend", titleAdjacent); // despues de que se cierra el nodo ( queda como el primer elem)
