'use strict';
function createArray() {
	return ['snickers','hundred grand','kitkat','skittles'];
}

function addElementToArray(array) {
	array.push('A Christmas Story');
	return array;
}

function accessElementFromArray(array) {
	return array[2];
}

function replaceElementInArray(names) {
	names[1] = "Carter";
	return names[1];
}

function removeElementFromArray(array){
	array.splice(2,2,"Roast Chicken");
	return array;
}

function iterateArray(numArr){
	var newNums = []
	numArr.forEach(function(num) {
		newNums.push(num+5);
	});
	return newNums;
}
