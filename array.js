'use strict';

function createArray(){
  var candies = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candies;
}

function addElementToArray(movies){
  movies.push("A Christmas Story");
  return movies;
}

function accessElementFromArray(states){
  return states[2];
}

function replaceElementInArray(names){
  names[1] = "Carter"
  return names[1];
}

function removeElementFromArray(dishes){
  dishes.splice(2,2)
  dishes.push("Roast Chicken")
  return dishes;
}

function iterateArray(numberarr){
  var newNums=[];
  numberarr.forEach(function(num){
    newNums.push(num + 5);
  });
  return newNums;
}