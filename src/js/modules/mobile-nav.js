function mobileNav() {
	const navBtn = document.querySelector('.header__btn');
	const mobNav = document.querySelector('.mobile-nav');

	navBtn.onclick = function () {
		navBtn.classList.toggle('header__btn--open');
		mobNav.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}
}

export default mobileNav;