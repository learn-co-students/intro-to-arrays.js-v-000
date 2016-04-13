'use strict';

function createArray() {
  var candies = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candies;
}

function addElementToArray(arr) {
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  return names[1] = "Carter";
}

function removeElementFromArray(dishes) {
  dishes.splice(2,2, 'Roast Chicken');
  return dishes;
}

function iterateArray(nums) {
  var newNums = [];
  nums.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}