import Splide from '@splidejs/splide';

export const initCompareCarousel = () => {
	const carousel = document.querySelector('.compare-carousel');
	if (!!carousel && window.innerWidth < 992) {
		const carousel = new Splide('.compare-carousel', {
			destroy: true,
			arrows: false,
			pagination: false,
			breakpoints: {
				991: {
					destroy: false,
					type: 'loop',
					perPage: 1,
					perMove: 1,
					autoWidth: true,
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