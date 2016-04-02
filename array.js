'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(argument) {
  argument.push("A Christmas Story");
  return argument;
}

function accessElementFromArray(argument) {
  return argument[2];
}

function replaceElementInArray(argument) {
  return argument[1] = "Carter";
}

function removeElementFromArray(argument) {
  argument.splice(2, 2, "Roast Chicken");
  return argument;
}

function iterateArray(argument) {
  var newNums = [];
  argument.forEach(function(num){

    newNums.push(num+5);
  });
  return newNums;

}