'use strict';

function createArray(){
  var candy = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candy;
}

function addElementToArray(christmasMovies){
christmasMovies.push("A Christmas Story");
  return christmasMovies;
}

function accessElementFromArray(states){
  return states[2];
}

function replaceElementInArray(names){
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(nmbers) {
var newNums = new Array();
 nmbers.forEach(function(letter){
  newNums.push(letter + 5)
 });
  return newNums;
}