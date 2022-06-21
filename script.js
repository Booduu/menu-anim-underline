window.onload = () => {
	const burger = document.querySelector('.burger-container');
	const lines = document.querySelectorAll('.line');
	const linkMenu = document.querySelectorAll('.link-menu');
	const navItem = document.querySelectorAll('.nav-item');
	const navbarMenuContainner = document.querySelector('.navbar-menu-container');


	const toggleLineBurger = () => {
		lines[0].classList.toggle('translate-plus');
		lines[1].classList.toggle('hide');
		lines[2].classList.toggle('translate-moins');
	}

    const toggleNavbarMenuContainer = () => {
        navbarMenuContainner.classList.toggle('is-open');
		navbarMenuContainner.classList.toggle('is-close');
	}

	burger.addEventListener('click', () => {
		toggleNavbarMenuContainer();
		toggleLineBurger();
	})

	window.addEventListener('resize', event => {
		if (window.matchMedia("(max-width: 500px)").matches) {
			navbarMenuContainner.classList.add('is-animated');
		} else {

			navbarMenuContainner.classList.remove('is-animated');

			if (navbarMenuContainner.classList.contains('is-open')) {
				navbarMenuContainner.classList.remove('is-open');
				navbarMenuContainner.classList.add('is-close');

				lines[0].classList.remove('translate-plus');
				lines[1].classList.remove('hide');
				lines[2].classList.remove('translate-moins');
			}
		}
	})


	// MENU LINK ANIMATION HOVER

	let direction = "";
	let oldx = 0;

	const mousemovemethod = (e) => {
		if (e.pageX < oldx) {
			direction = "left";
		} else if (e.pageX > oldx) {
		direction = "right";
		}
		
		oldx = e.pageX;
	}

	navbarMenuContainner.addEventListener('mousemove', event => {
		mousemovemethod(event);
	});



	navItem.forEach((el, i) => {
		let lineAnim = el.querySelector('.under-anim');
		let wrapperUnder = el.querySelector('.wrapper-under');

		el.addEventListener('mouseenter', event => {

			lineAnim.classList.add('under-anim-full-line');
			lineAnim.classList.remove('under-anim-empty-line');

			if (direction === 'right') {
				wrapperUnder.classList.add('flex-start');
				wrapperUnder.classList.remove('flex-end');
			
			}

			if (direction === 'left') {
				wrapperUnder.classList.remove('flex-start');
				wrapperUnder.classList.add('flex-end');
			
			}
			
		})

		el.addEventListener('mouseout', event => {
			
			lineAnim.classList.remove('under-anim-full-line');
			lineAnim.classList.add('under-anim-empty-line');

			if (direction === 'right') {
				wrapperUnder.classList.remove('flex-start');
				wrapperUnder.classList.add('flex-end');	
			}

			if (direction === 'left') {
				wrapperUnder.classList.add('flex-start');
				wrapperUnder.classList.remove('flex-end');
			}
		})
	})

	// MENU SMOOTH SCROLL
	

	linkMenu.forEach((el, i) => {
		el.addEventListener('click', event => {
			event.preventDefault();
			
			if (window.matchMedia("(max-width: 500px)").matches) {
                toggleNavbarMenuContainer();
				toggleLineBurger();
			}
		})
	})






}