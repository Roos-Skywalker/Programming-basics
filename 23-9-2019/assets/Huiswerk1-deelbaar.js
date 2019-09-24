//Alle getallen die deze loop produceert zijn deelbaar door 4.
let getal = 0;
while (getal <= 100) {
  getal++;
  if (getal % 4 === 0) {
      console.log(getal + ' Dit is deelbaar door 4')
  }
  else {
      console.log(getal + ' Dit is niet deelbaar door 4')
  }
}