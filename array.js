'use strict';

function createArray (){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray (moviesArray){
  moviesArray.push("A Christmas Story");
  return moviesArray;
}

function accessElementFromArray (statesArray){
  return statesArray[2];
}

function replaceElementInArray (namesArray){ 
  namesArray[1] = "Carter";
  return namesArray[1];
}

function removeElementFromArray (dishesArray){
  dishesArray.splice(2, 2, "Roast Chicken");
  return dishesArray;
}

function iterateArray (numbersArray){
  var newNums = new Array();
  numbersArray.forEach(function(number){
    newNums.push(number + 5);
  });
  
  return newNums;
}