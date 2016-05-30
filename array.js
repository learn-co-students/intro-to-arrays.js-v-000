'use strict';

function createArray()  {
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToArray()  {
  var array = ["A Christmas Story"]
  array.push("Home Alone", "Love Actually", "Elf", "A Christmas Story")
  array.shift("A Christmas Story")
  return array
}

function accessElementFromArray(array) {
  return array[2]
}

function replaceElementInArray(array)  {
  return array[1] = "Carter"
}

function removeElementFromArray(array) {
  array.splice(2,2, 'Roast Chicken')
  return array
}

function iterateArray(array) {
  var new_array = []
  array.forEach(function(index)
  {
    new_array.push(index + 5)

  })
    return new_array
}
