'use strict';

function createArray() {
    var someArray = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
    return someArray;
}

function addElementToArray(array) {
    array.push('A Christmas Story');
    return array;
}

function accessElementFromArray(states) {
    return states[2];
}

function replaceElementInArray(array) {
    array[1] = "Carter";
    return array[1];
}

function removeElementFromArray(dishes) {
    dishes.splice(2, 2, "Roast Chicken");
    return dishes;
}

function iterateArray(numbers) {
    var newNums = [];
    numbers.forEach(function (num) {
        newNums.push(num + 5);
    });
    return newNums;
}
