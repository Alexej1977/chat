'use strict';

document.addEventListener('DOMContentLoaded', () => {

	let i = 0,
		btn = document.querySelector('.button'),
		input = document.querySelector('.input'),
		text1 = document.querySelector('.area-1'),
		text2 = document.querySelector('.area-2');

	btn.addEventListener('click', function (e) {

		if (text1.value !== '') {
			i += 1;
			text2.innerHTML += `<div class="area-2__wrapper">
			<span class="close">&times </span><span class="area-2__text">${input.value}</span></div> `;

			if (i == 11) {
				text2.firstElementChild.remove();
				--i;
			}

			let close = document.querySelectorAll('.close');
			close.forEach(e => {
				e.addEventListener('click', function (e) {
					e.preventDefault();
					console.log('close');
					e.target.parentElement.remove();
					--i;
				});
			});
			input.value = '';
			text1.value = '';
		}
	});

	input.addEventListener('input', function (e) {
		text1.value = input.value;
	})

});