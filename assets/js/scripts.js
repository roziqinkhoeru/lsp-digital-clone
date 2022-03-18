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

// owl carousel
$(document).ready(function () {
  $("#skema.owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// change button carousel index video
$(document).ready(function () {
  $(".testimoni__body .owl-nav button span").remove();
  $(".testimoni__body .owl-nav .owl-prev").append(
    '<i aria-label="Previous" class="fas fa-chevron-left"></i>'
  );
  $(".testimoni__body .owl-nav .owl-next").append(
    '<i aria-label="Next" class="fas fa-chevron-right"></i>'
  );
});

$(document).ready(function () {
  $(".skema__body .owl-nav button span").remove();
  $(".skema__body .owl-nav .owl-prev").append(
    '<i aria-label="Previous" class="fas fa-chevron-left"></i>'
  );
  $(".skema__body .owl-nav .owl-next").append(
    '<i aria-label="Next" class="fas fa-chevron-right"></i>'
  );
});
