let wireFrameIndex = 1; //tracking what slide is currently being displayed, setting it to 1 by default
showSlides(wireFrameIndex); //Calling the function display the first slide immediately when my pages loads


function plusSlides(n) {
  showSlides(wireFrameIndex += n); //when button is pressed wireframe equals the next/previous in the index essentially wireframe + n = wireframe or wireframe + -n
}

function currentSlide(n) {
  showSlides(wireFrameIndex = n); //Triggered when clicking on a dot, essentia setting wireframe index to the current dot number
}

function showSlides(n) {
  let i; //Variable i is declared to use in the following loops
  let slides = document.getElementsByClassName("initial-wireframe");
  let dot = document.getElementsByClassName("dot");
  if (n > slides.length) {
    wireFrameIndex = 1; //Simply put it jumps to one if we go to the last slide(5) and press next but there is no next...
  }

  if (n < 1) {
    wireFrameIndex = slides.length; //Jumps to the last slide if we press previous when on the first slide, in this case slides.length = 5
  }

  for (i = 0; i < slides.length; i++) {
    //*note to self: its semi colons not commas in a for loop
    slides[i].style.display = "none"; //Loop: Hiding all the slides before I pick one
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" activeDot", ""); //Remmoves the activeDot class name to clear the selction and give its original className;
  }
  //Doing this because Arrays start at 0;
  slides[wireFrameIndex - 1].style.display = "flex"; //Displays the selected slide (wireFrameIndex - 1, because arrays are 0-based).
  dot[wireFrameIndex - 1].className += " activeDot"; //Adds the "activeDot" class to the corresponding dot to highlight it.
}


let finalWireframeIndex = 1;
showSlides2(finalWireframeIndex);

function plusSlidess(n){
  showSlides2(finalWireframeIndex += n);
}

function currentSlide2(n){
  showSlides2(finalWireframeIndex = n);
}

function showSlides2(n){
  let i;
  let slides = document.getElementsByClassName("design-elements-box");
  let dots = document.getElementsByClassName("dots");

  if( n > slides.length){
    finalWireframeIndex = 1;
  }

  if( n < 1){
    finalWireframeIndex = slides.length;
  }

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for(i = 0; i <dots.length; i++){
    dots[i].className = dots[i].className.replace(" dotActive", "");
  }
  slides[finalWireframeIndex -1].style.display = "flex";
  dots[finalWireframeIndex -1].className += " dotActive";


}