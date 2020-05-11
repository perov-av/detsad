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
	})
});

// function toggle() {
// 	var sec = document.getElementById('sec');
// 	var nav = document.getElementById('navigation');
// 	sec.classList.toggle('active');
// 	nav.classList.toggle('active');
	
// };

function toggleV() {
	var trailer = document.querySelector('.trailer');
	var video = document.querySelector('video');
	trailer.classList.toggle('active-video');
	video.currentTime = 0;
	video.pause();
};

var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 30,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows : true,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});

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

// $('#sec').mousemove(function (e) {
// 	var movX = (e.pageX * -1 / 25);
// 	var movY = (e.pageY * -1 / 25);
// 	$(this).css('background-position', movX + "px " + movY + "px")
// })