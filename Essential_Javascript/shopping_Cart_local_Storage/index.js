// const addItemBtn = document.getElementById("add-item-btn");
// const itemInput = document.getElementById("item-input");
// const list = document.getElementById("list");

// const shoppingList = [];

// addItemBtn.addEventListener("click", function () {
//   if (shoppingList.includes(itemInput.value)) {
//     console.log("no duplicates");
//   } else {
//     shoppingList.push(itemInput.value);
//     render();
//   }
//   itemInput.value = "";
// });

// function render() {
//   let html = "";
//   for (let item of shoppingList) {
//     html += `<li class="list-item">${item}</li>`;
//   }
//   list.innerHTML = html;
// }

// render();

const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

let shoppingList = ["rice", "pudding"];

// Retrieve the shopping list from local storage when the page loads
const savedShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
if (savedShoppingList) {
  shoppingList = savedShoppingList;
}

addItemBtn.addEventListener("click", function () {
  if (shoppingList.includes(itemInput.value)) {
    console.log("no duplicates");
  } else {
    shoppingList.push(itemInput.value);
    render();
  }
  itemInput.value = "";
});

function render() {
  let html = "";
  for (let item of shoppingList) {
    html += `<li class="list-item">${item}</li>`;
  }
  list.innerHTML = html;
}

// Save the shopping list to local storage when the page unloads
window.addEventListener("beforeunload", function () {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
});

render();
