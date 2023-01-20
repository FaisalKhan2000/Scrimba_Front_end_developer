import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

// function which stores all the emotions into an array
function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (const cat of cats) {
    for (const emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

// console.log(getEmotionsArray(catsData));

// A render function which stores the output generated from the getEmotionsArray function
function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);

  let radioItems = ``;
  emotions.forEach((emotion) => {
    // radioItems += `<p> ${emotion} </p>`;
    radioItems += `
    <div class="radio">
        <label for = "${emotion}">${emotion}</label>
        <input
        type="radio"
        id="${emotion}"
        value="${emotion}"
        name = "emotions"
        >
    </div>
    `;
  });

  emotionRadios.innerHTML = radioItems;

  return emotions;
}

console.log(renderEmotionsRadios(catsData));

// Listening for change in emotion radio button and logging out the id
emotionRadios.addEventListener("change", highlightCheckedOption);
function highlightCheckedOption(e) {
  //   console.log(e.target.value);

  const radios = document.getElementsByClassName("radio"); // This will create an array of all elements having the class radio
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }

  // The above line removes higlight class from element

  // This class add highlight class to the element you select
  document
    .getElementById(e.target.value)
    .parentElement.classList.add("highlight");
}

// console.log(emotionRadios);

// getting the value of the radio button selected
getImageBtn.addEventListener("click", renderCat);

function getMatchingCatsArray() {
  // checking if GifOnlyOption is selected or not and storing that into a variable

  if (document.querySelector("input[type='radio']:checked")) {
    const seletedEmotion = document.querySelector(
      "input[type='radio']:checked"
    ).value;
    const isGif = gifsOnlyOption.checked;

    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(seletedEmotion) && cat.isGif;
      }
      return cat.emotionTags.includes(seletedEmotion);
    });

    // console.log(matchingCatsArray);
    return matchingCatsArray;
  }
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  // console.log(catsArray)

  if (catsArray.length === 1) {
    // console.log(catsArray[0]);
    return catsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    // console.log(catsArray[randomNumber]);
    return catsArray[randomNumber];
  }
}

function renderCat() {
  const catObject = getSingleCatObject();

  memeModalInner.innerHTML = `
    <img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >
    `;
  memeModal.style.display = "flex";
}

memeModalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  memeModal.style.display = "none";
}
