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
