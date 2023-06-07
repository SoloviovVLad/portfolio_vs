import aside from './components/aside';
import canvas from './components/canvas';
import cursor from './components/cursor';
import hero from './components/hero';
import linesGrid from './components/lines-grid';
import yearBlock from './components/year-block';
import documentReady from './helpers/documentReady';
import scrollSmoother from './helpers/scrollSmoother';
// import preloader from './helpers/preloader';
import viewHeight from './helpers/viewHeight';
import lazyImages from './modules/lazyImages';

documentReady(() => {
	// console.log('Document is ready');
	viewHeight();
	// preloader();
	lazyImages();
	canvas();
	hero();
	linesGrid();
	yearBlock();
	scrollSmoother();
	cursor();
	aside();
});
