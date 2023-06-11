const social = () => {
	let duration = 0;
	const socialBlock = document.querySelector('.js-social');

	if (window.innerWidth > 768) {
		duration = 4000;
	} else {
		duration = 3000;
	}

	setTimeout(() => {
		if (socialBlock && socialBlock.classList.contains('social--hidden_mod')) {
			socialBlock.classList.remove('social--hidden_mod');
		}
	}, duration);
};

export default social;
