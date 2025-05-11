// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openNav(){
    document.getElementsByClassName("nav-menu")[0].style.width = "100%";
    document.getElementsByClassName("closeBtn")[0].style.display = "block";
}

function closeNav(){
    document.getElementsByClassName("nav-menu")[0].style.width = "0%";
    document.getElementsByClassName("closeBtn")[0].style.display = "none"

}