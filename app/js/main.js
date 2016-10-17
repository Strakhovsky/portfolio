//Preloaer

$(window).on('load', function () {
    var $preloaderBackground = $('#preloaderBackground'),
        $preloader = $('#preloader'),
        $icon = $preloader.find('.icon');
    $icon.fadeOut();
    $preloader.delay(450).fadeOut('slow');
    $preloaderBackground.delay(550).fadeOut('slow');
});

// Anchor links

 $(document).ready(function(){
	$(document).on('click', '.page-scroll', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
});

// Fixed navigation menu

$('#nav').affix({
      offset: {
        top: $('header').outerHeight()
      }
});

// Isotope plugin. Sorting Portfolio

$(document).ready( function () {
    var $container = $('.portfolio-items');
    $container.isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        filter: '*',
        transitionDuration: '0.8s',
        animationOptions: {
            duration: 800,
            easing: 'linear',
            queue: false
        }
    });

    $('.cat a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            transitionDuration: '0.8s',
            animationOptions: {
                duration: 800,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});

// easyPieChart plugin. Skills

$(document).ready(function(e) {
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		if (top<-1000) {
			if (index==0) {	
			
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
                    lineWidth: '9',
                    barColor: '#2c3e50',
                    size: '152',
                    lineCap: 'square',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
            index++;
		}
	})
});

// counterUp plugin. Stats

$(document).ready(function( $ ) {
    if($("span.count").length > 0){	
        $('span.count').counterUp({
                delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
        });
    }
});

// owlCarousel plugin. Slider. Testimonials panel 

$(document).ready(function() {
    $("#testimonial").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
    });

});