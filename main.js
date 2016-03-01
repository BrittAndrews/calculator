var box1, box2, calc, answ;

box1 = document.querySelector('#num_one');
box2 = document.querySelector('#num_two');
calc = document.querySelector('#calculateBtn');
answ = document.querySelector('#answer');


var box1numbers, box2numbers;

function addition() {
	box1numbers = box1.value;
	box2numbers = box2.value;
	answ.textContent= Number(box1numbers)+Number(box2numbers);
}

calc.addEventListener('click', addition);