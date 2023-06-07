const canvas = () => {
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');
	const baseWrap = document.querySelector('.base');
	const canvasWidth = baseWrap.getBoundingClientRect().width;
	const canvasHeight = baseWrap.getBoundingClientRect().height;

	// Устанавливаем размеры canvas
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	const circles = [];

	// Создаем объекты-круги
	for (let i = 0; i < 50; i++) {
		const circle = {
			x: Math.random() * canvas.width, // Случайная координата x
			y: Math.random() * canvas.height, // Случайная координата y
			radius: Math.random() * 50, // Случайный радиус
			velocityX: 0, // Скорость по оси X
			velocityY: 0, // Скорость по оси Y
			friction: 0.98, // Коэффициент трения
			color: 'white', // Фиксированный белый цвет
		};

		circles.push(circle);
	}

	// Функция анимации
	function animate() {
		requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < circles.length; i++) {
			const circle = circles[i];

			// Обновление скорости и позиции шарика
			circle.velocityX *= circle.friction;
			circle.velocityY *= circle.friction;
			circle.x += circle.velocityX;
			circle.y += circle.velocityY;

			// Рисуем круг с заданными параметрами
			context.beginPath();
			context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
			context.fillStyle = circle.color;
			context.fill();
			context.closePath();
		}
	}

	// Обработчик события прокрутки
	function handleScroll() {
		for (let i = 0; i < circles.length; i++) {
			const circle = circles[i];

			// Устанавливаем случайное ускорение шарика при каждом событии прокрутки
			const accelerationX = Math.random() * 2 - 1;
			const accelerationY = Math.random() * 2 - 1;

			circle.velocityX += accelerationX;
			circle.velocityY += accelerationY;
		}
	}

	// Запускаем анимацию
	animate();

	// Добавляем обработчик события прокрутки
	window.addEventListener('scroll', handleScroll);
};

export default canvas;
