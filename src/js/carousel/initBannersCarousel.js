import Splide from '@splidejs/splide';

export const initBannersCarousel = () => {
	const carousels = document.querySelectorAll('.carousel.splide');
	if (carousels.length) {
		for (let i = 0; i < carousels.length; i++) {
			const carousel = new Splide(carousels[i], {
				type: 'slide',
				arrows: false,
				pagination: false,
				speed: 1000,
				easing: 'ease-out',
			});

			carousel.mount();
		}
	}
}