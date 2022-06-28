import Tween from 'gsap';

export const numbersCounter = (obj) => {
	if (!!obj && !obj.el.classList.contains('is-competed')) {
		let count = obj?.target || obj?.targetEl,
			zero = { val: 0 },
			num = count.dataset.number

		Tween.to(zero, {
			val: num,
			duration: 1,
			onUpdate: () => {
				count.innerHTML = zero.val.toFixed(0);
			},
			onComplete: () => {
				obj.el.classList.add('is-completed');
			}
		});
	}
}