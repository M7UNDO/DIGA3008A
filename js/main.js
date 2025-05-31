let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
let line = document.querySelector(".solid");



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
    document.getElementsByClassName("nav-menu")[0].style.width = "75%";
    document.getElementsByClassName("closeBtn")[0].style.display = "block";
    document.getElementsByClassName("overlay")[0].style.display = "block";

}

function closeNav(){
    document.getElementsByClassName("nav-menu")[0].style.width = "0%";
    document.getElementsByClassName("closeBtn")[0].style.display = "none"
    document.getElementsByClassName("overlay")[0].style.display = "none";

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
  document.getElementById("load").style.display = "none";
});


let projectImage = document.getElementsByClassName("project-image");


