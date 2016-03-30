'use strict';
function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
  }

function addElementToArray(oneArr) {
  oneArr.push("A Christmas Story");
  return oneArr;
}

function accessElementFromArray(twoArr) {
  return twoArr[2];
}

function replaceElementInArray(threeArr) {
  threeArr[1] = "Carter";
  return threeArr[1];
}

function removeElementFromArray(fourArr) {
  fourArr.splice(2,2, "Roast Chicken");
  return fourArr;
}

function iterateArray(fiveArr) {
  var newNums = [];
  fiveArr.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}