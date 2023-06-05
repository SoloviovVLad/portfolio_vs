import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const yearBlock = () => {
	gsap.registerPlugin(ScrollTrigger);

	const parallaxEl = document.querySelectorAll('.parallax-item');

	if (!parallaxEl.length) return;

	parallaxEl.forEach((item) => {
		const value = +item.dataset.parallax || -50;

		ScrollTrigger.matchMedia({
			'(min-width: 1024px)': () => {
				gsap.to(item, {
					yPercent: value,
					ease: 'none',
					scrollTrigger: {
						trigger: item.closest('.parallax-container'),
						start: 'top 0%',
						end: 'bottom 20%',
						scrub: true,
						// markers: true,
					},
				});
			},
		});
	});

	const yearSection = document.querySelectorAll('.year_block');

	// Создайте массив случайных чисел в заданном диапазоне
	const getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// Установите случайный margin-top для каждого блока, кроме одного
	const getRandomMargin = () => {
		if (window.innerWidth > 768) {
			yearSection.forEach((section) => {
				const listItems = section.querySelectorAll('.year_block_list__item');
				listItems.forEach((item, index) => {
					if (index !== 1) { // Исключите блок с индексом 1 (нумерация с 0)
						const randomMargin = `${getRandomInt(50, 200)}px`; // Задайте диапазон случайных значений для margin-top
						item.style.marginTop = randomMargin;
					}
				});
			});
		} else {
			yearSection.forEach((section) => {
				const listItems = section.querySelectorAll('.year_block_list__item');
				listItems.forEach((item) => {
					item.style.marginTop = 0;
				});
			});
		}
	};

	getRandomMargin();

	window.addEventListener('resize', () => {
		getRandomMargin();
	});
};

export default yearBlock;
