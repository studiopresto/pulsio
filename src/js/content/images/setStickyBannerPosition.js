import Tween from 'gsap';

export const setStickyBannerPosition = () => {
	const banners = document.querySelectorAll('.banner');
	if (!!banners.length) {
		for (let i = 0; i < banners.length; i++) {
			if (banners[i].classList.contains('sticky-right')) {
				const { x, width } = banners[i].getBoundingClientRect();
				Tween.set(banners[i], {
					width: width + ( window.innerWidth - ( x + width ) ),
				});
			}
		}
	}
}

window.addEventListener('resize', () => setStickyBannerPosition());