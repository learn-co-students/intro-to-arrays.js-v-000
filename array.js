'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(movieArr) {
  movieArr.push("A Christmas Story");
  return movieArr;
}

function accessElementFromArray(statesArr) {
  return statesArr[2];
}

function replaceElementInArray(namesArr) {
  namesArr[1] = "Carter";
  return namesArr[1];
}

function removeElementFromArray(dishesArr) {
  dishesArr.splice(2, 2, "Roast Chicken");
  return dishesArr;
}

function iterateArray(numbersArr) {
  var newNums = [];
  numbersArr.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}