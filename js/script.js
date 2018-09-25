$(window).on("load", function () {

	if ($(".menu-middle").length) {
		$(".menu-middle").wrap('<div class="wrap-menu-middle">');
	}

	$(window).scroll(function () {

		var h_h = $(".top-header-row").outerHeight();
		var h_m = $(".menu-top").outerHeight();
		var top = $(this).scrollTop();

		function set_menu_fixed(elem, t) {
			//console.log(elem);
			elem.css({
				position: "fixed",
				top: t,
				width: "100%"
			});
		}

		function unset_menu_fixed(elem) {
			elem.css({
				position: "relative",
				top: 0
			});
		}


		if (top >= h_h) {
			set_menu_fixed($(".menu-top").eq(0), 0);
		} else {
			unset_menu_fixed($(".menu-top").eq(0));
		}


		if ($(window).width() >= 768) {
			if ($(".banner-main-page").length) {
				var h_b = $(".banner-main-page").outerHeight();

				if (top >= h_h + h_b) {
					set_menu_fixed($(".menu-secondary-top").eq(0), h_m);
				} else {
					unset_menu_fixed($(".menu-secondary-top").eq(0));
				}
			}else{
				if (top >= h_h) {
					set_menu_fixed($(".menu-secondary-top").eq(0), h_m);
				} else {
					unset_menu_fixed($(".menu-secondary-top").eq(0));
				}
				
			}

			if ($(".menu-middle").length) {

				var h_mm = $(".menu-middle").outerHeight();


				$(".wrap-menu-middle").css({
					height: h_mm
				});

				var h_m_s = $(".menu-secondary-top").eq(0).outerHeight();

				var pos_top = $(".wrap-menu-middle").offset().top;



				if (pos_top - $(window).scrollTop() <= h_m + h_m_s) {
					set_menu_fixed($(".menu-middle").eq(0), h_m + h_m_s);
				}
				else{
					
					unset_menu_fixed($(".menu-middle").eq(0));
				}
			}
		}

	});

});
