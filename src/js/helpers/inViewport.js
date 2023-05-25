const isElementInViewport = (el, elMod) => {
	window.addEventListener('scroll', () => {
		const rect = el.getBoundingClientRect();
		const inVisible = (
			rect.top >= 0
			&& rect.left >= 0
			&& rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			&& rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);

		if (inVisible) {
			el.classList.add(elMod);
		}
	});
};

export default isElementInViewport;
