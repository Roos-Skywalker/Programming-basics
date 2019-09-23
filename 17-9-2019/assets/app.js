console.log('jippie');

let currentAction = 'strings';
//rekenen
if (currentAction == 'calculating'){
    /* als calculating
    Optellen aftrekken delen vermenigvuldigen */
    let y = 5;
    let x = 10;
    console.log(y + x);
}

else if (currentAction == 'strings'){
    /* Als strings
    uppercase length match substring charat */
    let sentence = 'I am the '
    console.log('String: match', sentence.match('the'));
    console.log('String: substring', sentence.substring(2));
}

else if (currentAction == 'boolean'){
    /* Als boolean
    check of bepaald cijfer hoog genoeg is */
    const numberOfRings = 10;
    if (numberOfRings < 10)

    console.log('optellen', y + x);
}

else (currentAction == 'default'){
    /* default
    currentAction kan niet worden uitgevoerd */
    let y = 'Yeet';
    let x = 'Gekoloniseerd';
    console.log('optellen', y + x);
}