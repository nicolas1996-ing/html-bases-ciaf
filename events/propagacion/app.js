const action = (event) => {
  event.stopPropagation(); // detiene la propagacion del evento
  const current_target = event.currentTarget.nodeName;
  const nodo_target = event.target;
  const node_name = nodo_target.nodeName;
  console.log({ current_target, nodo_target, node_name });
};

const button = document.querySelector(".nodo_nieto");
const div_hijo = document.querySelector(".nodo_hijo");
const div_padre = document.querySelector(".nodo_padre");

button.addEventListener("click", action);
div_hijo.addEventListener("click", action);
div_padre.addEventListener("click", action);

/*
    para los elementos que escuchan un mismo evento, éste se
    propaga en el orden en que se agregaron los listeners y en la
    posicion del DOM en que se encuentran los elementos

    <div class="nodo_padre">
      <div class="nodo_hijo">
        <button class="nodo_nieto">reset</button>
      </div>
    </div>

    si yo hago click sobre el boton, el evento se propaga hasta
    el div mas externo, y en cada uno de los elementos se ejecuta

    si yo hago click sobre el div_hijo, el evento se propaga hasta
    el div mas externo, y en cada uno de los elementos se ejecuta

    si yo hago click sobre el div_padre, el evento se propaga hasta
    el div mas externo, y en cada uno de los elementos se ejecuta

    event.stopPropagation(): detiene la propagacion del evento
*/
