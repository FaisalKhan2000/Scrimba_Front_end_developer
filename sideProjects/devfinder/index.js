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

// API Logic
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const profileImage = document.getElementById("profile-img");
const profileName = document.getElementById("profile-name");
const githubProfileId = document.getElementById("github-profile-id");
const profileCreationDate = document.getElementById("profile-creation-date");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const loc = document.getElementById("location");
const blog = document.getElementById("blog");
const twitter = document.getElementById("twitter");
const org = document.getElementById("org");
let searchValue;
searchInput.addEventListener("input", (event) => {
  searchValue = event.target.value;
});

searchBtn.addEventListener("click", function () {
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      profileImage.innerHTML = `
      <img
          src="${data.avatar_url}"
          width="117px"
          height="117px"
          alt="profile image"
      />`;
      profileName.textContent = data.name;
      githubProfileId.textContent = data.login;

      const dateString = data.created_at;
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);
      // console.log(`Joined ${formattedDate}`);

      profileCreationDate.textContent = formattedDate;
      bio.textContent = data.bio ? data.bio : "This profile has no bio";
      repos.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      loc.textContent = data.location ? data.location : "value not found";
      blog.textContent = data.blog ? data.blog : "value not found";
      twitter.textContent = data.twitter_username
        ? data.twitter_username
        : "value not found";
      org.textContent = data.company ? data.company : "value not found";
    })
    .catch((error) => {
      console.error(error);
    });
});
