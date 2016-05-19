'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(stateArr) {
  return stateArr[2];
}

function replaceElementInArray(someArr) {
  someArr[1] = "Carter";
  return someArr[1];
}

function removeElementFromArray(someArr) {
  someArr.pop();
  someArr.pop();
  someArr.push("Roast Chicken")
  return someArr;
}

function iterateArray(someArr) {
  for (var i in someArr) {
    someArr[i] = someArr[i] + 5;
  }
  return someArr;
}
