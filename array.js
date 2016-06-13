'use strict';
function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToArray(movie){
  movie.push("A Christmas Story");
  return movie;
}

function accessElementFromArray(states){
  return states[2];
}

function replaceElementInArray(author){
  return author[1] = "Carter";
}

function removeElementFromArray(dishes){
  dishes.splice(2, 3, "Roast Chicken")
  return dishes
}

function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
