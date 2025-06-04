let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
let line = document.querySelector(".solid");

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
  
});


console.log("main js loaded");

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
  document.getElementsByClassName("nav-menu")[0].style.right = "0";
  document.getElementsByClassName("overlay")[0].style.display = "block";
   document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementsByClassName("nav-menu")[0].style.right = "-120%";
  document.getElementsByClassName("overlay")[0].style.display = "none";
   document.body.style.overflow = "";
}

const subheading = document.querySelector(".subheading");
const blogssubheading = document.querySelector(".blog-index-subheading");
let text = subheading.textContent;
subheading.textContent = "";

let index = 0;
function typeWriter() {
  if (index < text.length) {
    subheading.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 20);
  }
}

window.addEventListener("load", typeWriter);

function lineEffect() {
  line.style.width = "80%";

  setTimeout(lineEffect, 20);
}

window.addEventListener("load", lineEffect);





let projectImage = document.getElementsByClassName("project-image");
