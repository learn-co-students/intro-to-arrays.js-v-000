'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(movieArray){
  movieArray.push("A Christmas Story");
  return movieArray;
}

function accessElementFromArray(statesArray){
  return statesArray[2];
}

function replaceElementInArray(namesArray){
  namesArray[1] = "Carter";
  return namesArray[1];
}

function removeElementFromArray(foodArray){
  foodArray.splice(2, 2, "Roast Chicken");
  return foodArray;
}

function iterateArray(numbersArray){
  var newNumbers = [];
  numbersArray.forEach(function(num){
    newNumbers.push(num + 5);
  });
  return newNumbers;
}
