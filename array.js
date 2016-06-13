'use strict';

function createArray(){
  return new Array('snickers', 'hundred grand', 'kitkat', 'skittles');
}

function addElementToArray() {
  var arr = new Array();
  arr.push('Home Alone', 'Love Actually', 'Elf', 'A Christmas Story')
  return arr;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(array) {
  return array[1] = 'Carter';
}

function removeElementFromArray(array) {
  array.splice(2, 2);
  array.push("Roast Chicken")
  return array;
}

function iterateArray(array) {
  var newNums = new Array()
  array.forEach(function(letter, index){
    newNums.push(index+6)
  });
  return newNums;
}
