'use strict';

function createArray() {

var test = ["snickers", "hundred grand", "kitkat", "skittles"];
return test;

}

function addElementToArray(arr) {
    arr.push("A Christmas Story");
    return arr;
}

function accessElementFromArray(arr) {
  return arr[2];
}

function replaceElementInArray(arr) {
  arr[1] = "Carter";
  return arr[1];
}

function removeElementFromArray(arr) {
  arr.splice(2,2,"Roast Chicken");
  return arr;
}

function iterateArray(arr) {

var newNums = [];
arr.forEach(function(num) {
  var test = num + 5;
  newNums.push(test);
});

return newNums;

}
