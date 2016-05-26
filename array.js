'use strict';

function createArray() {
    var x = ["snickers", "hundred grand", "kitkat", "skittles"];
    return x;
}

function addElementToArray() {
    var x = ["Home Alone", "Love Actually", "Elf"];
    x.push("A Christmas Story");
    return x;
}

function accessElementFromArray() {
    var x = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
    return x[2];
}

function replaceElementInArray() {
    var x = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
    x[1] = "Carter";
    return x[1];
}

function removeElementFromArray() {
    var x = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
    x.splice(2, 2, "Roast Chicken");
    return x;
}

function iterateArray() {
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    x.forEach(function(number, index) {
        x[index] = number + 5;
    });
    return x;
}