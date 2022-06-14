import Splide from '@splidejs/splide';

export const initReviewsCommentsCarousel = () => {
	const carousel = document.querySelector('.reviews-comments-carousel');
	if (!!carousel) {
		const carousel = new Splide('.reviews-comments-carousel', {
			destroy: true,
			arrows: false,
			pagination: false,
			breakpoints: {
				991: {
					destroy: false,
					type: 'slide',
					perPage: 1,
					perMove: 1,
					autoWidth: true,
					autoHeight: true,
					arrows: false,
					pagination: true,
					speed: 600,
					easing: 'ease-out',
					focus: 'center',
				},
			},
		});

		carousel.mount();
	}
}