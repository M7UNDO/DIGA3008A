



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

