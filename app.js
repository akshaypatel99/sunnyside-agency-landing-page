const menuBtn = document.getElementById('mobile-nav-toggle');
const nav = document.getElementById('primary-navigation');

menuBtn.addEventListener('click', () => {
	const visiblity = nav.getAttribute('data-visible');
	if (visiblity === 'false') {
		nav.setAttribute('data-visible', true);
		menuBtn.setAttribute('aria-expanded', true);
	} else {
		nav.setAttribute('data-visible', false);
		menuBtn.setAttribute('aria-expanded', false);
	}
});
