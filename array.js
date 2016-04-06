function createArray(){
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

function addElementToArray(ary){
  ary.push("A Christmas Story");
  return ary;
}

function accessElementFromArray(ary){
  return ary[2];
}

function replaceElementInArray(ary){
  ary[1] = "Carter";
  return ary[1];
}

function removeElementFromArray(ary){
  ary.splice(2,2,"Roast Chicken");
  return ary;
}

function iterateArray(ary){
  var newNums = [];
  ary.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
