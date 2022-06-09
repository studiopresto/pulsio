import Splide from "@splidejs/splide";

export const initReviewsCarousel = () => {
	const reviewsCarousel = document.querySelector('.reviews-carousel');
	if (!!reviewsCarousel) {
		const carousel = new Splide('.reviews-carousel', {
			type: 'slide',
			perPage: 4,
			perMove: 2,
			gap: 32,
			arrows: true,
			pagination: false,
			speed: 800,
			easing: 'ease',
			updateOnMove: true,
		});

		carousel.mount();
	}
}