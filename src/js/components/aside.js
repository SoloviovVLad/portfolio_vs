const aside = () => {
	const selectors = {
		trigger: '.js-burger-triger',
		aside: '.js-aside',
		bodyMod: 'body--open_menu',
		asideMod: 'aside--hidden_mod',
	};

	const asideBlock = document.querySelector(selectors.aside);
	const burger = document.querySelector(selectors.trigger);
	const hero = document.querySelector('.hero');
	let duration = 0;

	if (window.innerWidth > 768) {
		duration = 4000;
	} else {
		duration = 3000;
	}

	if (!hero) {
		setTimeout(() => {
			if (asideBlock.classList.contains(selectors.asideMod)) {
				asideBlock.classList.remove(selectors.asideMod);
			}
		}, duration);
	}

	if (burger) {
		burger.addEventListener('click', () => {
			console.log('+');
			document.body.classList.toggle(selectors.bodyMod);
		});
	}

	// if (document.)
};

export default aside;
