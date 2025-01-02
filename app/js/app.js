(function($){
	$(document).ready(function(){ 
		
	});

	$(window).on('load resize', function(){
	
		let window_width = window.innerWidth;

		let navbar = $('.navbar .container');
		let navbarDrop = $('.navbar-dropdown');
		let menu = $('.header-menu');
		let toolbar = $('.toolbar');

		if(window_width <= 1400){
			menu.add(toolbar).appendTo(navbarDrop);
		} else {
			menu.add(toolbar).appendTo(navbar);
		}
	});
})(jQuery);