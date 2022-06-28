import Tween, { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initParallax = () => {
	const elements = document.querySelectorAll('[data-scroll-speed]');
	if (!!elements.length) {
		for (let i = 0; i < elements.length; i++) {
			let speed = elements[i].getAttribute('data-scroll-speed');
			let direction = elements[i].getAttribute('data-scroll-direction') || 'vertical';
			let start = elements[i].getAttribute('data-scroll-start');
			const to = {};
			const scroll = {
				scrub: true,
				duration: window.innerHeight,
			};
			if (direction === 'horizontal') {
				to.x = 0 - ( parseFloat(speed) * window.innerWidth > 991 ? 50 : 20 );
			} else {
				to.y = 0 - ( parseFloat(speed) * window.innerWidth > 991 ? 90 : 40 );
			}
			if (!!start) {
				scroll.start = start;
			}
			Tween.fromTo(elements[i],
				{
					y: 0,
					x: 0,
				},
				{
					...to,
					scrollTrigger: {
						...scroll,
						trigger: elements[i],
					}
				});
		}
	}
}