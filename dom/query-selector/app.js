// accediendo a elementos del DOM
const pTags = document.querySelectorAll("p"); // nodeList
const pTag = document.querySelector("p"); // nodeList
const pClass = document.querySelector(".query_selector_class");
const pId = document.querySelector("#query_selector_id");

console.log(pTags);
console.log(pTag);
console.log(pClass);
console.log(pId);

// modificando estilos del elementos
pId.style.color = "red";

/*
    nodeList: limitado en operaciones asociados a las operaciones del arr ( filter, map , reduce, etc...)
        - coonvertir nodeList => arr => const arrayFromNodeList = [...nodeList]
*/
