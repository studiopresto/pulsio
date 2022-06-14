import Tween from 'gsap';
import {locoScroll} from "../scroll/locoScroll";

export const attachmentSwitcher = () => {
	const points = document.querySelectorAll('.attachment-points-item');
	for (let i = 0; i < points.length; i++) {
		points[i].addEventListener('click', () => {
			const activePoint = document.querySelector('.attachment-points-item.is-active');
			let anchorId = points[i].getAttribute('data-anchor');
			if (!points[i].classList.contains('is-active')) {
				points[i].classList.add('is-active');
				if (window.innerWidth > 991) {
					inScale(points[i], points[i].querySelector('.attachment-thumb'))
				} else {
					!!activePoint ? activePoint.classList.remove('is-active') : null;
					locoScroll.scrollTo(document.querySelector('.attachment-box'));
				}
				/*
				Hide
			 */
				Tween.set(document.querySelectorAll('.attachment-switcher-item'), {
					display: 'none',
				});
				/*
				Display
				 */
				Tween.to(document.querySelector(`.attachment-switcher-item[data-id="${anchorId}"]`), {
					display: 'block',
					onComplete: () => locoScroll.update(),
				});
			} else {
				!!activePoint ? activePoint.classList.remove('is-active') : null;
				window.innerWidth > 991 ? outScale(points[i], points[i].querySelector('.attachment-thumb')) : null;
			}
		});
	}
}

const inScale = (item, point) => {
	const box = document.querySelector('.attachment-points');
	box.classList.add('is-scaled');
	Tween.set(document.querySelectorAll('.attachment-points-item'), {
		opacity: 0,
		pointerEvents: 'none',
	});
	Tween.to(item, {
		opacity: 1,
		duration: 0.2,
		pointerEvents: 'auto',
		ease: 'ease',
	});
	Tween.to(point, {
		width: 300,
		height: 300,
		duration: 0.8,
		ease: 'ease',
	});
}

const outScale = (item, point) => {
	const box = document.querySelector('.attachment-points');
	box.classList.remove('is-scaled');
	Tween.to(point, {
		width: '100%',
		height: '100%',
		duration: 0.8,
		ease: 'ease',
		onComplete: () => {
			Tween.set(document.querySelectorAll('.attachment-points-item'), {
				opacity: 1,
				pointerEvents: 'auto',
			});
		},
	});
}