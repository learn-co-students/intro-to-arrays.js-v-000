'use strict';

function createArray(){
  var candies = ["snickers", "hundred grand", "kitkat", "skittles"]
  return candies
}

function addElementToArray(array){
 array.push ("A Christmas Story")
 return array
}

function accessElementFromArray(array){
  return array[2]
}

function removeElementFromArray(array){
  array.splice(2, 4, "Roast Chicken")
  return array
}

function iterateArray(array) {
  var newNums = [];
  array.forEach(function(num) {
    newNums.push(num + 5)
  });
  return newNums
}

function replaceElementInArray(array){
  array[1] = "Carter"
  return array[1]
}
