let getal = 0;
while (getal < 10) {
  getal++;
  console.log(getal)
}

let begin = 0;
let output = 'Het is weer maandag!'
while (begin < output.length) {
  begin++;
  console.log(output.charAt(begin));
}

// let word = 'Geweldig';
// let wordTurn = '';
// let k = word.length;
// while (k => 0) {
//   k--;
//   wordTurn = wordTurn + word.charAt(k);
//   console.log(wordTurn);
// }

let word = 'Geweldig';
let wordTurn = '';
let k = word.length-1;
while (k >= 0) {
  wordTurn = wordTurn + word.charAt(k);
  k--;
  console.log(wordTurn);
}