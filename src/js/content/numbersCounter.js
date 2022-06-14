import Tween from 'gsap';

export const numbersCounter = (obj) => {
	if (!!obj) {
		let count = obj?.target || obj?.targetEl,
			zero = { val: 0 },
			num = count.dataset.number

		Tween.to(zero, {
			val: num,
			duration: 1,
			onUpdate: () => {
				count.innerHTML = zero.val.toFixed(0);
			},
		});
	}
}