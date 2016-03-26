'use strict';
var jasmine = require('jasmine-node');
var jsdom = require('jsdom');
var path = require('path');
describe("Jasmine Walkthrough", function(){
var createArray, addElementToArray, accessElementFromArray, replaceElementInArray, removeElementFromArray, iterateArray;
beforeEach(function(done) {
 var codeJs = path.resolve(__dirname, '..', 'array.js');
 jsdom.env({
   html: '<div></div>',
   scripts: [codeJs],
   onload: function(window) {
     createArray = window.createArray;
     addElementToArray = window.addElementToArray;
     accessElementFromArray = window.accessElementFromArray;
     replaceElementInArray = window.replaceElementInArray;
     removeElementFromArray = window.removeElementFromArray;
     iterateArray = window.iterateArray;
     done();
   }
 });
});

describe('#createArray', function(){
  it("should return an array of strings", function(){
      expect(createArray()).toEqual(["snickers", "hundred grand", "kitkat", "skittles"])
  });
});

describe('#addElementToArray', function(){
  it("should return an array of Christmas movies", function(){
      expect(addElementToArray(["Home Alone", "Love Actually", "Elf"])).toEqual(['Home Alone', 'Love Actually', 'Elf', 'A Christmas Story'])
  });
});

describe('#accessElementFromArray', function(){
  it("should returns the third item in the array", function(){
      expect(accessElementFromArray(["New York", "California", "Virginia", "Louisiana", "Nevada"])).toEqual("Virginia")
  });
});

describe('#replaceElementInArray', function(){
  it("should replace the second item in array with 'Carter' and return that item", function(){
      expect(replaceElementInArray(["Joe", "Tim", "Stephen", "Sarah", "Stephanie"])).toEqual("Carter")
  });
});

describe('#removeElementFromArray', function(){
  it("should remove the third and fourth item from the array and add 'Roast Chicken'", function(){
      expect(removeElementFromArray(["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"])).toEqual(["Pasta Alfredo", "Grilled Salmon", "Roast Chicken"])
  });
});


describe('#iterateArray', function(){
  it("should iterate over an original array to create a new array with updated elements from the original array'", function(){
      expect(iterateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  });
});
});


