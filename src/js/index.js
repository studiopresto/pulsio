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
import {toggleModal} from "./content/modal/toggleModal";
import {initParallax} from "./scroll/parallax";
// import {initCounter} from "./content/counter";
import {initInputMask} from "./content/input/initInputMask";
import {heroBannerParallax} from "./content/parallax/heroBannerParallax";
import {initTabs} from "./content/tabs/initTabs";

scrollListener();
initParallax();

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
toggleModal();
// initCounter();
initInputMask();
heroBannerParallax();
initTabs();
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
	window.innerWidth < 992 ? closeNav() :null;
});

//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