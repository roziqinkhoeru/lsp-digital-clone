// owl carousel
$(document).ready(function () {
  $("#videos-doc.owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// owl carousel
$(document).ready(function () {
  $("#testimoni.owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
