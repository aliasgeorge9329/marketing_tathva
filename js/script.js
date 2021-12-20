$(function () {
  var swiper = new Swiper(".carousel-gallery .swiper-container", {
    effect: "slide",
    speed: 900,
    slidesPerView: 4,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".carousel-gallery .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      // when window width is <= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  }); /*http://idangero.us/swiper/api/*/
});

var navbar = $(".navbar");
$(window).resize(function () {
  if (window.innerWidth <= 600) navbar.addClass("fixed-top");
  else navbar.removeClass("fixed-top");
});
// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});
