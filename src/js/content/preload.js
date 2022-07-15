import Tween, { Power2 } from 'gsap';

export const preload = () => {
	const preloader = document.querySelector('.preloader');
	if (!!preloader) {

		Tween.to(preloader.querySelectorAll('.preloader-item'),{
			y: 0,
			duration: 0.6,
			ease: Power2.easeOut,
			delay: 0.5,
			onComplete: () => {
				Tween.to(preloader, {
					yPercent: -100,
					duration: 1,
					ease: Power2.easeOut,
					delay: 0.2,
				});
			}
		});
	}
}