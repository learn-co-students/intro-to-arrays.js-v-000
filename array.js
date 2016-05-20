'use strict';

function createArray() {
  var candyStrings = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candyStrings;
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

var accessElementFromArray = function(array) {
  return array[2];
};

var replaceElementInArray = function(array) {
  array[1] = "Carter";
  return array[1];
};

function removeElementFromArray(array) {
  array.splice(2,2,"Roast Chicken");
  return array;
}

function iterateArray(array) {
  var newNums = [];
  array.forEach(function(number) {
    var updatedNum = number + 5;
    newNums.push(updatedNum);
    }
  );
  return newNums;
}