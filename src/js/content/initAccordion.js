import {locoScroll} from "../scroll/locoScroll";

export const initAccordion = () => {
	const accordions = document.querySelectorAll('.accordion');
	for (let i = 0; i < accordions.length; i++) {
		const accordionHeaders = accordions[i].querySelectorAll('.accordion-item-header');
		for (let j = 0; j < accordionHeaders.length; j++) {
			accordionHeaders[j].addEventListener('click', () => {
				let activePoint = accordions[i].querySelector('.accordion-item.is-active');
				if (accordionHeaders[j].parentNode.classList.contains('is-active')) {
					accordionHeaders[j].parentNode.classList.remove('is-active');
				} else {
					!!activePoint ? activePoint.classList.remove('is-active') : null;
					accordionHeaders[j].parentNode.classList.add('is-active');
				}
				locoScroll.update();
			});
		}
	}
}