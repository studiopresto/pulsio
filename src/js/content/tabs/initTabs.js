export const initTabs = () => {
	const tabBtns = document.querySelectorAll('.tabs-btn');
	if (!!tabBtns.length) {
		for (let i = 0; i < tabBtns.length; i++) {
			tabBtns[i].addEventListener('click', () => {
				let tabId = tabBtns[i].dataset.tabId;
				let activeTab = document.querySelector('.tabs-content-item.is-active');
				let activeTabBtn = document.querySelector('.tabs-btn.is-active');
				if (!!activeTab) {
					activeTab.classList.remove('is-active');
				}
				if (!!activeTabBtn) {
					activeTabBtn.classList.remove('is-active');
				}
				document.querySelector(`.tabs-content-item[data-tab-content="${tabId}"]`).classList.add('is-active');
				tabBtns[i].classList.add('is-active');
			});
		}
	}
}