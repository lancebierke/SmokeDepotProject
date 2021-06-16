$(function () {
  $("document").ready(function () {
    console.log("ready!");
    $(".carousel").carousel({ interval: 3000, pause: "click" });
    $(".carousel").carousel("cycle");
    
    const indicatorList = [
      ...document.body.getElementsByClassName("indicator"),
    ];
    indicatorList.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        $(".carousel").carousel(index);
      });
    });

    $('.carousel-control-prev').click(() =>$('.carousel').carousel('prev'))
    $('.carousel-control-next').click(() =>$('.carousel').carousel('next'))



    $("#carouselButton").click(function () {
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
      } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
      }
    });

    $("#reserveButton").click(function () {
      $("#reserveModal").modal("show");
    });
    $("#loginButton").click(function () {
      $("#loginModal").modal("show");
    });
  });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
