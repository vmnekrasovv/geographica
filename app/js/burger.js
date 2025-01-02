(function($){
	$(document).ready(function(){

		$('.burger').append("<span class='burger__element'></span>");

		let btn = $('.burger, .navbar-dropdown');

		btn.click(function(){
			btn.toggleClass('active');
			$('body').toggleClass('lock');
		});

	});

	$(window).on('load resize', function(){

		let window_width = window.innerWidth;
		let btn = $('.burger, .navbar-dropdown');

		if(window_width > 1400){
			btn.removeClass('active');
			$('body').removeClass('lock');
		}
	});

})(jQuery);