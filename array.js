'use strict';

function createArray() {
   var array = ["snickers", "hundred grand", "kitkat", "skittles"];
   return array
}

function addElementToArray(array){
  array.push("A Christmas Story");
  return array
}

function accessElementFromArray(arrayOfStates){
  return arrayOfStates[2];
}

function replaceElementInArray(arrayOfNames){
  return arrayOfNames[1] = "Carter"
}

function removeElementFromArray(dishes){
  dishes.splice(2, 3, "Roast Chicken");
  return dishes
}

function iterateArray(array) {
  var newA = [];
  array.forEach(function(numbers) {
    newA.push(numbers + 5);
  })
  return newA
}