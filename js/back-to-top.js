$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		console.log(wScroll);

		var showScrollButton = 115;

		if ( wScroll> showScrollButton) {
			$(".backToTop").fadeIn();
		}else{
			$(".backToTop").fadeOut();
		}

	});

	$(".backToTop").click(function(){
		$('body,html').animate({
			scrollTop:0

		},900);
		return false;
		// alert('hello');
	});

});
