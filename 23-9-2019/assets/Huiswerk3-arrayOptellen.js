let stupidArray = [2, 4, 8, 9, 12, 13]
function arrayOptellen(stupidArray){
  let arrayResult = 0;
  for(let i = 0; i < stupidArray.length; i++){
    arrayResult += stupidArray[i]
  }
  return arrayResult;
}
console.log(arrayOptellen(stupidArray))