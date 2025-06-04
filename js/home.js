const root = document.documentElement

const siteColour1 = getComputedStyle(root).getPropertyValue('--site-color-1');
const siteColour2 = getComputedStyle(root).getPropertyValue('--site-color-2');
const siteColour3 = getComputedStyle(root).getPropertyValue('--site-color-3');

let menuButton = document.querySelector(".menuButton");

//menuButton.style.transition = "background-color 0.3s ease, color 0.3s ease";
menuButton.style.transition = "all 0.5s ease 0s";

menuButton.addEventListener("mouseover", function(){

   menuButton.style.backgroundColor = siteColour1;
   menuButton.style.color = siteColour3;

})

menuButton.addEventListener("mouseout", function(){

   menuButton.style.backgroundColor = "";
   menuButton.style.color = "";

})


window.addEventListener("load", function(){
  document.getElementById("heading-intro").classList.add("slide-in");
});


const quote = document.getElementById("quote")
const author = document.getElementById("author")
const authorImage = document.getElementById("author-image")
const api_url = "https://api.quotable.io/random"

async function getQuote(url){

   const response = await fetch(url);
   var data = await response.json();
   console.log(data)
   
   quote.innerHTML = data.content;
   author.innerHTML = "~ "  + data.author;
}

getQuote(api_url);
