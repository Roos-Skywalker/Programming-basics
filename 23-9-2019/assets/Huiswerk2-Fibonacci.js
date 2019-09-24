let eersteGetallenReeks = 1;
let tweedeGetallenReeks = 0;
let antwoord = eersteGetallenReeks + tweedeGetallenReeks;
while (antwoord <= 100) {
  tweedeGetallenReeks = eersteGetallenReeks;
  eersteGetallenReeks = antwoord;
  antwoord = eersteGetallenReeks + tweedeGetallenReeks;
  console.log(antwoord + '')
}

// var firstNum = 1;
// var secondNum = 0;
// var answer = firstNum + secondNum;
// while (answer < 1000) {
//   document.write(answer+'<br />');
//   secondNum = firstNum;
//   firstNum = answer;
//   answer = firstNum + secondNum;                  
// }