'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(arr) {
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(arr) {
  return arr[2];
}

function replaceElementInArray(arr) {
  arr[1] = "Carter";
  return arr[1];
}

function removeElementFromArray(arr) {
  var remove = arr.splice(2,2, 'Roast Chicken');
  return arr;
}

function iterateArray(arr) {
  var newNums = new Array();

  arr.forEach(function(letter) {
    newNums.push(letter + 5);
  });

  return newNums;
}
