'use strict';
function createArray() {
	return ['snickers', 'hundred grand', 'kitkat', 'skittles']
}

function addElementToArray(array) {return array.concat('A Christmas Story')}

function accessElementFromArray(array) {return array[2]}

function replaceElementInArray(array) { array[1]='Carter'; return array[1];}

function removeElementFromArray(array) {return array.splice(0, 2).concat('Roast Chicken');}

function iterateArray(array) {
	var new_array=[]
	array.forEach(function(number) {
		new_array=new_array.concat(number+5);
	});
	return new_array;
}