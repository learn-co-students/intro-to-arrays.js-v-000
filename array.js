'use strict';
function createArray(){
  return new Array("snickers", "hundred grand", "kitkat", "skittles");
};

function addElementToArray(ary){
  ary.push("A Christmas Story");
  return ary;
};

function accessElementFromArray(ary){
  return ary[2];
};

function replaceElementInArray(ary){
  return ary[1] = "Carter";
};

function removeElementFromArray(ary){
  ary.splice(2,2);
  ary.push("Roast Chicken");
  return ary;
};

function iterateArray(ary){
  return ary.map(function(i){
    return i + 5;
  });
};
