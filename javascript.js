/* NAVBAR ACTIVE BUTTONS */

function toggleNavButton() {
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var btnContainer = document.getElementById("mytopnav");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* MODALS */

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

/* BLOG WINDOWS */

window.onclick = function(event) {
  if (event.target == myBlog1) {
    document.getElementById("myBlog1").style.display = "none";
  }
  if (event.target == myBlog2) {
    document.getElementById("myBlog2").style.display = "none";
  }
  if (event.target == galleryModal1) {
    document.getElementById("galleryModal1").style.display = "none";
  }
  if(event.target == galleryModal2) {
    document.getElementById("galleryModal2").style.display = "none";
  }
}

/* GALLERIES */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(galleryNum, n) {
  showSlides(galleryNum, slideIndex += n);
}

function currentSlide(galleryNum, n) {
  showSlides(galleryNum, slideIndex = n);
}

function showSlides(galleryNum, n) {
  var i;
  var slides = document.getElementsByClassName("mySlides" + galleryNum);
  var dots = document.getElementsByClassName("demo" + galleryNum);
  var captionText = document.getElementById("caption" + galleryNum);

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

document.addEventListener('keydown', function(event) { 
  if (event.keyCode == 27) {
      document.getElementById("galleryModal1").style.display = "none";
      document.getElementById("galleryModal2").style.display = "none";
      document.getElementById("myBlog1").style.display = "none";
      document.getElementById("myBlog2").style.display = "none";
  }
});