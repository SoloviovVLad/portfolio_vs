export default (fn) => {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', fn);
		document.body.classList.add('body--loaded');
	} else {
		fn();
	}
};
