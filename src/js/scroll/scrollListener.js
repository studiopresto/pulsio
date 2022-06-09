import {locoScroll} from "./locoScroll";
import {switchHeader} from "../content/switchHeader";

export const scrollListener = () => {

	// locoScroll.on('call', (func, dir, obj) => {
	//
	// });

	locoScroll.on('scroll', (args) => {
		switchHeader(args.scroll.y);
	});

}