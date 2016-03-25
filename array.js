'use strict';

function createArray() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  names[1] = 'Carter';
  return names[1];
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var newNums = [];
  numbers.forEach(function(item) {
    newNums.push(item + 5);
  });
  return newNums;
}

