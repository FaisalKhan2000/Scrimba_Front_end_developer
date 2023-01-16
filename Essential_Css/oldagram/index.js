const posts = [
  {
    id: 1,
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 2,
  },
  {
    id: 2,
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    id: 3,
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let mainContent = document.getElementById("main-content");

posts.forEach((content) => {
  mainContent.innerHTML += `<section>
            <div class="main-header">
            <div class="main-icon">
                <img src=${content.avatar} alt="" />
            </div>
            <div class="name-content">
                <div class="name">${content.name}</div>
                <div class="address">${content.location}</div>
            </div>
            </div>
            <div class="main-content" >
            <img id="likes-container-${content.id}" src=${content.post} alt="" />
            </div>
            <div class="main-footer">
            <div class="footer-content-1">
                <img src="./images/icon-heart.png" id="likes-btn-${content.id}" alt="" />
                <img src="./images/icon-comment.png" alt="" />
                <img src="./images/icon-dm.png" alt="" />
                <div class="footer-content-2" id="likes-count-${content.id}">${content.likes} likes</div>
            </div>

            <div class="footer-content-3" >
                <span class="user-id"> ${content.username} </span> ${content.comment}
            </div>
            </div>
    </section>
    <div id="separator"></div>`;
});

// Increases likes by clicking on the image
const likesContainer1 = document.getElementById("likes-container-1");
const likesContainer2 = document.getElementById("likes-container-2");
const likesContainer3 = document.getElementById("likes-container-3");

likesContainer1.addEventListener("dblclick", function () {
  let count = Number(
    document.getElementById("likes-count-1").innerHTML.split(" ")[0]
  );
  count++;
  document.getElementById("likes-count-1").innerHTML = count + " likes";
});

likesContainer2.addEventListener("dblclick", function () {
  let count = Number(
    document.getElementById("likes-count-2").innerHTML.split(" ")[0]
  );
  count++;
  document.getElementById("likes-count-2").innerHTML = count + " likes";
});

likesContainer3.addEventListener("dblclick", function () {
  let count = Number(
    document.getElementById("likes-count-3").innerHTML.split(" ")[0]
  );
  count++;
  document.getElementById("likes-count-3").innerHTML = count + " likes";
});

// increase likes by clicking on the like button
const likesBtn1 = document.getElementById("likes-btn-1");
const likesBtn2 = document.getElementById("likes-btn-2");
const likesBtn3 = document.getElementById("likes-btn-3");

likesBtn1.addEventListener("click", function () {
  let count = Number(
    document.getElementById("likes-count-1").innerHTML.split(" ")[0]
  );
  count++;
  document.getElementById("likes-count-1").innerHTML = count + " likes";
});
likesBtn2.addEventListener("click", function () {
  let count = Number(
    document.getElementById("likes-count-2").innerHTML.split(" ")[0]
  );
  count++;
  document.getElementById("likes-count-2").innerHTML = count + " likes";
});
likesBtn3.addEventListener("click", function () {
  let count = Number(
    document.getElementById("likes-count-3").innerHTML.split(" ")[0]
  );
  count++;
  document.getElementById("likes-count-3").innerHTML = count + " likes";
});
