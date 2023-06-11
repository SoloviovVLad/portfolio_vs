const projects = () => {
	const projectsBlock = document.querySelectorAll('.projects');

	let duration = 0;

	if (window.innerWidth > 768) {
		duration = 4000;
	} else {
		duration = 3000;
	}

	setTimeout(() => {
		projectsBlock.forEach(el => {
			el.classList.remove('projects--hidden_mod');
		});

		const currentUrl = window.location.href;
		const anchorIndex = currentUrl.indexOf('#');

		if (anchorIndex !== -1) {
			console.log(anchorIndex);

			const elementId = currentUrl.substr(anchorIndex + 1);
			const decodedElementId = decodeURIComponent(elementId);
			const targetElement = document.getElementById(decodedElementId);

			setTimeout(() => {
				if (targetElement) {
					const targetOffset = targetElement.offsetTop;
					window.scrollTo({ top: targetOffset, behavior: 'smooth' });
				}
			}, 1000);
		}
	}, duration);
};

export default projects;
