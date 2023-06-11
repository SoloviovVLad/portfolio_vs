const contact = () => {
	const form = document.getElementById('form');
	const conctactBlock = document.querySelector('.contact');

	async function formSend(e) {
		e.preventDefault();
		let error = 0;
		let formData = new FormData(form);

		if (error === 0) {
			conctactBlock.classList.add('contact_form--sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				let result = await response.json();
				form.reset();
			}
		}
	}
	if (form) {
		form.addEventListener('submit', formSend);
	}
};

export default contact;
