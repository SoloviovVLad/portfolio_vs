import { selector } from "gsap";

const hero = () => {
	const selectors = {
		hero: '.js-hero-list',
		heroList: '.js-hero-list',
		heroItem: '.js-hero-item',
		heroArrow: '.js-hero-arrow',
		sectionAnchor: '.js-year-block-anchor',
		aside: '.js-aside',
	};

	const mods = {
		heroItemShow: 'hero_list__item--show',
		heroItemHidden: 'hero_list__item--hidden',
		heroArrow: 'hero__icon--opacity_mod',
		bodyScroll: 'body--scroll_mod',
		asideHidden: 'aside--hidden_mod',
	};

	const hero = document.querySelector(selectors.hero);
	const heroList = document.querySelector(selectors.heroList);
	const heroItem = document.querySelectorAll(selectors.heroItem);
	const heroArrow = document.querySelector(selectors.heroArrow);
	const asideBlock = document.querySelector(selectors.aside);
	if (heroList && heroItem) {
		let maxW = 0;
		let maxH = 0;

		const heightList = () => {
			heroItem.forEach((item) => {
				const prevW = item.offsetWidth;
				const prevH = item.offsetHeight;

				if (prevW > maxW || prevH > maxH) {
					maxW = prevW;
					maxH = prevH;
				}

				heroList.style.width = `${maxW + 50}px`;
				heroList.style.height = `${maxH}px`;
			});
		};

		heightList();

		window.addEventListener('resize', () => {
			heightList();
		});
	}

	if (heroItem) {
		if (hero) {
			document.body.classList.add(mods.bodyScroll);
		} else {
			document.body.classList.add(mods.bodyScroll);

			setTimeout(() => {
				document.body.classList.remove(mods.bodyScroll);
			// }, 4000);
			}, 0);
		}

		const duration = 4000;
		// const duration = 0;

		// console.log(duration);

		setTimeout(() => {
			let currentItemIndex = 0;
			let isAnimating = false;
			let intervalId = null;

			const showBlock = (index) => {
				heroItem[currentItemIndex].classList.remove(mods.heroItemShow);
				heroItem[currentItemIndex].classList.add(mods.heroItemHidden);
				heroItem[index].classList.remove(mods.heroItemHidden);
				heroItem[index].classList.add(mods.heroItemShow);
				currentItemIndex = index;
			};

			const initialize = () => {
				heroItem[currentItemIndex].classList.add(mods.heroItemShow);
			};

			const scrollToSection = () => {
				const section = document.querySelector(selectors.sectionAnchor);

				const scrollTo = section.offsetTop;
				if (section) {
					window.scrollTo({
						top: scrollTo,
						behavior: 'smooth'
					});
				}
			};

			const handleWheel = (event) => {
				if (!isAnimating) {
					isAnimating = true;
					let nextItemIndex = currentItemIndex;

					if (event.deltaY > 0 && nextItemIndex < heroItem.length - 1) {
						nextItemIndex++;
					} else if (event.deltaY < 0 && nextItemIndex > 0) {
						nextItemIndex--;
					}

					if (nextItemIndex === heroItem.length - 1) {
						if (heroArrow.classList.contains(mods.heroArrow)) {
							heroArrow.classList.remove(mods.heroArrow);
							asideBlock.classList.remove(mods.asideHidden);
							document.body.classList.remove(mods.bodyScroll);
						}
					}

					if (nextItemIndex != heroItem.length - 1) {
						heroArrow.classList.add(mods.heroArrow);
					}

					showBlock(nextItemIndex);

					setTimeout(() => {
						isAnimating = false;
					}, 1500); // Задержка анимации между блоками - 500 миллисекунд
					// }, 0); // Задержка анимации между блоками - 500 миллисекунд
				}
			};

			if (window.innerWidth > 768) {
				window.addEventListener('wheel', handleWheel);
			} else {
				const startAutoAnimation = () => {
					intervalId = setInterval(() => {
						if (currentItemIndex < heroItem.length - 1) {
							const nextItemIndex = currentItemIndex + 1;

							if (currentItemIndex !== heroItem.length - 1) {
								heroArrow.classList.add(mods.heroArrow);
							}

							showBlock(nextItemIndex);
						} else if (currentItemIndex === heroItem.length - 1) {
							if (heroArrow.classList.contains(mods.heroArrow)) {
								heroArrow.classList.remove(mods.heroArrow);
								document.body.classList.remove(mods.bodyScroll);
								asideBlock.classList.remove(mods.asideHidden);
							}
						} else {
							stopAutoAnimation();
						}
					}, 2000); // Интервал автоматической прокрутки - 3000 миллисекунд (3 секунды)
				};

				const stopAutoAnimation = () => {
					clearInterval(intervalId);
					intervalId = null;
				};

				startAutoAnimation();
			}

			if (heroArrow) {
				heroArrow.addEventListener('click', scrollToSection);
			}

			if (hero) {
				initialize();
			}
		}, duration);
	}
};

export default hero;
