var mybutton = document.getElementById("myBtn");
let line = document.querySelector(".solid");
let openbtn = document.querySelector(".openbtn");
let sidebar = document.querySelector(".sidebar");

window.addEventListener("load", () => {
  let savedTheme = localStorage.getItem("theme");
  let i;
  document.getElementById("loader").style.display = "none";

  document.getElementById("load").style.display = "none";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    console.log("theme loaded");
  }
  document.getElementById("heading-intro").classList.add("slide-in");
  typeWriter();
  lineEffect();
});

window.onscroll = function () {
  scrollFunction();
};

function changeTheme() {
  const root = document.documentElement;
  root.classList.toggle("dark-mode");

  // Save current mode to localStorage
  if (root.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav() {
  document.getElementsByClassName("nav-menu")[0].style.display = "flex";
  document.getElementsByClassName("overlay")[0].style.display = "block";
  document.body.style.overflow = "hidden";
  openbtn.style.display = "none"
  sidebar.style.display = "none"
}

function closeNav() {
  document.getElementsByClassName("nav-menu")[0].style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
  document.body.style.overflow = "";
  openbtn.style.display = "block"
  sidebar.style.display = "flex"
}

var subheading = document.querySelector(".subheading");
var index = 0;
var duration = 20;
var text = subheading.textContent;
subheading.textContent = "";

function typeWriter() {
  if (index < text.length) {
    subheading.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, duration);
  }
}

function lineEffect() {
  line.style.width = "100%";
  setTimeout(lineEffect, duration);
}
