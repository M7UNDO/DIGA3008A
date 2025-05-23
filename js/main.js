const root = document.documentElement

const siteColour1 = getComputedStyle(root).getPropertyValue('--site-color-1');
const siteColour2 = getComputedStyle(root).getPropertyValue('--site-color-2');
const siteColour3 = getComputedStyle(root).getPropertyValue('--site-color-3');

let menuButton = document.querySelector(".menuButton");

//menuButton.style.transition = "background-color 0.3s ease, color 0.3s ease";
menuButton.style.transition = "all 0.5s ease 0s";

menuButton.addEventListener("mouseover", function(){

   menuButton.style.backgroundColor = siteColour1;
   menuButton.style.color = "white";

})

menuButton.addEventListener("mouseout", function(){

   menuButton.style.backgroundColor = "";
   menuButton.style.color = "";

})


console.log("main.js loaded");
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0; 
}

function openNav(){
    document.getElementsByClassName("nav-menu")[0].style.width = "100%";
    document.getElementsByClassName("closeBtn")[0].style.display = "block";
}

function closeNav(){
    document.getElementsByClassName("nav-menu")[0].style.width = "0%";
    document.getElementsByClassName("closeBtn")[0].style.display = "none"

}


const subheading = document.querySelector(".subheading");
const blogssubheading = document.querySelector(".blog-index-subheading");
const text = subheading.textContent;
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
  let line = document.querySelector(".solid"); //*remeber class selector
  if (line) {
    line.style.width = "0";
    line.style.borderColor = "red";
    console.log("Line loaded");
  } else {
    console.warn("No element with class 'solid' found.");
  }
}

window.addEventListener("load", lineEffect);

window.addEventListener("load", function(){
   let i;
   document.getElementById("heading-intro").classList.add("slide-in");
   let aboutHeader = document.getElementsByClassName("p-name");

   for(i = 0; i<aboutHeader.length; i++){
    aboutHeader[i].classList = aboutHeader[i].classList.replace("slide-in", "");
   }

   aboutHeader.classList += "slide-in";


})

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});


let projectImage = document.getElementsByClassName("project-image");


