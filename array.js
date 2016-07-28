'use strict';

function createArray() {
  var hellsYeah = ["snickers", "hundred grand", "kitkat", "skittles"];
  return hellsYeah;
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(array) {
  var removedItems = array.splice(2, 2, "Roast Chicken");
  return array;
}

function iterateArray(array) {
  var newNums = [];
  array.forEach(function(number) {
    var newNum = number + 5;
    newNums.push(newNum);
  });
  return newNums;
}