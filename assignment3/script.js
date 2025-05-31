const pages = [
  {
    isCover: true,

    text: "Holiday Memories",
    location: "",
  },
  {
    video: "lake.MOV",
    text: "The most beautiful lake view was seen on the way! So lucky!",
    location: "Queenstown, New Zealand",
  },
  {
    video: "sunset.MOV",

    text: "Café alleyway in Melbourne.",
    location: "Melbourne, Australia",
  },
  {
    video: "Korea.MOV",
    audio: "audio/page3.mp3",
    text: "Rainy streets of Seoul.",
    location: "Seoul, South Korea",
  },
  {
    video: "Tokyo.MOV",
    audio: "audio/page4.mp3",
    text: "Sunset by the Venice canals.",
    location: "Venice, Italy",
  },
  {
    video: "cat.MOV",
    audio: "audio/page5.mp3",
    text: "A memory made in silence.",
    location: "Somewhere in between",
  },
];

let currentPage = 0;
const book = document.getElementById("book");

function updatePage() {
  const video = document.getElementById("video");
  const audio = document.getElementById("music");
  const caption = document.getElementById("caption");
  const location = document.getElementById("location");
  const title = document.getElementById("diaryTitle");

  const page = pages[currentPage];

  // 封面页处理
  if (page.isCover) {
    video.style.display = "none";
    audio.pause();
    caption.textContent = "";
    location.textContent = "";
    title.style.display = "block";
    title.textContent = page.text;
    return;
  }

  // 正常页面
  video.style.display = "block";
  video.src = page.video;
  audio.src = page.audio;
  caption.textContent = page.text;
  location.textContent = page.location;
  title.style.display = "none";

  video.play();
  audio.play();
}

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

updatePage();
