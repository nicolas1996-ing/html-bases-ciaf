const main = document.getElementById("main");
const listOne = document.createElement("ul");
const listTwo = document.createElement("ul");
main.appendChild(listOne);
main.appendChild(listTwo);
// objetivo. crear una lista con 20 elementos

// forma 1.
for (let i = 0; i <= 20; i++) {
  let item = document.createElement("li");
  item.innerText = `item ${i}`;
  // renderiza i veces el html
  listOne.appendChild(item);
}

// forma 2.
let items = [];
for (let idx = 0; idx <= 20; idx++) {
  let item = document.createElement("li");
  item.innerText = `item ${idx}`;
  items.push(item);
}
// renderiza una sola vez el html
listTwo.append(...items);
