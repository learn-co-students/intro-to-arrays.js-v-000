'use strict';

function createArray() {
  var array = new Array();
  array.push("snickers", "hundred grand", "kitkat", "skittles");
  return array;
}

function addElementToArray(array) {
 array.push('A Christmas Story');
return array;
}

function accessElementFromArray(array) {
return array[2];
}

function replaceElementInArray(array) {
  return array[1] = "Carter";
}

function removeElementFromArray(array) {
  array.splice(2,2,"Roast Chicken");
  return array;
}

function iterateArray(array) {
  var newNums = new Array();
  array.forEach(function(number){
    newNums.push(number + 5);
  });
  return newNums;
}
