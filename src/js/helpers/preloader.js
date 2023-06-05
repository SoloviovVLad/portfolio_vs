const preloader = () => {
	const startTime = performance.now();

	window.addEventListener('load', () => {
		const endTime = performance.now();
		const loadingTime = endTime - startTime;

		const totalTime = 10000;
		let process = (loadingTime / totalTime) * 100;
		const circle = document.querySelector('.preloader_ring__circle');
		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;

		circle.style.strokeDasharray = `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = circumference;

		const setProgress = (precent) => {
			const offset = circumference - (precent / 100) * circumference;
			circle.style.strokeDashoffset = offset;
		};

		setProgress(process);

		// let progress = 0; // Пример: 50%

		// progressBar.style.width = loadingTime + '%';
	});
};

export default preloader;
