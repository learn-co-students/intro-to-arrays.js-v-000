'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(christmasMovies) {
    christmasMovies.push("A Christmas Story");
    return christmasMovies
}
function accessElementFromArray(array) {
  return array[2]
}

function replaceElementInArray(array) {
  return array[1]= "Carter";
}

function removeElementFromArray(array) {
  array.splice(2, 2, 'Roast Chicken');
   return array
}

function iterateArray(array) {
  var newNums=[]
  array.forEach(function(nums, index) {
    newNums.push(nums + 5);
  });
  return newNums;
}
