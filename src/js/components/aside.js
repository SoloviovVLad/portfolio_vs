const aside = () => {
	const selectors = {
		trigger: '.js-burger-triger',
		bodyMod: 'body--open_menu',
	};

	const burger = document.querySelector(selectors.trigger);

	if (burger) {
		burger.addEventListener('click', () => {
			console.log('+');
			document.body.classList.toggle(selectors.bodyMod);
		});
	}
};

export default aside;
