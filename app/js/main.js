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


$('#nav').affix({
      offset: {
        top: $('header').outerHeight()
      }
});	