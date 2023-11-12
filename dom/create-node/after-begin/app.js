function myFunction() {
  const span = document.getElementById("mySpan");
  const h2 = document.getElementById("myH2");
  // insertar/mover después del inicio de la etiqueta
  // lo toma como el primer hijo del elemento padre
  h2.insertAdjacentElement("afterbegin", span);
}
