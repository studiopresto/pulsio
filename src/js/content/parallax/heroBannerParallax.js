import Tween from 'gsap';

export const heroBannerParallax = () => {
	const banner = document.querySelector('.hero-banner[data-parallax]');
	if (!!banner) {

		updateScrollY(banner);

		window.addEventListener('scroll', () => {
			window.innerWidth > 991 ? updateScrollY(banner) : null;
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