const social = () => {
	let duration = 0;
	const socialBlock = document.querySelector('.js-social');
	const hero = document.querySelector('.hero');

	if (window.innerWidth > 768) {
		duration = 4000;
	} else {
		duration = 3000;
	}
	if (!hero) {
		setTimeout(() => {
			if (socialBlock && socialBlock.classList.contains('social--hidden_mod')) {
				socialBlock.classList.remove('social--hidden_mod');
			}
		}, duration);
	}
};

export default social;
