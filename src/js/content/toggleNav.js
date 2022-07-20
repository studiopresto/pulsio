import Tween from 'gsap';

export const toggleNavListener = () => {
	const burger = document.querySelector('.burger');
	if (!!burger) {
		burger.addEventListener('click', () => {
			burger.classList.contains('is-active') ? closeNav() : openNav();
		});
	}
}

export const openNav = () => {
	const burger = document.querySelector('.burger');
	const header = document.querySelector('.header');
	if (!!burger && !!header) {
		const nav = document.querySelector('.header .nav');
		burger.classList.add('is-active');
		header.classList.add('is-open-nav');
		Tween.set(nav, {
			display: 'flex',
			onComplete: () => {
				Tween.to(nav, {
					opacity: 1,
				});
			},
		});
	}
}

export const closeNav = () => {
	const burger = document.querySelector('.burger');
	const header = document.querySelector('.header');
	if (!!burger && !!header) {
		burger.classList.remove('is-active');
		header.classList.remove('is-open-nav');
		const nav = document.querySelector('.header .nav');
		Tween.to(nav, {
			opacity: 0,
			onComplete: () => {
				Tween.set(nav, {
					display: 'none',
				});
			},
		});
	}
}