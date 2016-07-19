'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array
}

function accessElementFromArray(statesArray) {
  return statesArray[2];
}

function replaceElementInArray(namesArray) {
  return namesArray[1] = "Carter";
}

function removeElementFromArray(dishesArray) {
  dishesArray.splice(2, 2, "Roast Chicken");
  return dishesArray;
}

function iterateArray(numbers) {
  var newNums = [];
  numbers.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}
