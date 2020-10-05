'use strict';

document.addEventListener('DOMContentLoaded', () => {

	let i = 0,
		btn = document.querySelector('.button'),
		input = document.querySelector('.input'),
		text1 = document.querySelector('.area-1'),
		text2 = document.querySelector('.area-2'),
		textInput = '';

	btn.addEventListener('click', function () {
		if (text1.value !== '') {
			i += 1;
			if (i === 11) {
				text2.lastElementChild.remove();
				--i;
			}

			textInput = input.value;
			input.value = '';
			text1.value = '';
		
		    setTimeout(visibile, 3000);
		    disabled();
		    setTimeout(possible, 5000);
		};
	});

	input.addEventListener('input', function () {
		text1.value = input.value;
	})


	function visibile() {
		text2.insertAdjacentHTML('afterbegin', `<div class="area-2__wrapper">
		<span class="close">&times </span><span class="area-2__text">${textInput}</span></div>`);
		
		let close = document.querySelectorAll('.close');
			close.forEach(e => {
				e.addEventListener('click', function (e) {
						e.target.parentElement.remove();
					--i;
				});
			});
	};

	function disabled() {
		btn.setAttribute('disabled', 'disabled');
	}

	function possible() {
		btn.removeAttribute('disabled');
	}


});