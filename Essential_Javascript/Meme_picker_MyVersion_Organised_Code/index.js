import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

emotionRadios.addEventListener("change", highlightCheckedOption);

memeModalCloseBtn.addEventListener("click", closeModal);

getImageBtn.addEventListener("click", renderCat);

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document
    .getElementById(e.target.value)
    .parentElement.classList.add("highlight");
}

function closeModal() {
  memeModal.style.display = "none";
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

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

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
    return matchingCatsArray;
  }
}

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

// A render function which stores the output generated from the getEmotionsArray function
function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);

  let radioItems = ``;
  emotions.forEach((emotion) => {
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
renderEmotionsRadios(catsData);
