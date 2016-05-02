'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray() {
  var array = ["Home Alone", "Love Actually", "Elf"];
  array.push("A Christmas Story");
  return array
}

function accessElementFromArray() {
  var state = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  return state[2];
}

function replaceElementInArray() {
  var names = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
  names[1] = "Carter"
  return names[1];
}

function removeElementFromArray() {
  var dinner = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
  dinner.splice(2,2, "Roast Chicken");
  return dinner;
}

function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
