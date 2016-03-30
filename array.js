'use strict';
var createArray = function(){
  var arrayName = ["snickers", "hundred grand", "kitkat", "skittles"];
  return arrayName
}

var addElementToArray = function(array){
  array.push("A Christmas Story")
  return array
}

var accessElementFromArray = function(states){
  return states[2]
}

var replaceElementInArray = function(names){
  names[1] = "Carter";
  return names[1]
}

var removeElementFromArray = function(dishes){
  dishes.splice(2,2,"Roast Chicken");
  return dishes
}

var iterateArray = function(numbers){
  var newNums = [];

  numbers.forEach(function(number){
    newNums.push(number + 5)
  });

  return newNums
}