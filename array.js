'use strict';

function createArray(){
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

function addElementToArray(arr){
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(stateArray){
  return stateArray[2];
}

function replaceElementInArray(nameArray){
  return nameArray[1] = "Carter";
}

function removeElementFromArray(dishArray){
  dishArray.splice(2,2, "Roast Chicken");
  return dishArray;
}

function iterateArray(numArray){
  var newNums = [];
  numArray.forEach(function(num){
    newNums.push(num + 5);
  });
  return newNums;
}
