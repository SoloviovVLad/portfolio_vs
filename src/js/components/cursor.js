const cursor = () => {
	const customCursor = document.querySelector(".custom-cursor");

	document.addEventListener("mousemove", handleMouseMove);

	function handleMouseMove(event) {
		const x = event.clientX;
		const y = event.clientY;

		customCursor.style.left = `${x}px`;
		customCursor.style.top = `${y}px`;
	}
};

export default cursor;
