'use strict';

function createArray() {
  var x= ["snickers", "hundred grand", "kitkat", "skittles"];
  return x;
}

function addElementToArray(array) {
  array.push('A Christmas Story');
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[1] ='Carter';
  return 'Carter';
}

function removeElementFromArray(array) {
  array.splice(2,3,'Roast Chicken');
  return array;
}

function iterateArray(array) {
  var newArray = new Array();
  array.forEach(function(item) {
    newArray.push(item + 5);
  });
  return newArray;
}
