const list = document.querySelector(".list_parent");
const item = document.querySelector(".item_child");

// eliminar: parentElement.removeChild
setTimeout(() => {
  list.removeChild(item);
}, 2000);

// acceder al nod padre de un elemento
const itemTwo = document.querySelector(".item_child_two");
const list_parent_elem = itemTwo.parentElement;
console.log(list_parent_elem);

// eliminar: document.remove
const itemOne = document.querySelector(".item_one");
setTimeout(() => {
  itemOne.remove();
}, 3000);

// eliminar: replaceChild
const item_fourth = document.querySelector(".item_fourth");
const newItem = document.createElement("li");
newItem.innerText = "nuevo valor en la lista";
list.replaceChild(newItem, item_fourth);
