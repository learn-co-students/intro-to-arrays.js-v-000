'use strict';

function createArray() {
  var candyBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candyBars;
}



function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}



function accessElementFromArray(array) {
  return array[2];
}



function replaceElementInArray(arrayOfNames) {
  arrayOfNames[1] = "Carter";
  return arrayOfNames;
}



function removeElementFromArray(arrayOfDishes) {
  arrayOfDishes.splice(2, 3, "Roast Chicken");
  return arrayOfDishes;
}



function iterateArray(arrayOfNumbers) {
  var newNums = [];
  arrayOfNumbers.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}
