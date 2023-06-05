const linesGrid = () => {
	const linesItem = document.querySelectorAll('.lines_grid__item');
	const lineClassAnim = 'lines_grid__item--animate';

	const tabletLineRemove = () => {
		const screenWidth = window.innerWidth;

		if (screenWidth < 768) {
			const lineToRemove = document.querySelectorAll('.lines_grid__item:nth-child(-n+4)');

			lineToRemove.forEach((line) => {
				line.remove();
			});
		}
	};

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
		tabletLineRemove();
		removeAnimationClass();
	}
};

export default linesGrid;
