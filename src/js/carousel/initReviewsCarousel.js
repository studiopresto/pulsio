import Splide from "@splidejs/splide";

export const initReviewsCarousel = () => {
	const reviewsCarousel = document.querySelector('.reviews-carousel');
	if (!!reviewsCarousel) {
		const carousel = new Splide('.reviews-carousel', {
			type: 'loop',
			perPage: 4,
			perMove: 1,
			gap: 32,
			arrows: true,
			pagination: false,
			speed: 800,
			easing: 'ease',
			updateOnMove: true,
			pauseOnHover: false,
			resetProgress: false,
			breakpoints: {
				991: {
					autoWidth: true,
					perPage: 1,
					perMove: 1,
					focus: 'center',
				},
				767: {
					gap: 15,
					autoWidth: true,
					perPage: 1,
					perMove: 1,
					focus: 'center',
				},
			},
		});

		carousel.mount();
	}
}