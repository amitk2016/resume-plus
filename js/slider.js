

$(document).ready(function(){

	$(".slider #1").fadeIn(300);
	startSlider();

});

function startSlider(){
	count = $(".testimonial__text").length;
	
	loop = setInterval(function(){
		// $(".testimonial__text").show();

	},3000);
}