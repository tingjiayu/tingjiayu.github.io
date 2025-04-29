const myVideo = document.querySelector("my-video");
console.log(myVideo);

// play pause logic
//fetch the right button to play and pause video
const playPauseButton = document.querySelector("play-pause-button");
console.log(playPauseButton);

//listen to click on this button
playPauseButton.addEventListener("click", togglePlay);

//fetch the image so that we can change the icon
const PlayPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

//run this function when click happens
function togglePlay() {
  if (myVideo.pause || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.pause();
  }
}
//------------------------------------------------------------------

// mute umute logic
//fetch the right button to mute and unmute video
const muteUnmuteButton = document.querySelector("mute-unmute-button");
console.log(muteUnmuteButton);

//listen to click on this button
muteUnmuteButton.addEventListener("click", togglePlay);

//fetch the image so that we can change the icon
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

//run this function when click happens
function togglePlay() {
  if (myVideo.muted) {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    myVideo.muted = false;
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = true;
  }
}
//------------------------------------------------------------------

//myvideo.muted = myVideo.muted == true
//!myVideo.muted = myVideo.muted == false
// - assigning

// mute umute logic
//fetch the right button to mute and unmute video
const fastForwardButton = document.querySelector("fast-forward-button");
console.log(fastForwardButton);

//listen to click on this button
fastForwardButton.addEventListener("click", fastForward);

//run this function when click happens
function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}

//-----------------------------------------------------------------

// stepping logic
//fetch the right button to step video
const step1Button = document.querySelector("step1-button");
console.log(step1Button);

//listen to click on this button
step1Button.addEventListener("click", gotoStep1);

//run this function when click happens
function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("step2-button");
console.log(step2Button);

//listen to click on this button
step2Button.addEventListener("click", gotoStep2);

//run this function when click happens
function gotoStep2() {
  myVideo.currentTime = 43.56;
}
//-------------------------------------------------------------------------

// stepping logic
//fetch the right button to step video
const fullscreenButton = document.querySelector("fullscreen-button");
console.log(fullscreenButton);

myVideo.addEventListener("dblclick", goFullscreen);

//listen to click on this button
fullscreenButton.addEventListener("click", goFullscreen);

//run this function when click happens
function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
//-------------------------------------------------------------------------

// stepping logic
//fetch the right button to step video
const heartButton = document.querySelector("heart-button");
console.log(heartButton);

let likes = 0;

const likesContainer = document.querySelector("#likes");
cosole.log(likesContainer);
//listen to click on this button
heartButton.addEventListener("click", updateLikes);

//run this function when click happens
function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}
//-------------------------------------------------------------------------

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);
function updateProgress() {
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  //console.log(progress);
  progressBar.style.width = progress + "%";
}

const playlist = [{ id: 1, src: 1 }];
//srepping logic
//fetch the right button to step video
const stardusButton = document.querySelector("stardust-vid-button");
console.log(stardusButton);

stardusButton.addEventListener("click", function chooseStardust() {
  chooseVideo(0);
});

const zenscapeButton = document.querySelector("stardust-vid-button");
console.log(stardusButton);

stardusButton.addEventListener("click", function chooseStardust() {
  chooseVideo(0);
});

const musicvidButton = document.querySelector("stardust-vid-button");
console.log(stardusButton);

stardusButton.addEventListener("click", function chooseStardust() {
  chooseVideo(0);
});

function chooseVideo(no) {
  myVideo.src = playlist[no].src;
  myVideo.load();
  myVideo.play();
}

function chooseSrc(src) {
  myVideo.src = src;
  myVideo.load();
  myVideo.play();
}
