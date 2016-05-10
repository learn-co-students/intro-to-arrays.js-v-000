'use strict';

function createArray() {
  return [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];
}

function addElementToArray(elements) {
  elements.push('A Christmas Story');
  
  return elements;
}

function accessElementFromArray(elements) {
  return elements[2];
}

function replaceElementInArray(elements) {
  return elements[1] = 'Carter'
}

function removeElementFromArray(elements) {
  elements.splice(2, 2);
  elements.push('Roast Chicken')

  return elements;
}

function iterateArray(numbers) {
  var newNums = [];
  numbers.forEach(function(number) {
    newNums.push(number+5)
  });

  return newNums;
}
