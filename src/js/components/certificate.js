import Swiper, { Navigation } from 'swiper/swiper-bundle';

const slider = () => {
	const certificateBlock = document.querySelector('.certificate');

	if (certificateBlock.classList.contains('certificate--hidden_mod')) {
		setTimeout(() => {
			certificateBlock.classList.remove('certificate--hidden_mod');
		}, 6000);
	}

	Swiper.use([Navigation]);

	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper('.js-slider-certificate', {
		slidesPerView: 3,
		slidesPerColumn: 1,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.2,
				spaceBetween: 15,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			// when window width is >= 480px
			1024: {
				spaceBetween: 25,
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

export default slider;
