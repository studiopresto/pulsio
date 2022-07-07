import Tween from 'gsap';

export const heroBannerParallax = () => {
	const banner = document.querySelector('.hero-banner[data-parallax]');
	if (!!banner) {

		updateScrollY(banner);

		window.addEventListener('scroll', () => {
			updateScrollY(banner);
		});
	}
}

const updateScrollY = (banner) => {
	Tween.to(banner, {
		y: window.scrollY / 8,
		duration: 'none',
		ease: 'none',
	});
}