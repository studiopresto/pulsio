export const initCounter = () => {
	const counters = document.querySelectorAll('.counter');
	if (!!counters.length) {
		for (let i = 0; i < counters.length; i++) {
			const btnMinus = counters[i].querySelector('.counter-btn.__minus');
			const btnPlus = counters[i].querySelector('.counter-btn.__plus');
			const input = counters[i].querySelector('.counter-value');

			btnMinus.addEventListener('click', () => updateValue(input, false));
			btnPlus.addEventListener('click', () => updateValue(input, true));
		}
	}
}

const updateValue = (input, isAdding) => {
	const value = parseInt(input.value);
	console.log(value);
	isAdding ? input.value = Math.min(99, ( value + 1 )) : input.value = Math.max(1, ( value - 1 ));
}