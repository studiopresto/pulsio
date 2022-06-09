import Player from '@vimeo/player';

export const initVimeoPlayer = () => {

	const videos = document.querySelectorAll('.video');
	if (!!videos.length) {
		for (let i = 0; i < videos.length; i++) {
			const iframe = videos[i].querySelector('.vimeo-player');
			const btn = videos[i].querySelector('.video-btn');
			if (!!iframe) {
				const player = new Player(iframe);
				btn.addEventListener('click', () => {
					if (player.origin !== '*') {
						if (videos[i].classList.contains('is-playing')) {
							player.pause();
						} else {
							player.play();
						}
					}
					videos[i].classList.add('is-loading');
				});

				player.on('play', () => {
					videos[i].classList.add('is-playing');
					videos[i].classList.remove('is-loading');
				});
				player.on('pause', () => videos[i].classList.remove('is-playing'));
			}
		}
	}

}