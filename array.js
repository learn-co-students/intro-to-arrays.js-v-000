'use strict';

 function createArray(){
   return ["snickers", "hundred grand", "kitkat", "skittles"];
 }

function addElementToArray(array){
  array.push('A Christmas Story');
  return array;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(array){
  array[1]='Carter';
  return array[1];
}

function removeElementFromArray(array){
  array.splice(2,2);
  array.push('Roast Chicken');
  return array;
}

function iterateArray(array){
  array.forEach(function(number, index){
    array[index]=number+5;
  });
  return array;
}

// console.log(iterateArray([1, 2, 3]));