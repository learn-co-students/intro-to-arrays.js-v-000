'use strict';

function createArray(){
  var arr = ["snickers", "hundred grand", "kitkat", "skittles"];
  return arr;
}

function addElementToArray(array){
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(array){
  array[1] = "Carter";
  return array[1]
}

function removeElementFromArray(array){
  array.splice(2, 2, "Roast Chicken");
  return array;
}

function iterateArray(array){
  var newNums = [];
  array.forEach(function(number, index){
    newNums[index] = array[index] + 5;
  });
  return newNums;
}