const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// here is my logic for playing the video
// first i am fetching the right play button
const playButton = document.querySelector("#play-button");
console.log(playButton);
// playing sound on click
playButton.addEventListener("click", playAudio);

// my play logic
function playAudio() {
  myVideo.play();
}
//------------------------------------------------------

//------------------------------------------------------

// here is my logic for playing the video
// first i am fetching the right play button
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// playing video on click
pauseButton.addEventListener("click", pauseAudio);

// my pause logic
function pauseAudio() {
  myVideo.pause();
}

// here is my logic for playing the video
// first i am fetching the right play button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);
// playing video on click
playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// my pause logic
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}
//--------------------------------------------------------------------
