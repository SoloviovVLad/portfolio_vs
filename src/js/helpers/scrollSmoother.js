const smoothScroll = () => {
	const body = document.body;
	const scrollWrap = document.querySelector('#smooth_scroll_wrapper');
	const height = scrollWrap.getBoundingClientRect().height - 1;
	// const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	const speed = 0.04;

	let offset = 0;

	body.style.height = `${Math.floor(height)}px`;

	const smoothScrollAnimation = () => {
		if (window.innerWidth > 768) {
			offset += (window.pageYOffset - offset) * speed;

			let scroll = 'translateY(-' + offset + 'px) translateZ(0)';
			scrollWrap.style.transform = scroll;

			const callScroll = requestAnimationFrame(smoothScrollAnimation);
		}
	};

	smoothScrollAnimation();
};

window.addEventListener('load', smoothScroll);
window.addEventListener('resize', smoothScroll);

export default smoothScroll;
