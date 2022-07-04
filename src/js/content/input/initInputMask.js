import IMask from 'imask';

export const initInputMask = () => {
	const cardInput = document.querySelector('[data-mask="card"]');
	if (!!cardInput) {
		IMask(cardInput, {
			mask: '0000 0000 0000 0000',
		});
	}

	const expiryDateInput = document.querySelector('[data-mask="expiryDate"]');
	if (!!expiryDateInput) {
		IMask(expiryDateInput, {
			mask: '00 / 0000',
			min: 2022
		});
	}

	const cardCodeInput = document.querySelector('[data-mask="cardCode"]');
	if (!!cardCodeInput) {
		IMask(cardCodeInput, {
			mask: '000',
		});
	}

};