'use strict';

function createArray () {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
}

function addElementToArray (array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray (array) {
  return array[2];
}

function replaceElementInArray (array) {
  return array[1] = "Carter";
}

function removeElementFromArray (array) {
  array.splice(2, 2, "Roast Chicken");
  return array
}

function iterateArray (array) {
  var newArray = [];

  array.forEach(function(number, index) {
    newArray[index] = number + 5;
  });
  
  return newArray;
}