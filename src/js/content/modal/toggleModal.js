import Tween from 'gsap';

export const toggleModal = () => {
	const triggers = document.querySelectorAll('.open-modal');
	const closeTriggers = document.querySelectorAll('.close-modal');
	if (!!triggers.length) {
		for (let i = 0; i < triggers.length; i++) {
			triggers[i].addEventListener('click', (e) => {
				e.preventDefault();
				let modalId = triggers[i].dataset.modalId;
				if (!!modalId) {
					let modalElement = document.querySelector(modalId);
					if (!!modalElement) {
						Tween.set(modalElement, {
							display: 'block',
							onComplete: () => {
								Tween.to(modalElement, {
									opacity: 1,
									duration: 0.2,
									ease: 'none'
								});
							},
						});
					}
				}
			});
		}
	}

	if (!!closeTriggers.length) {
		for (let i = 0; i < closeTriggers.length; i++) {
			closeTriggers[i].addEventListener('click', (e) => {
				e.preventDefault();
				Tween.set(document.querySelectorAll('.modal'), {
					display: 'none',
				});
			});
		}
	}
}