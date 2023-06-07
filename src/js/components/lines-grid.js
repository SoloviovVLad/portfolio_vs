const linesGrid = () => {
	const linesItem = document.querySelectorAll('.lines_grid__item');
	const lineClassAnim = 'lines_grid__item--animate';

	// const tabletLineRemove = () => {
	// 	const screenWidth = window.innerWidth;

	// 	if (screenWidth < 768) {
	// 		const lineToRemove = document.querySelectorAll('.lines_grid__item');

	// 		if (linesItem.length > 5) {
	// 			for (let i = 0; i < linesItem.length; i++) {

	// 				lineToRemove.forEach((line) => {
	// 					line.remove();
	// 				});
	// 				console.log(linesItem.length);
	// 			}
	// 		}
	// 		removeAnimationClass();
	// 	}
	// };

	// const addAnimationClass = () => {
	// 	linesItem.forEach((line) => {
	// 		line.classList.add(lineClassAnim);
	// 	});
	// };

	const removeAnimationClass = () => {
		let index = 0;
		const interval = setInterval(() => {
			if (index >= linesItem.length) {
				clearInterval(interval);
				return;
			}
			const line = linesItem[index];
			if (line.classList.contains(lineClassAnim)) {
				line.classList.remove(lineClassAnim);
			}
			index++;
		}, 300);
	};

	if (linesItem) {
		// tabletLineRemove();
		removeAnimationClass();
	}

	window.addEventListener('resize', () => {
		// tabletLineRemove();
		removeAnimationClass();
	});
};

export default linesGrid;
