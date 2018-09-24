$(window).on("load", function () {
	var count = 0;
	var sl_elem = "";

	$(".slider-photo .wrap-item").on("click", function (e) {

		count++;

		$("body").wrapInner('<div class="wrap-body-blur"></div>');
		$('<div class="antyclick"></div>').appendTo($("body"));

		if (count == 1) {
			sl_elem = document.getElementsByClassName("slider-modal")[0].outerHTML;		
		}

		$(sl_elem).appendTo($("body"));

		$(".slider-modal").addClass("show-important");

		var index = +$(this).attr("data-slick-index");


		$('.slider-modal').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			adaptiveHeight: true,
			initialSlide: index
		});

		function closeBigSlider() {
			$(".slider-modal.slider-for").slick("unslick");
			$(".slider-modal.slider-for").remove();
			$(".antyclick").remove();
			$(".wrap-body-blur").children().eq(0).unwrap(".wrap-body-blur");

		}

		$(".antyclick").on("click", function (e) {
			closeBigSlider();
		});

	});


	$('.slider-photo').slick({
		centerMode: false,
		focusOnSelect: true,
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



$(".slider-part").slick({
	dots: true,
	infinite: true,
	speed: 300,
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1
});
