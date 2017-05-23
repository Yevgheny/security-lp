$(function() {

    new WOW().init();


	// Smooth Scroll to block
	$('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
$(document).ready(function() {
    $('#slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1
    });

      $('#slider-1').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  });
$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();
