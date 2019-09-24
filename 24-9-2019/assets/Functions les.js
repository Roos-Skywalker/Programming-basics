/*function doNotShoutMyName(myName) {
    let message = '... whispering ...' + myName;
    return message;
}

let messageOutsideTheFunction = doNotShoutMyName('Roos');
console.log(messageOutsideTheFunction)*/

// of, werkt alleen als de functie een return statement heeft.

/*console.log(doNotShoutMyName('Roos'))*/

// Meerdere variabelen in een functie

/*function doNotShoutMyName(myName, word) {
    let message = `Saying ${word} ${myName}`;
    return message;
}

let messageOutsideTheFunction = doNotShoutMyName('Roos, Hi');*/

// Eerste opdracht in de les nice

/*function thereAreOnlyTwoGenders(gender) {
    let newName = null;
    if (gender === 'vrouw'){
        newName = 'Annemarie';
    }
    else if (gender = 'man'){
        newName = 'Jake';
    }
    else{
        newName = 'Dat is geen geslacht';
    }
    return newName;
}

let genderOutsideFunction = thereAreOnlyTwoGenders('vrouw');
console.log(thereAreOnlyTwoGenders('vrouw'));*/

//Emoji's kunnen ook gebruikt worden. Om de een of andere reden geeft deze functie minder pigs voor een hoger getal. Pigs aftrekken.

/*function numberOfPigs(pigs) {
    let pig = '\u{1F437}';
    let emptyString = '';
    while (pigs <= 10) {
    emptyString = emptyString + pig;
    pigs++;
    }
    return emptyString
}
console.log(numberOfPigs(5));*/

//Deze telt op lol

/*function numberOfPigs(pigs) {
    let pig = '\u{1F437}';
    let emptyString = '';
    let i = 1;
    while (i <= pigs) {
    emptyString = emptyString + pig;
    i++;
    }
    return emptyString
}
console.log(numberOfPigs(1));*/

//Hoe het hoort

/*function pigs(numberOfPigs){
let sentence = ''
for(let i = 1; i <=numberOfPigs; i++){
        sentence += '\u{1F437}';
    }
    sentence += 'knor';
    console.log(sentence);
}
pigs(3);*/

//Factorial loop

function factorial(num){
    let num1 = 1;
    for(let i = 0; i < num; i++){
        num1 = num1 * (i + 1);
    }
    return num1;
}
console.log('8! =', factorial(5))