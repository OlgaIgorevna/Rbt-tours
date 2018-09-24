$(window).on("load", function () {




	$(".slider-part").slick({
			dots: true,
			infinite: true,
			speed: 300,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	
	
	
	
	$(".slider-photo").slick({
			dots: true,
			infinite: true,
			speed: 300,
			autoplay: false,
			autoplaySpeed: 4000,
			slidesToShow: 3,
			slidesToScroll: 3,
		
					responsive: [

						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						},						
							{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 476,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}	
						]
		});
	
});
