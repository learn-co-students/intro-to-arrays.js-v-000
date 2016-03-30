'use strict';

function createArray() {
  var strings = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  return strings;
}

function addElementToArray(someArray) {
  someArray.push("A Christmas Story");
  return someArray;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  return names[1] = "Carter";
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var newNums = [];
  numbers.forEach(function(n) {
    newNums.push(n + 5);
  });
  return newNums;
}
