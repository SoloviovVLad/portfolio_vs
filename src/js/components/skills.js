const skills = () => {
	const skillBlock = document.querySelector('.skills');
	let duration = 0;

	if (window.innerWidth > 768) {
		duration = 4000;
	} else {
		duration = 3000;
	}

	if (skillBlock) {
		setTimeout(() => {
			if (skillBlock.classList.contains('skills--hidden_mod')) {
				skillBlock.classList.remove('skills--hidden_mod');
			}
		}, duration);
	}
};

export default skills;
