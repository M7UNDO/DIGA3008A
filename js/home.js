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

window.addEventListener("scroll", function(){
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;
    
    const r1 = Math.round(63 + (70 - 63) * scrollPercent);  
    const g1 = Math.round(94 + (252 - 94) * scrollPercent); 
    const b1 = Math.round(251 + (179 - 251) * scrollPercent);
    const r2 = Math.round(70 + (63 - 70) * scrollPercent);  
    const g2 = Math.round(252 + (94 - 252) * scrollPercent); 
    const b2 = Math.round(179 + (251 - 179) * scrollPercent); 

    const color1 = `rgba(${r1}, ${g1}, ${b1}, 1)`;
    const color2 = `rgba(${r2}, ${g2}, ${b2}, 1)`;

    document.body.style.background = `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`;

   
})

window.addEventListener("load", function(){
  document.getElementById("heading-intro").classList.add("slide-in");
});

