const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generateRandomPassword(numChars) {
  let password = [];
  for (let i = 0; i < numChars; i++) {
    let randIndex = Math.floor(Math.random() * characters.length);
    password.push(characters[randIndex]);
  }
  return password.join("");
}

console.log(generateRandomPassword(15));
console.log(generateRandomPassword(15));

// button

const generatePasswordBtn = document.getElementById("generateBtn");

// outputs
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

generatePasswordBtn.addEventListener("click", () => {
  output1.textContent = generateRandomPassword(15);
  output2.setAttribute("data-clipboard-text", output1.textContent);
  output2.textContent = generateRandomPassword(15);
  output2.setAttribute("data-clipboard-text", output2.textContent);
});

output1.addEventListener("click", async () => {
  let originalPassword = output1.textContent;
  try {
    await navigator.clipboard.writeText(originalPassword);
    output1.innerText = "Copied!";
    setTimeout(() => {
      output1.innerText = originalPassword;
    }, 3000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});

output2.addEventListener("click", async () => {
  let originalPassword = output2.textContent;
  try {
    await navigator.clipboard.writeText(originalPassword);
    output2.innerText = "Copied!";
    setTimeout(() => {
      output2.innerText = originalPassword;
    }, 3000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});
