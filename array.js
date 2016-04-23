'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];

}

function addElementToArray(array){
  array.push('A Christmas Story');
  return array;

}

function accessElementFromArray(array){
  var third = array[2];
  return third;

}

function replaceElementInArray(firstArray){
  firstArray[1]="Carter";
  return firstArray[1];
}

function removeElementFromArray(array){
  array.splice(2, 2, 'Roast Chicken');
  return array;
}

function iterateArray(array){
  var newNums = [];
  array.forEach(function(number, index){
    newNums.splice(index, 1, number+5);
  })
  return newNums;
}