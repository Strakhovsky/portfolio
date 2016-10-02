// Переход по якорькам на странице

 $(document).ready(function(){
	 //var pageScroll = $('a.page-scroll');
	$(document).on('click', '.page-scroll', function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 800 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
});

// Плавающее навигационное меню

$('#nav').affix({
      offset: {
        top: $('header').outerHeight()
      }
});

// Плагин Изотоп

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

// Skills

$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		console.log(top)
		if(top<-1000){
			if(index==0){	
			
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

// counterUp

$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 0.1, // the delay time in ms
			time: 1000 // the speed time in ms
			});
		}
	});