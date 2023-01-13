// an empty array myLeads to store all the elements generated after clicking save inout btn
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// Render Leads
function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
        <a href = "${leads[i]}" target=" _blank"> ${leads[i]} </a> 
     </li>`;
  }
  ulEl.innerHTML = listItems;
}

// Input Btn
inputBtn.addEventListener("click", function () {
  if (inputEl.value.length > 0) {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
  inputEl.value = "";
});

// Delete Btn
deleteBtn.addEventListener("dblclick", () => {
  console.log("double clicked!");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
