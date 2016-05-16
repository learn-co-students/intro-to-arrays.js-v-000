'use strict';
function createArray() {
  var string = ["snickers", "hundred grand", "kitkat", "skittles"];
  return string;
}

function addElementToArray() {
  var array = ["Home Alone", "Love Actually", "Elf"];
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
  array.splice(2, 2); array.push("Roast Chicken");
  return array;
}

function iterateArray(numbers) {
  var newNums = [];
  numbers.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}
