'use strict';

function createArray() {
  var candyBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candyBars;
}

function addElementToArray(arrayOne) {
  arrayOne.push("A Christmas Story");
  return arrayOne;
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

function iterateArray(number) {
  var newNums = [];
  number.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}
