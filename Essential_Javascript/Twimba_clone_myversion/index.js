import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// const tweetBtn = document.getElementById("tweet-btn");

// tweetBtn.addEventListener("click", function () {
//   console.log(tweetInput.value);
//   tweetInput.value = ``;
// });

// Handling all buttons
document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
    // console.log(e.target.dataset.like);
  } else if (e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet);
    // console.log(e.target.dataset.retweet);
  } else if (e.target.dataset.reply) {
    handleReplyClick(e.target.dataset.reply);
  } else if (e.target.id === "tweet-btn") {
    handleTweetBtnClick();
  }
});

function handleLikeClick(tweetId) {
  const targetweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetweetObj.isLiked) {
    targetweetObj.likes--;
  } else {
    targetweetObj.likes++;
  }

  targetweetObj.isLiked = !targetweetObj.isLiked;
  render();

  //   console.log(targetweetObj);
}

// Handle Retweet
function handleRetweetClick(tweetId) {
  const targetweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  //   console.log(targetweetObj);

  if (targetweetObj.isRetweeted) {
    targetweetObj.retweets--;
  } else {
    targetweetObj.retweets++;
  }

  targetweetObj.isRetweeted = !targetweetObj.isRetweeted;
  render();
}

// handling replies
function handleReplyClick(replyId) {
  document.getElementById(`replies-${replyId}`).classList.toggle("hidden");
}

// handling tweet btn click
function handleTweetBtnClick() {
  const tweetInput = document.getElementById("tweet-input");
  //   console.log(tweetInput.value);
  if (tweetInput.value) {
    tweetsData.unshift({
      handle: `@Scrimba`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4(),
    });
    render();
    tweetInput.value = "";
  }
}

function getFeedHtml() {
  let feedHtml = ``;

  tweetsData.forEach((tweet) => {
    // Like Icon Change
    let likeIconClass = "";
    if (tweet.isLiked) {
      likeIconClass = "liked";
    }

    // retweet Icon Change
    let retweetIconClass = "";
    if (tweet.isRetweeted) {
      retweetIconClass = "retweeted";
    }

    // replies
    let repliesHtml = "";
    if (tweet.replies.length > 0) {
      tweet.replies.forEach(function (reply) {
        repliesHtml += `
            <div class="tweet-reply">
                <div class="tweet-inner">
                    <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
            </div>`;
      });
    }

    // console.log(tweets);
    feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"  data-reply=${tweet.uuid}></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-regular fa-heart ${likeIconClass}" data-like=${tweet.uuid}></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet=${tweet.uuid}></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div> 
</div>`;
  });

  return feedHtml;
}

function render() {
  const feed = document.getElementById("feed");
  const feedHtml = getFeedHtml();
  feed.innerHTML = feedHtml;
}

render();
