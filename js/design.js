
let wireFrameIndex = [1,1];
let wireFrameId = ["initial-wireframe", "design-elements-box"];
let dotId = ["dot", "dots"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no){
   showSlides(wireFrameIndex[no] += n, no);
}

function currentSlide(n, no){
   showSlides(wireFrameIndex[no] = n, no)
}

function showSlides(n, no){
  let i;
  let slides = document.getElementsByClassName(wireFrameId[no]);
  /*let dot = document.getElementsByClassName("dot");*/
  let dot = document.getElementsByClassName(dotId[no]);

  if(n > slides.length){
    wireFrameIndex[no] = 1;

  }

  if(n < 1){
    wireFrameIndex[no] = slides.length;
  }

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for(i = 0; i < dot.length; i++){
    dot[i].className = dot[i].className.replace( " activeDot", "");
  }

  slides[ wireFrameIndex[no]-1].style.display = "flex";
  dot[wireFrameIndex[no]-1].className += " activeDot";

}

var mediumScreen = window.matchMedia("(max-width: 600px)")


function openTable() {

  if(mediumScreen.matches){
    document.querySelector(".sidebar").style.width = "30%";

  }
  else{

    document.querySelector(".sidebar").style.width = "20%";
  }
  let openbtn = document.getElementsByClassName("openbtn")[0];
  openbtn.style.display = "none";
  
  //document.getElementById("main").style.marginLeft = "100%";
}


function closeTable() {
  let openbtn = document.getElementsByClassName("openbtn")[0];
  openbtn.style.display = "block";
  document.querySelector(".sidebar").style.width= "0";
  //document.getElementById("main").style.marginLeft = "0";
}
