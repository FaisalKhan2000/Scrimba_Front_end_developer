// an empty array myLeads to store all the elements generated after clicking save inout btn
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const deleteBtn = document.getElementById("delete-btn");

// un ordered list
const ulEl = document.getElementById("ul-el");

// ["lead1", "lead2"] or null
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// when input btn ic clicked!
// then the value that was entered in the input is stored in the myLeads array
inputBtn.addEventListener("click", function () {
  if (inputEl.value.length > 0) {
    myLeads.push(inputEl.value);

    // Save the myLeads array to localStorage
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();

    // To verify that it works:
    // console.log(localStorage.getItem("myLeads"));
  }
  // console.log(myLeads)
  // 2. Call the renderLeads() function

  // this is the function which adds <li></li> to the ul
  //   renderLeads();
  // after every click the input is cleared
  inputEl.value = "";
});

// 1. Wrap the code below in a renderLeads() function

function renderLeads() {
  // an empty list items is assigned
  let listItems = "";

  // on each iteartion <li> myLeads[i] </li> is added to the ul
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a href='#'>" + myLeads[i] + "</a></li>";
    listItems += `
    <li>
        <a href = "${myLeads[i]}" target=" _blank"> ${myLeads[i]} </a> 
     </li>`;
  }
  ulEl.innerHTML = listItems;
}

// Delete Btn

// When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", () => {
  console.log("double clicked!");
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
