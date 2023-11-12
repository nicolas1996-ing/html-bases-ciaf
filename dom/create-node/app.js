// crear nodos no los agrega a nuestro proyecto
document.createElement("h1");
document.createTextNode("text-node");

// agregar nodos al DOM
/*
    parentElement.appendChild
    parentElement.append
    parentElement.insertBefore
    parentElement.insertAdjacentElement
*/

// ======================================================================
// ======================================================================
// insertar despúes del nodo que padre

// =======================================================================
// append.child = agrega elementos al final del contenido del nodo padre
const div_append_child = document.querySelector("#div_append_child"); // nodo de referencia
const h2_append_child = document.createElement("h2"); // nodo a agregar
const textContent = document.createTextNode("explorando append_child"); // texto

h2_append_child.appendChild(textContent);
div_append_child.appendChild(h2_append_child);

// h2_append_child.textContent = "explorando append_child"; // texto

// =======================================================================
// append = agregar varios elementos al tiempo
const div_append = document.querySelector("#div_append");
const h2_append = document.createElement("h2");
h2_append.textContent = "explorando append";
div_append.append(h2_append, "otro-contenido");

// ======================================================================
// ======================================================================
// insertar antes del nodo que padre

// =======================================================================
// insertBefore
const hr_insert_before = document.createElement("hr");
const main_node = document.querySelector("body"); // tomo como referencia el nodo
const referencia = document.querySelector("#div_append");
main_node.insertBefore(hr_insert_before, referencia); // inserte el hr antes el elemento referencia tomando como padre el contenedor body

// ejemplo 2.
const referenceMain = document.querySelector("#insert_before");
const referenceSec = document.querySelector("#insert_before_p_2");
const hr_insert_before_2 = document.createElement("hr");
referenceMain.insertBefore(hr_insert_before_2, referenceSec);

// =======================================================================
// insertAdjacentElement
const referenceMainAdjacent = document.querySelector("#insert_adjacent");
const titleAdjacent = document.createElement("span");
titleAdjacent.textContent = "titulo insertAdjacentElement";
// referenceMainAdjacent.insertAdjacentElement("afterbegin", titleAdjacent); // antes de que se renderize el nodo
// referenceMainAdjacent.insertAdjacentElement("beforebegin", titleAdjacent); // despues de que se renderiza el nodo ( queda como el primer elem)
// referenceMainAdjacent.insertAdjacentElement("beforeend", titleAdjacent); // dentro del nodo como ultimo elemento
// referenceMainAdjacent.insertAdjacentElement("afterend", titleAdjacent); // despues de que se cierra el nodo ( queda como el primer elem)
