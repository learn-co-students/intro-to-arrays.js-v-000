'use strict';

function createArray(){
  return [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];
}

function addElementToArray(arr){
  arr.push('A Christmas Story');
  return arr;
}

function accessElementFromArray(arr){
  return arr[2];
}

function replaceElementInArray(arr){
  arr[1] = 'Carter';
  return arr[1]
}

function removeElementFromArray(arr){
  arr.splice(2, 2, 'Roast Chicken');
  return arr;
}

function iterateArray(arr){
  return arr.map(function(i){
    return i + 5;
  });
}