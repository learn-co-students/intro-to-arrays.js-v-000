'use strict';
function createArray() {
  var newArray = ["snickers", "hundred grand", "kitkat", "skittles"];
  return newArray;
}

function addElementToArray(array){
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
   array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(array) {
  array.splice(2, 2, "Roast Chicken");
  return array;

}

function iterateArray(array) {
  var newNums = new Array();
  array.forEach(function(num){
      var number = num+5;
      newNums.push(number);
  });
  return newNums;


}
