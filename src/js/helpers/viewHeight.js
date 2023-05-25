const viewHeight = () => {
	const viewHeightFunc = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};

	viewHeightFunc();

	window.addEventListener('resize', () => {
		viewHeightFunc();
	});
};

export default viewHeight;
