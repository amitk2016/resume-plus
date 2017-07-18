$(document).ready(function(){

	var mobileMenu = $("#mobileicon");
	var mobileMenuContent = $("#mobilemenu__content");
	var header = $(".header");

	mobileMenu.on('click',openContent);


	function openContent(){
		
		mobileMenuContent.toggleClass("navbar__ul_list--is-visible");
		header.toggleClass("header--is-expanded");
		mobileMenu.toggleClass("navbar__mobilemenu--close-X");
	};

});