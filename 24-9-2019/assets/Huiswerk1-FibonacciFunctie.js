function ikHaatWiskunde(Fibonacci){
    let eersteGetallenReeks = 1;
    let tweedeGetallenReeks = 0;
    let antwoord = eersteGetallenReeks + tweedeGetallenReeks;
    while (antwoord <= 100) {
    tweedeGetallenReeks = eersteGetallenReeks;
    eersteGetallenReeks = antwoord;
    antwoord = eersteGetallenReeks + tweedeGetallenReeks;
    console.log(antwoord + '')
    }
    return antwoord;
}
(ikHaatWiskunde(2))

//But I like programming