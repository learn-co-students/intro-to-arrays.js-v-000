'use strict';

function createArray() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

addElementToArray(array){
  array.push('Daredevil');
  return array;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(names){
   array[1] = "Carter";
  return array [1];
}

function removeElementFromArray(array){
  array.splice(2, 2, 
"Roast Chicken");
  return array;
}


function iterateArray(array) {
  var newNums = [];

  array.forEach(function(number) {
    newNums.push(number + 5);
  });

  return newNums;
}
