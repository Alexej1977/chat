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
					e.target.parentElement.remove();
					--i;
				});
			});
			input.value = '';
			text1.value = '';
		}

		hidden();
		setTimeout(visibile, 3000);
		disabled();
		setTimeout(possible, 5000);
		//setTimeout(() => btn.removeAttribute('disabled'), 5000);
	});

	input.addEventListener('input', function (e) {
		text1.value = input.value;
	})

	function hidden() {
		text2.lastElementChild.classList.add('hidden');
	}

	function visibile() {
		text2.lastElementChild.classList.remove('hidden');
	}

	function disabled() {
		btn.setAttribute('disabled', 'disabled');
	}

	function possible() {
		btn.removeAttribute('disabled');
	}

});