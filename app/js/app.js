(function($){
	$(document).ready(function(){ 
		
	});

	$(window).on('load resize', function(){
	
		let window_width = window.innerWidth;

		let navbar = $('.navbar .container');
		let navbarDrop = $('.navbar-dropdown');
		let menu = $('.header-menu');

		// if(window_width <= 1400){
		// 	menu.add(toolbar).appendTo(navbarDrop);
		// } else {
		// 	menu.add(toolbar).appendTo(navbar);
		// }

		if(window_width <= 1400){
			menu.appendTo(navbarDrop);
		} else {
			menu.appendTo(navbar);
		}

		let navbarMobile = $('.navbar-mobile');
		let navbarMobileLeft = $('.navbar-mobile-left');
		let navbarMobileRight = $('.navbar-mobile-right');
		let burger = $('.burger');
		let toolbar = $('.toolbar');
		let search = $('.search');

		if(window_width <= 767){
			navbarMobile.addClass('active');
			search.appendTo(navbarMobileLeft);
			burger.appendTo(navbarMobileRight);

		} else {
			navbarMobile.removeClass('active');
			search.prependTo(toolbar);
			burger.appendTo(navbar);
		}

		let filterButton = $('.filter-button');
		let headerFilter = $('.header-filter');

		filterButton.on('click', function(){
			headerFilter.toggleClass('active');
			$('body').toggleClass('lock');
		});
	});
})(jQuery);