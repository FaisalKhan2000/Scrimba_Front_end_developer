const darkModeBtn = document.getElementById("light-btn");

darkModeBtn.addEventListener("click", function () {
  document.getElementById("background").classList.toggle("background-light");
  document.getElementById("wrapper").classList.toggle("wrapper-light");
  document.getElementById("logo").classList.toggle("logo-light");
  document.getElementById("logo-2").classList.toggle("logo-2-light");
  document.getElementById("light-btn").classList.toggle("dark-btn");
  document.getElementById("search-bar").classList.toggle("search-bar-light");
  document
    .getElementById("search-input")
    .classList.toggle("search-input-light");
  document
    .getElementById("main-content")
    .classList.toggle("main-content-light");
  document
    .getElementById("profile-name")
    .classList.toggle("profile-name-light");
  document
    .getElementById("profile-creation-date")
    .classList.toggle("profile-creation-date-light");
  document.getElementById("bio").classList.toggle("bio-light");
  document
    .getElementById("component-2-3")
    .classList.toggle("component-2-3-light");
  document.querySelectorAll(".number").forEach(function (el) {
    el.classList.toggle("number-light");
  });
  document.querySelectorAll(".text").forEach(function (el) {
    el.classList.toggle("text-light");
  });
  document.querySelectorAll(".text-2").forEach(function (el) {
    el.classList.toggle("text-2-light");
  });

  document
    .getElementById("location-icon-image")
    .classList.toggle("location-icon-image-light");
  document
    .getElementById("link-icon-image")
    .classList.toggle("link-icon-image-light");
  document
    .getElementById("twitter-icon-image")
    .classList.toggle("twitter-icon-image-light");
  document
    .getElementById("org-icon-image")
    .classList.toggle("org-icon-image-light");
});
