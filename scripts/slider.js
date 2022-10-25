$(document).ready(function () {
	$(".similarly--book__slider").slick({
		infinity: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		draggable: false,
		prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
		nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
		dots: true,
	});
});
