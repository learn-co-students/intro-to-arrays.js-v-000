'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  return array[1] = "Carter";
}

function removeElementFromArray(array) {
  array.splice(2, 3, "Roast Chicken");
  return array;
}

function iterateArray(array) {
  var newNums = new Array();
  array.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
