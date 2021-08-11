// owl carousel
$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	});
});