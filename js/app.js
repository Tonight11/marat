function checkPage() {
	if (!window.location.href.includes('product.html')) {
		return;
	};


	//popup

	const btnBuy = document.querySelector('.btn-buy');
	const shadow = document.querySelector('.shadow');
	const popupClose = document.querySelector('.popup-close');

	btnBuy.addEventListener('click', () => {
		shadow.classList.add('active');
	})
	popupClose.addEventListener('click', () => {
		shadow.classList.remove('active');
	});


	// swiper

	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 10,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true
	});


	var swiper2 = new Swiper(".review__slider", {

		simulateTouch: false,
		// градус при котором поворот
		touchAngle: 90,
		grabCursor: false,

		speed: 800,

		thumbs: {
			swiper: swiper
		}
	});
}


let link = document.querySelectorAll(".menu-portfolio-link")
let menu = document.querySelectorAll('.menu-link')

// актив ссылки
link.forEach(b => {
	b.addEventListener('click', function (e) {
		link.forEach(button => button.classList.remove('active'));
		e.target.classList.add('active')
	})
})

menu.forEach(c => {
	c.addEventListener('click', function (e) {
		menu.forEach(nav => nav.classList.remove('active'));
		e.target.classList.add('active')
	})
})

if (window.location.href.match('index.html') || window.location.href.slice(-1) === '/') {
	//filter

	let removeChildren = function (item) {
		while (item.firstChild) {
			item.removeChild(item.firstChild);
		}
	}

	let pushChild = function (item, children) {
		removeChildren(item)
		for (let i = 0; i < children.length; i++) {
			item.appendChild(children[i]);
		}
	}

	let catalogRow = document.querySelector('.row-portfolio-item');
	let catalogItem = document.querySelectorAll('.catalog-item');
	let catalogNav = document.querySelector('.menu-portfolio-item');

	catalogNav.addEventListener('click', function (e) {
		let target = e.target;
		let catalogBtn = target.closest('.menu-portfolio-link')

		if (catalogBtn === null || catalogBtn.classList.contains('.menu-portfolio-link.active')) {
			return;
		}

		let btnValue = catalogBtn.classList[2];

		if (btnValue === 'all') {
			pushChild(catalogRow, catalogItem);
			return;
		}

		let filterValue = [];
		for (let i = 0; i < catalogItem.length; i++) {
			const curent = catalogItem[i];
			if (curent.classList[2] == btnValue) {
				filterValue.push(curent);
			}
		}

		pushChild(catalogRow, filterValue)

	})
}




checkPage();


