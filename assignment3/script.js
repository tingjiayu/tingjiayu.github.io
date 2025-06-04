// The flipbook contains a cover and five pages, each with a vertical video, a location, and a caption.
// Navigation is handled through left/right arrow buttons and interaction is click-based
// The first page is a cover page, which displays only a title and no video.
// The following five pages contain the actual travel content with videos, captions, and locations.
const pages = [
  {
    //this is the first page, only shows the title, no video, location or description.
    isCover: true,
    text: "Holiday Memories",
  },
  //for the following five pages:
  {
    video: "lake.MOV",
    text: "The most beautiful lake view was seen on the way! So lucky!",
    location: "Queenstown, New Zealand",
  },
  {
    video: "sunset.MOV",
    text: "One day by chance, I came across a very beautiful sunset on the road.",
    location: "Melbourne, Australia",
  },
  {
    video: "Korea.MOV",
    text: "I took a portrait with a friend on the street and met a very nice person.",
    location: "Seoul, South Korea",
  },
  {
    video: "Tokyo.MOV",
    text: "On the way to the airport in a hurry, I was lucky enough to catch a glimpse of the pink sunset.",
    location: "Tokyo, Japan",
  },
  {
    video: "cat.MOV",
    text: "I happened to capture a photo of the kitten looking at the camera.",
    location: "At home, China",
  },
];

let currentPage = 0;
const book = document.getElementById("book");
// This function updates the page content based on the `currentPage` index
function updatePage() {
  const video = document.getElementById("video");
  const audio = document.getElementById("music");
  const caption = document.getElementById("caption");
  const location = document.getElementById("location");
  const title = document.getElementById("diaryTitle");

  const page = pages[currentPage];
  // Handle the cover page separately — no video or location shown
  // for the cover page
  if (page.isCover) {
    video.style.display = "none";
    audio.pause();
    caption.textContent = "";
    location.textContent = "";
    title.style.display = "block";
    title.textContent = page.text;
    return;
  }

  // for the five normal pages, populate video and text fields
  video.style.display = "block";
  video.src = page.video;
  audio.src = page.audio;
  caption.textContent = page.text;
  location.textContent = page.location;
  title.style.display = "none";
  // ensures video restarts on each page
  video.play();
}
//These two functions handle navigation
//For the page-turning function,
//I have also added some animation effects, which can make the transitions more natural.
function nextPage() {
  if (currentPage < pages.length - 1) {
    book.classList.add("page-flip");
    setTimeout(() => {
      currentPage++;
      updatePage();
      book.classList.remove("page-flip");
    }, 300);
  }
}

function prevPage() {
  if (currentPage > 0) {
    book.classList.add("page-flip");
    setTimeout(() => {
      currentPage--;
      updatePage();
      book.classList.remove("page-flip");
    }, 300);
  }
}

//This was my initial way of writing "mute"/" unmute ", but I found that it didn't work on the website, so I turned to ChatGPT for help.

//const muteUnmuteButton = document.querySelector("#mute-unmute-button");
//console.log(muteUnmuteButton);

//muteUnmuteButton.addEventListener("click", toggleAudio);

// const muteUnmuteImg = document.querySelector("#mute-unmute-img");
// console.log(muteUnmuteImg);

// function toggleAudio() {
//   if (myVideo.muted) {
//     myVideo.muted = false;
//     muteUnmuteImg.src =
//       "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
//   } else {
//     myVideo.muted = true;
//     muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
//   }

//Set the global background music to mute/unmute.
//It adopts a very simple and clear way of clicking to mute. Users can play or mute at any time.
function toggleBGM() {
  const bgm = document.getElementById("bgm");
  const icon = document.getElementById("mute-unmute-img");

  if (bgm.muted) {
    bgm.muted = false;
    icon.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    bgm.muted = true;
    icon.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
// Autoplay background music only after the first click
window.addEventListener(
  "click",
  () => {
    const bgm = document.getElementById("bgm");
    if (bgm && bgm.paused) {
      bgm.play();
    }
  },
  { once: true }
);

// Initialize the first page
updatePage();
