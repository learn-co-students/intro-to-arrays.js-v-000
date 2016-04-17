'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToArray(arr) {
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(name){
  name[2] = "Carter";
  return name[2];
}

function removeElementFromArray(element) {
  element.splice(2,2,"Roast Chicken");
  return element;
}

function iterateArray(nums){
  var newNums = [];
  nums.forEach(function(number, index){
    var num = index + 1;;
    newNums.push(number+5);
  })
  return newNums
}
