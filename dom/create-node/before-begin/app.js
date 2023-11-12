function myFunction() {
  const span = document.getElementsByTagName("span")[0];
  const h2 = document.getElementById("myH2");
  // mueve el elemeneto una posicion antes del elemento padre que sirve como referencia
  h2.insertAdjacentElement("beforebegin", span);
}
