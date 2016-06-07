'use strict';


function createArray(){
  var array = ["snickers","hundred grand","kitkat","skittles"];
    return array
}

function addElementToArray(array){
  array.push("A Christmas Story");
     return array
}

function accessElementFromArray(arrayStates){
	return (arrayStates)[2];
}

function replaceElementInArray(arrayNames){
  arrayNames[1] = "Carter";
  return arrayNames[1]
 }

 function removeElementFromArray(arrayDish){
 	arrayDish.splice(2, 2, "Roast Chicken");
 	 return arrayDish
 }

 function iterateArray(arrayNums){
 	var newNums = [ ];
 	   arrayNums.forEach(function(num){
 	  var add = num + 5;
 	     newNums.push(add);
 	     })
 	      return newNums
 	
 }