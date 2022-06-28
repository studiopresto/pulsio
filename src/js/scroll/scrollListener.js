import {locoScroll} from "./locoScroll";
// import {switchHeader} from "../content/switchHeader";
import {numbersCounter} from "../content/numbersCounter";

export const scrollListener = () => {

	locoScroll.on('call', (func, dir, obj) => {
		if (func === 'counter' && dir === 'enter') {
			numbersCounter(obj);
		}
	});

	// locoScroll.on('scroll', (args) => {
	// 	switchHeader(args.scroll.y);
	// });

}