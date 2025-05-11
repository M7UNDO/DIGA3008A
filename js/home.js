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