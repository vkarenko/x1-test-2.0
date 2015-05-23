$(function(){
	$('.h-nav-icon').click(function (){
		$(this).next().toggle();
	});

	if (GetIEVersion() > 0) 
	$('body').addClass('IE'+GetIEVersion());

	$('.mSlider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		fade: true,
		cssEase: 'linear'
	});

	inputRange.init(); // init Sliders for ranges
	inputRange.actions(); // events of Sliders for ranges
});