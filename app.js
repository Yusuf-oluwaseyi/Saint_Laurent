let innerCursor = document.querySelector(".inner_cursor");
let outerCursor = document.querySelector(".outer_cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

innerCursor.style.left = `${x}px`;
innerCursor.style.top = `${y}px`;
outerCursor.style.left = `${x}px`;
outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a, strong, #pause, #myAudio"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});

// Audio area
var audio = new Audio("mp3/mixkit-silk-143.mp3")
let playBtn = document.getElementById("myAudio")
let pauseBtn = document.getElementById("pause")
// let audio = document.getElementById("myAudio").addEventListener('click', playAudioLoop);
playBtn.addEventListener("click", playAudio)
pauseBtn.addEventListener("click", pauseAudio)

    function playAudio() {
        playBtn.classList.add("hidden")
        pauseBtn.classList.remove("hidden")
        audio.play();
        audio.addEventListener("ended",  () =>{
            audio.currentTime = 0;
            audio.play();
        });
    }

    function pauseAudio(){
        audio.pause()
        pauseBtn.classList.add("hidden")
        playBtn.classList.remove("hidden")
    }


    // Eyes functions
    document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

// loader page
window.addEventListener("load", function() {
    const loader = document.querySelector('.loader');
        loader.classList.add("loader--hidden");

        loader.addEventListener("transitionend", function () {
        document.body.removeChild(".loader");
    })
});

// Hamburger for mobile
let hamburger = document.querySelector(".menu_btn");
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("menu_btn_open")
    })
function toggle() {
    const menu = document.getElementById("tog");
    if (tog.style.display == "block") {
        tog.style.display = "none";
    } else {
        tog.style.display = "block";
    }
    
    
}