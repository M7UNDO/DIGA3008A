/*let wireFrameIndex = 1; //tracking what slide is currently being displayed, setting it to 1 by default
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


let finalWireframeIndex = 1; //Make this more dynamiic for the sake of not having multiple indexes
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
*/

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

function openTable() {
  let openbtn = document.getElementsByClassName("openbtn")[0];
  openbtn.style.display = "none";
  document.getElementById("mySidebar").style.width = "25rem";
  document.getElementById("main").style.marginLeft = "25rem";
}


/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeTable() {
  let openbtn = document.getElementsByClassName("openbtn")[0];
  openbtn.style.display = "block";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
