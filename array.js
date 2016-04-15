'use strict';

function createArray(){
  var words=["snickers", "hundred grand", "kitkat",  "skittles"];

  return words;

}

function addElementToArray(words){
  
  words.push("A Christmas Story");
  return words;

}

function accessElementFromArray(states){

  return states[2];

}

function replaceElementInArray(word){

  return word[1]="Carter";
}

function removeElementFromArray(word){
   word.splice(2, 2)
   word.push('Roast Chicken');
  return word
}

function iterateArray(nums){
    var newNums=[];
  
  nums.forEach(function(num){
    newNums.push(num+5);

  });
    
 
  return newNums;
}
