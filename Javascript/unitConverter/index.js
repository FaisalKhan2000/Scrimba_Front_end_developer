/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById("search");
const convertBtn = document.getElementById("convertBtn");

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

// Program logic

function convert() {
  let inputValue = input.value;

  //   Length Meter and feet
  //   1 meter = 3.281 feet
  let feet = (Number(inputValue) * 3.28084).toFixed(3);
  let meter = (Number(inputValue) / 3.28084).toFixed(3);

  length.innerHTML = `<p>${inputValue} meters = ${feet}  feet | ${inputValue}  feet = ${meter}  meters </p>`;
  //   Volume Liters and Gallons
  //   1 liter = 0.264 gallon
  let gallon = (Number(inputValue) * 0.264172).toFixed(3);
  let liter = (Number(inputValue) / 0.264172).toFixed(3);

  volume.innerHTML = `<p>${inputValue} liters = ${gallon}  gallons | ${inputValue}  gallons = ${liter}  liters </p>`;
  //   Mass Kilograms and Pounds
  //   1 kilogram = 2.204 pound
  let pound = (Number(inputValue) * 2.20462).toFixed(3);
  let kg = (Number(inputValue) / 2.20462).toFixed(3);

  mass.innerHTML = `<p>${inputValue} kilos = ${pound}  pounds | ${inputValue}  pounds = ${kg}  kilos </p>`;
}

convertBtn.addEventListener("click", convert);
