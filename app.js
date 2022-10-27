let menuBtn = document.getElementById('menu-button');

menuBtn.addEventListener('click', () => {
	let menu = document.getElementById('menu');
	menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
});
