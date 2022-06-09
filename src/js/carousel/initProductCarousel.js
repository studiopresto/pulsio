import Splide from "@splidejs/splide";

export const initProductCarousel = () => {
	const productCarousel = document.querySelector('.product-carousel');
	if (!!productCarousel) {
		const carousel = new Splide('.product-carousel', {
			type: 'slide',
			arrows: false,
			pagination: true,
			speed: 1000,
			easing: 'ease-out',
		});

		carousel.mount();
	}
}