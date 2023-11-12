function myFunction() {
  const span = document.getElementById("mySpan");
  const h2 = document.getElementById("myH2");
  // mueve el elemento al final de los elementos hijos del elemento padre
  // lo toma
  h2.insertAdjacentElement("afterend", span);
}
