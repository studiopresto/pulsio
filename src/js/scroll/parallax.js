import Tween, { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initParallax = () => {
	const elements = document.querySelectorAll('[data-scroll-speed]');
	if (!!elements.length && window.innerWidth < 992) {
		for (let i = 0; i < elements.length; i++) {
			let speed = elements[i].getAttribute('data-scroll-speed');
			let direction = elements[i].getAttribute('data-scroll-direction') || 'vertical';
			console.log(parseFloat(speed));
			console.log(direction);
			const to = {};
			if (direction === 'horizontal') {
				to.x = 0 - ( parseFloat(speed) * 20 );
			} else {
				to.y = 0 - ( parseFloat(speed) * 40 );
			}
			Tween.fromTo(elements[i],
				{
					y: 0,
					x: 0,
				},
				{
					...to,
					scrollTrigger: {
						trigger: elements[i],
						scrub: true,
						duration: window.innerHeight,
					}
				});
		}
	}
}