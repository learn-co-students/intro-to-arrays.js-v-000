'use strict';

function createArray() {
  var cat = ["snickers", "hundred grand", "kitkat", "skittles"];
  return cat;
}

function addElementToArray(movies){
  movies.push("A Christmas Story");
  return movies;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(thing) {
    thing[1]="Carter";
    return thing[1];
}

function removeElementFromArray(thing){
  thing.splice(2,2,"Roast Chicken");
  return thing;
}

function iterateArray(nums){
  var newNums= [];
  nums.forEach(function(aNum) {
    newNums.push(aNum+5);
  });
  return newNums;
}
