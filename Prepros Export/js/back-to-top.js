$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		console.log(wScroll);

		var showScrollButton = 135;

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

	// Read more button in the showcase has been handled here----
	// ---in back to top section as we already have scroll function in this module 
	$("#read-more").click(function(){
		$('body,html').animate({
			scrollTop:800

		},900);
		return false;
		// alert('hello');
	});

});
