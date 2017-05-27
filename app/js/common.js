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
        items:1,
        loop:true, //Зацикливаем слайдер        
        nav:true, //Отключил навигацию
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        margin: 30,
    });
});
$(function () {
    $('.popup-modal').magnificPopup({        
        type: 'inline',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {            
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

});

$(function () {
    $('.slide-picture-switch-1')

        .click(function () {
            $('.project-slide-picture-after').fadeOut(0);
            $('.project-slide-picture-after-1').fadeIn(600);
            $('.project-slide-picture-after').removeClass('active');
            $('.project-slide-picture-after-1').addClass('active');

        });
    
    $('.slide-picture-switch-2')

        .click(function () {
            $('.project-slide-picture-after').fadeOut(0);
            $('.project-slide-picture-after-2').fadeIn(600);
            $('.project-slide-picture-after').removeClass('active');
            $('.project-slide-picture-after-2').addClass('active');

        });

    $('.slide-picture-switch-3')

        .click(function () {
            $('.project-slide-picture-after').fadeOut(0);
            $('.project-slide-picture-after-3').fadeIn(600);
            $('.project-slide-picture-after').removeClass('active');
            $('.project-slide-picture-after-3').addClass('active');

        });
        
});

$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();
