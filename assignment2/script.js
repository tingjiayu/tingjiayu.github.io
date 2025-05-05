//I chose to create the code related to music videos.
//It includes functions such as playing and pausing videos, fast-forwarding, collecting videos, changing modes, a custom “save to favourites” and adjusting volume.
//The goal was to build a calm, visually gentle, and easy-to-use player tailored for short music video experiences.
//The scenario I envision is to provide users with a good experience both during the day and at night.
//So it includes the switch mode.
//Visually, the entire page is very simple, enhancing the usability and comfort of users.
//It is suitable for passive and immersive viewing rather than active navigation.
//The layout uses Flexbox response.
//I have set a certain distance between each button, making the page look clearer.
//Each button is also designed with color change, which distinguishes between clicking and hovering.
//Enhance interactivity with the hovering state without leaving users at a loss.
//Code readability and modularization
//All icons used are from Icons8
const myVideo = document.querySelector("#my-video");
const progressBar = document.querySelector("#progress-bar");

//Update the progress bar as the video plays
myVideo.addEventListener("timeupdate", updateProgress);
function updateProgress() {
  const duration = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = duration + "%";
}

//for the play and pause button
//The play/pause functionality toggles between two Icons8 icons,
//offering immediate visual feedback and reducing ambiguity for users.
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);
playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlayback() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

//for the fast forward button +5s
//The fast-forward button adds 5 seconds to the current playback time,
//allowing users to skip ahead quickly in a more controlled way.
const fastForwardButton = document.querySelector("#fast-forward-button");
fastForwardButton.addEventListener("click", () => {
  myVideo.currentTime += 5;
});

//I chose to add the function of switch mode.
//The purpose is to make the music video suitable for viewing both during the day and at night.

//change the mode
//The theme toggle button dynamically switches between a light and dark mode,
//allowing users to watch comfortably in different lighting environments.
//The button text updates accordingly to make its state always clear.
const themetoggle = document.querySelector("#theme-toggle-button");
themetoggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
  themetoggle.textContent = document.body.classList.contains("night")
    ? "Switch to day mode"
    : "Switch to night mode";
});

//for the save button
//The save button simulates a “favourite” interaction:
//when clicked, it shows a floating message using timed class toggling.
//This provides positive feedback without requiring a back-end database.
const saveButton = document.querySelector("#save-button");
const savePopup = document.querySelector("#save-popup");

saveButton.addEventListener("click", () => {
  saveButton.classList.add("saved");
  savePopup.classList.add("show");
  savePopup.textContent = "⭐ Added to your favourites!";
  setTimeout(() => {
    savePopup.classList.remove("show");
  }, 1500);
});
//for checking the volume-slider
//for the volume
//Instead of mute/unmute toggling
//this version gives the user fine-grained control over audio levels via a styled range slider.
const volumeSlider = document.querySelector("#volume-slider");
volumeSlider.addEventListener("input", () => {
  myVideo.volume = volumeSlider.value;
});

//All interactive elements are built to respond instantly and visually, enhancing user engagement
