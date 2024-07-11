const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const nav_header = document.querySelector("nav .link");

menuIcon.addEventListener("click", function () {
  nav_header.classList.add("active");
});

closeIcon.addEventListener("click", function () {
  nav_header.classList.remove("active");
});

function audioPlayer() {
  const player = document.getElementById("player");
  const progress = document.getElementById("progress");
  const playBtn = document.getElementById("playIcon");
  const bgColor = document.querySelector(".progress-bar");
  const currentTimeDisplay = document.getElementById("current"); // Assuming 'current' is the element displaying the current time

  playBtn.addEventListener("click", () => {
    player.paused ? player.play() : player.pause();
  });

  player.onplay = () => {
    playBtn.classList.remove("uil-play");
    playBtn.classList.add("uil-pause");
  };

  player.onpause = () => {
    playBtn.classList.add("uil-play");
    playBtn.classList.remove("uil-pause");
  };

  player.ontimeupdate = () => {
    const ct = player.currentTime;
    const duration = player.duration;
    const prog = Math.floor((ct * 100) / duration);

    const minutes = Math.floor(ct / 60);
    const seconds = Math.floor(ct % 60);
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Update time display if 'current' element exists
    if (currentTimeDisplay) {
      currentTimeDisplay.textContent = formattedTime;
    }

    // Update progress bar if 'progress' element exists
    if (progress) {
      progress.style.setProperty("--progress", `${prog}%`);

      // Apply linear gradient background color to bgColor element
      bgColor.style.background = `linear-gradient(to right, #00eaff ${prog}%, #072340 ${prog}%)`;
    }
  };

  player.onended = () => {
    // Reset bgColor background color when the audio/video ends
    bgColor.style.background = "#072340";

    // Reset time display to '0:00'
    if (currentTimeDisplay) {
      currentTimeDisplay.textContent = "0:00";
    }
  };
}
audioPlayer();

// Remove the topelementsAdded variable
window.addEventListener("load", function () {
  addTopElementClass();
});

window.addEventListener("scroll", function () {
  addTopElementClass();
});

function addTopElementClass() {
  let elements = document.querySelectorAll(".top-up");
  elements.forEach((element) => {
    let elementTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (elementTop <= windowHeight * 0.9 && elementTop >= 10) {
      element.classList.add("topelements");
    }
  });

  let elementst = document.querySelectorAll(".left-up");
  elementst.forEach((element) => {
    let elementTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (elementTop <= windowHeight * 0.9 && elementTop >= 10) {
      element.classList.add("leftelements");
    }
  });

  let elementste = document.querySelectorAll(".right-up");
  elementste.forEach((element) => {
    let elementTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (elementTop <= windowHeight * 0.9 && elementTop >= 10) {
      element.classList.add("rightelements");
    }
  });

  let elementstf = document.querySelectorAll(".left-up-in");
  elementstf.forEach((element) => {
    let elementTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (elementTop <= windowHeight * 0.9 && elementTop >= 10) {
      element.classList.add("leftelementsin");
    }
  });

  let elementstey = document.querySelectorAll(".right-up-in");
  elementstey.forEach((element) => {
    let elementTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (elementTop <= windowHeight * 0.9 && elementTop >= 10) {
      element.classList.add("rightelementsin");
    }
  });
}

var form = document.getElementById("form");

// attach event listener
form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    Email.send({
      SecureToken :"1ef95311-61a5-45e3-a4c4-5a9bc7d54718",
      To: "manjhipiojeet@gmail.com",
      From: "manjhipiojeet@gmail.com",
      Subject: document.getElementById('name').value+': has contacted you on you portfolio',
      Body: "email: <h3>"+document.getElementById('email').value+"</h3><br> message : <h2>" +document.getElementById('textarea').value ,
    })
  },
  true
);


var preloader = document.getElementById("preloader");

function Mypreloader() {
  preloader.style.display = 'none';
}