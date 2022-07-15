import Splide from '@splidejs/splide';

export const initChooseCarousel = () => {
	const chooseCarousel = document.querySelector('.choose-carousel');
	if (!!chooseCarousel) {
		const carousel = new Splide('.choose-carousel', {
			// destroy: true,
			type: 'slide',
			arrows: false,
			pagination: false,
			perPage: 2,
			perMove: 1,
			gap: 32,
			autoHeight: true,
			breakpoints: {
				767: {
					type: 'loop',
					perPage: 1,
					autoWidth: true,
					focus: 'center',
					gap: 16,
				},
			},
		});

		carousel.mount();
	}
}