import '../sass/index.scss';
import {preload} from "./content/preload";
import {scrollListener} from "./scroll/scrollListener";
import {initBannersCarousel} from "./carousel/initBannersCarousel";
import {initProductCarousel} from "./carousel/initProductCarousel";
import {initAccordion} from "./content/initAccordion";
import {initVimeoPlayer} from "./content/video/vimeoVideoPlayer";
import {loadVimeoPlayer} from "./content/video/loadVimeoPlayer";
import {setStickyBannerPosition} from "./content/images/setStickyBannerPosition";
import {initReviewsCarousel} from "./carousel/initReviewsCarousel";
import {subscribeFormValidation} from "./validation/subscribeForm";
import {attachmentSwitcher} from "./content/attachmentSwitcher";
import {initCompareCarousel} from "./carousel/initCompareCarousel";
import {initReviewsCommentsCarousel} from "./carousel/initReviewsCommentsCarousel";
import {closeNav, toggleNavListener} from "./content/toggleNav";

scrollListener();

/*
Require svg icons to stripe
 */
function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../images/icons/', true, /\.svg$/));

/*
Splide.js carousels
 */
initBannersCarousel();
initProductCarousel();
initReviewsCarousel();
initCompareCarousel();
initReviewsCommentsCarousel();

/*
Content
 */
initAccordion();
loadVimeoPlayer();
initVimeoPlayer();
attachmentSwitcher();
toggleNavListener();
setStickyBannerPosition();
/*
Validation
 */
subscribeFormValidation();

document.addEventListener('DOMContentLoaded', function(event) {
	setTimeout(() => setStickyBannerPosition(), 1000);

	/*
	Preload animation
 */
	preload();
});

window.addEventListener('scroll', () => {
	closeNav();
});

//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