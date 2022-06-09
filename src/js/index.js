import '../sass/index.scss';
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

/*
Content
 */
initAccordion();
loadVimeoPlayer();
initVimeoPlayer();
attachmentSwitcher();
/*
Validation
 */
subscribeFormValidation();

document.addEventListener('DOMContentLoaded', function(event) {
	setStickyBannerPosition();
});