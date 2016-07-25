'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToArray(arr) {
  arr.push("A Christmas Story")
  return arr
}

function accessElementFromArray(arr) {
  return arr[2]
}

function replaceElementInArray(arr) {
  return arr[1] = "Carter"
}

function removeElementFromArray(arr) {
  arr.splice(2, 2, "Roast Chicken")
  return arr
}

function iterateArray(arr) {
  var newNums = []
  arr.forEach(function(number) {
    number += 5
    newNums.push(number)
  })
  return newNums
}
