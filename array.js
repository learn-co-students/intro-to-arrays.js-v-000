'use strict';

function createArray(){
return ["snickers","hundred grand", "kitkat", "skittles"];


}

function addElementToArray(array){
  array.push("A Christmas Story");
  return array

};

function accessElementFromArray(array){
return array[2];


}

function replaceElementInArray(names){
  names[1]="Carter";
  return names[1];
}

function removeElementFromArray(dishes){
dishes.splice(2,2,"Roast Chicken");
return dishes

}

function iterateArray(array){
  var newNums=[]
  array.forEach(function(number){
newNums.push(number+5);

  });
  return newNums;
};
