import Tween from "gsap";

export const setWhiteColorTheme = (status) => {

	const light = '#FFFFFF';
	const dark = '#000000';

	if (status) {
		document.body.style.backgroundColor = light;
		Tween.fromTo(document.body,
			{
				backgroundColor: '#000000',
			},
			{
				backgroundColor: '#FFFFFF',
				duration: 0.2,
				ease: 'ease',
			});
		Tween.to(document.querySelectorAll('.section-dark'), {
			opacity: 0,
			duration: 0.2,
			ease: 'ease',
		});
		Tween.to(document.querySelectorAll('.section-white'), {
			opacity: 1,
			duration: 0.2,
			ease: 'ease',
		});
		document.body.classList.add('theme-light');
		document.body.classList.remove('theme-dark');
	} else {
		document.body.style.backgroundColor = dark;
		Tween.fromTo(document.body,
			{
				backgroundColor: '#FFFFFF',
			},
			{
				backgroundColor: '#000000',
				duration: 0.2,
				ease: 'ease',
			});
		Tween.to(document.querySelectorAll('.section-dark'), {
			opacity: 1,
			duration: 0.2,
			ease: 'ease',
		});
		Tween.to(document.querySelectorAll('.section-white'), {
			opacity: 0,
			duration: 0.2,
			ease: 'ease',
		});
		document.body.classList.add('theme-dark');
		document.body.classList.remove('theme-light');
	}
}