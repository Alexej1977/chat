'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let btn = document.querySelector('.button'),
    input = document.querySelector('.input'),
    text1 = document.querySelector('.area-1');

    btn.addEventListener('click', function (e) {
    input.value = '';
    text1.value = '';
    })

    input.addEventListener('input', function(e){
         text1.value = input.value;   
    })

});

