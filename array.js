'use strict';

function createArray(){
  var bars = ["snickers", "hundred grand", "kitkat", "skittles"];
  return bars;

}

function addElementToArray(movie){
  movie.push('A Christmas Story');
  return movie
}

function accessElementFromArray(place){
  var element = place[2];
  return element
}

function replaceElementInArray(name){
  var new_name = name[1]= "Carter";
  return new_name
}

function removeElementFromArray(food){
  food.splice(2,2, "Roast Chicken");
  return food;
}

function iterateArray(nums){
  var new_nums = [];
  nums.forEach(function(num){
    new_nums.push(num + 5);
  });
return new_nums
}
