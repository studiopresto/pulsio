import Pristine from '../libs/pristine.min';

export const subscribeFormValidation = () => {
	const form = document.querySelector('#subscribe-form');
	if (!!form) {
		const formValid = new Pristine(form, {
			classTo: 'input-container',
			errorClass: 'has-error',
		});

		const inputs = form.querySelectorAll('input');
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('keypress', () => {
				console.log(formValid.validate());
				if (formValid.validate()) {
					form.setAttribute('data-valid', 'true');
				} else {
					form.setAttribute('data-valid', 'false');
				}
			});
		}
	}
}