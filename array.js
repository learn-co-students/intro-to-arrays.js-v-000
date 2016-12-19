function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
}

function addElementToArray(array){
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(statesArray) {
  return statesArray[2];
}

function replaceElementInArray(namesArray) {
  namesArray[1] = "Carter";
  return namesArray[1];
}
function removeElementFromArray(dishes) {
  dishes.splice(2, 2);
  dishes.push("Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var newNums = new Array();
  numbers.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}
