'use strict';

function createArray() {
  var candies = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candies;
}

function addElementToArray(array) {
  var christmasMovies = ["Home Alone", "Love Actually","Elf"];
  christmasMovies[3] = "A Christmas Story";
  return christmasMovies;
}

function accessElementFromArray(states) {
  var states = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  return states[2];
}

function replaceElementInArray(names) {
  var names = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(dishes) {
  var dishes = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
  var removedDishes = dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var newNums = [];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}



