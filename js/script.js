var navbar = $(".navbar");
$(window).resize(function () {
  if (window.innerWidth <= 600) navbar.addClass("fixed-top");
  else navbar.removeClass("fixed-top");

  if (window.innerWidth <= 1200) $(".col-xl-5").addClass("order-last");
  else $(".col-xl-5").removeClass("order-last");
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
