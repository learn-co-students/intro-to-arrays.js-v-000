'use strict';
function createArray() {
  var candy = ["snickers", "hundred grand", "kitkat", "skittles"];
   return candy;

}

function addElementToArray(array) {
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

function removeElementFromArray(dishes) {
    var remove = dishes.splice(2, 3, 'Roast Chicken');
    return dishes;
}

function iterateArray(numbers) {
     var newNums = new Array();
      numbers.forEach(function(number)
      {newNums.push(5 + number);});
      return newNums;
}
