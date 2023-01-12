const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");
const ResetEl = document.getElementById("reset-btn");

let count = 0;
// console.log(count);

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
});

// Increment
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  countEl.innerText = count;
});

// Save
saveBtn.addEventListener("click", () => {
  //   console.log(count);
  let countStr = count + " - ";
  if (count > 0) {
    saveEl.textContent += countStr;
  }

  count = 0;
  countEl.innerText = count;
});

// Reset
ResetEl.addEventListener("click", () => {
  count = 0;
  countEl.innerText = count;
});

// function save() {
//   console.log(count);
// }
