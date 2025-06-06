let wireFrameIndex = [1, 1];
let wireFrameId = ["initial-wireframe", "design-elements-box"];
let dotId = ["dot", "dots"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((wireFrameIndex[no] += n), no);
}

function currentSlide(n, no) {
  showSlides((wireFrameIndex[no] = n), no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(wireFrameId[no]);
  /*let dot = document.getElementsByClassName("dot");*/
  let dot = document.getElementsByClassName(dotId[no]);

  if (n > slides.length) {
    wireFrameIndex[no] = 1;
  }

  if (n < 1) {
    wireFrameIndex[no] = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" activeDot", "");
  }

  slides[wireFrameIndex[no] - 1].style.display = "flex";
  dot[wireFrameIndex[no] - 1].className += " activeDot";
}

var phoneScreen = window.matchMedia("(max-width: 600px)");
var tabletScreen = window.matchMedia("(max-width: 768px)");
var laptopScreen = window.matchMedia("(max-width: 992px)");

function openTable() {
  if (phoneScreen.matches) {
    document.querySelector(".sidebar").style.width = "40%";
  } 
  else if(tabletScreen.matches){
    document.querySelector(".sidebar").style.width = "30%";
  }
  else if(laptopScreen.matches){
    document.querySelector(".sidebar").style.width = "20%";
  }
  else{
    document.querySelector(".sidebar").style.width = "20%";
  }
  let openbtn = document.getElementsByClassName("openbtn")[0];
  openbtn.style.display = "none";

}

function closeTable() {
  let openbtn = document.getElementsByClassName("openbtn")[0];
  openbtn.style.display = "block";
  document.querySelector(".sidebar").style.width = "0";
}

const headings = document.querySelectorAll("h2[id]"); // Tracks only <h2> with IDs
const navLinks = document.querySelectorAll("#mySidebar a[href^='#']");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        navLinks.forEach((link) => link.classList.remove("active"));


        const id = entry.target.id;
        const activeLink = document.querySelector(`#mySidebar a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.6,
  }
);

headings.forEach((h) => observer.observe(h));
