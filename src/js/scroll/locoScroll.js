import Tween from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';

const scrollContainer = document.querySelector('#wrapper');
Tween.registerPlugin(ScrollTrigger);

export const locoScroll = new LocomotiveScroll({
	el: scrollContainer,
	smooth: true,
	reloadOnContextChange: true,
	resetNativeScroll: false,
	lerp: 0.07,
	tablet: {
		smooth: false,
	},
	smartphone: {
		smooth: true,
	},
});

locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy(scrollContainer, {
	scrollTop(value) {
		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
	},
	pinType: scrollContainer.style.transform ? 'transform' : 'fixed'
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();
