function toggleAnswer(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "flex";
  } else {
    answer.style.display = "none";
  }
}
const navBar = document.getElementById("navBar");

function changeBackground() {
  this.scrollY > 200
    ? (navBar.style.backdropFilter = "blur(30px)")
    : this.scrollY < 200
    ? (navBar.style.backdropFilter = "blur(30px)")
    : (navBar.style.backdropFilter = "blur(0px");
}

window.addEventListener("scroll", changeBackground);

const testimony = document.getElementById("#testimony");
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("testimonybox");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

function toggleMenu() {
  navBar.classList.toggle("responsive");
}
