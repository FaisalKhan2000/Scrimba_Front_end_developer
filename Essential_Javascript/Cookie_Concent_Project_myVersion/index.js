const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const acceptTerms = document.getElementById("accept");
const declineBtn = document.getElementById("decline");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

modal.style.display = "none";

setTimeout(function () {
  modal.style.display = "block";
}, 1500);

const consentForm = document.getElementById("consent-form");
const modalcontainer = document.getElementById("modal-container");

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");
  modalcontainer.innerHTML = `
    
            <div id="center-text">
                <img src="images/loading.svg" class="loading">
                <p id="upload-text">Uploading your data to the dark web...</p>
            </div>
 
    `;

  setTimeout(function () {
    modalcontainer.innerHTML = `
        <div id="center-text">
            <p id="hacked-text">${fullName} you have been hacked!</p>
            <img src="./images/smile.gif">
        </div>
`;

    modalCloseBtn.disabled = false;
  }, 3000);
});

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("modal-btns-reverse");
});
