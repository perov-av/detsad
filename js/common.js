// $(function toggle() {
// 	var sec = document.getElementById('sec');
// 	sec.classList.toggle('active')

// });

// Для кнопки МЕНЮ************************************
$(document).ready(function () {
	$('#toggle').click(function () {
		$('#toggle').toggleClass('active')
		$('.overlay').toggleClass('active')
		$('#navigation').toggleClass('active')
	})
});
$(document).ready(function () {
	$('.menuLi').click(function () {
		$('#toggle').removeClass('active')
		$('.overlay').removeClass('active')
		$('#navigation').removeClass('active')
	})
});
$(document).ready(function () {
	$('.toggleForm').click(function () {
		$('.sidebar-contact').addClass('active')
		$('.toggleFormX').removeClass('active')
	})
});
$(document).ready(function () {
	$('.toggleFormX').click(function () {
		$('.sidebar-contact').removeClass('active')
		$('.toggleFormX').addClass('active')
	})
});

// Для скроллбара
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}

// Для аккордеона с ценами
$(document).ready(function () {
	$('#fullday').click(function () {
		$('.answer1').toggleClass('active')
		$('.s2').toggleClass('active')
		$('.s1').removeClass('active')
		$('.answer2').removeClass('active')
	})
});
$(document).ready(function () {
	$('#halfday').click(function () {
		$('.answer2').toggleClass('active')
		$('.s1').toggleClass('active')
		$('.s2').removeClass('active')
		$('.answer1').removeClass('active')
	});
});

// Магнифик попап********************************************
$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedBgPos: true,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});

$(function () {
	$('.popup-modal').magnificPopup({
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: false,
		preloader: false,
		midClick: true,
		removalDelay: 500,
		mainClass: 'mfp-fade'
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});


// Главный экран, банер ************************************
function toggleV() {
	var trailer = document.querySelector('.trailer');
	var video = document.querySelector('video');
	trailer.classList.toggle('active-video');
	video.currentTime = 0;
	video.pause();
};

// Свайпер в разделе программы развития*********************
$(document).ready(function () {

	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		// slidesOffsetBefore: 50,
		coverflowEffect: {
			rotate: 30,
			stretch: 0,
			depth: 200,
			modifier: 1,
			slideShadows: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: false,
		autoplay: {
		delay: 4000,
		disableOnInteraction: true,        
		},
	});
});
	
	



// Кнопки в разделе наши преимущества***********************
$(document).ready(function () {
	$('.more').click(function () {
	var parentBox = this.parentElement
	$(parentBox).find('.back').addClass('active')
	$(parentBox).find('.front').removeClass('active')
	})
	$('.go-back').click(function () {
	var parentBox = this.parentElement.parentElement
	$(parentBox).find('.back').removeClass('active')
	$(parentBox).find('.front').addClass('active')
	})
});

// $('#sec').mousemove(function (d) {
// 	var movX = (d.pageX * -1 / 35);
// 	var movY = (d.pageY * -1 / 35);
// 	$(this).css('background-position', movX + "px " + movY + "px");
// });