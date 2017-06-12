sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){

	$(".slider #1").fadeIn(300);
	startSlider();

});

function startSlider(){
	count = $(".testimonial__text").length;
	
	// $(".slider #1").delay(1500).hide("slide",{direction:"left"},1000);
	loop = setInterval(function(){

		if (sliderNext > count ) {
			sliderNext = 1;
			sliderInt = 1;
		}
		$(".slider p").delay(400).fadeOut(1100);
		$(".slider p#"+sliderNext).delay(400).fadeIn(1000);

		sliderInt = sliderNext;
		sliderNext = sliderNext +1 ;

	},3000);
}

$("#left-button").on("click",function(event){
	event.preventDefault();

	newSlide = sliderInt - 1;
	showSlide(newSlide); 
	 // alert("hurray! How are you!");
});

$("#right-button").on("click",function(event){
	event.preventDefault();

	newSlide = sliderInt + 1;
	showSlide(newSlide); 
	// alert("hurray! I am good thanks");
});

function stopLoop(){
	window.clearInterval(loop);
}

function showSlide(id){
	stopLoop();
	if (id > count ) {
			id = 1;
		}else if(id<1){
			id = count;
		}
		$(".slider p").fadeOut(300);
		$(".slider p#"+id).fadeIn(300);

		sliderInt = id;
		sliderNext = id +1 ;
		startSlider();

}

$(".slider p").hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}

)























