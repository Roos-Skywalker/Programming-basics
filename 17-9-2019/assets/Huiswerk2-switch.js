const cijfer = 10

const uitslag = cijfer < 6 ? 'o' : (cijfer < 7 ? 'v' : (cijfer < 9 ? 'g' : (cijfer <= 10 ? 'u' : 'default')));
switch(uitslag){
    case 'o':
        console.log('Onvoldoende')
    break;
    case 'v':
        console.log('Voldoende')
    break;
    case 'g':
        console.log('Goed')
    break;
    case 'u':
        console.log('Uitmuntend')
    break;
    default:
        console.log('Dit is een ongeldig getal')
    break;
}

/*const onvoldoende = cijfer < 6 ? 'onvoldoende' : cijfer = 6 || cijfer < 7 ? 'voldoende' : cijfer >= 7 || cijfer = 9 ? 'goed' : cijfer > 9 && cijfer <= 10 ? 'uitmuntend';
switch(onvoldoende){
    case 'onvoldoende':
        console.log('Onvoldoende')
    break;
    case 'voldoende':
        console.log('Voldoende')
    break;
    case 'goed':
        console.log('Goed')
    break;
    case 'uitmuntend':
        console.log('Uitmuntend')
    break;
    default:
        console.log('Dit is een ongeldig getal')
    break;
}*/

/*Alle andere code bevatten niet alle benodige variabelen. Legit alleen de onderste code werkt,
maar dat is omdat er maar 2 van de 4 uitkomsten worden gebruikt.*/

/*const onvoldoende = cijfer < 6;
switch(cijfer){
    case 0:
        cijfer = 'Voldoende'
        console.log('Voldoende')
    break;
    case 1:
        cijfer = 'Onvoldoende'
        console.log('Onvoldoende')
    break;
    default:
        console.log('Dit is een ongeldig getal')
    break;
}
console.log(onvoldoende);*/

/*const onvoldoende = cijfer < 6 && cijfer > 7 ? 'onvoldoende' : 'uitmuntend';
switch(onvoldoende){
    case 'uitmuntend':
        console.log('Uitmuntend')
    break;
    case 'goed':
        console.log('Goed')
    break;
    case 'voldoende':
        console.log('Voldoende')
    break;
    case 'onvoldoende':
        console.log('Onvoldoende')
    break;
    default:
        console.log('Dit is een ongeldig getal')
    break;
}*/

/*const onvoldoende = cijfer < 6 && cijfer > 7 ? 'onvoldoende' : 'uitmuntend';
switch(onvoldoende){
    case 'uitmuntend':
        console.log('Uitmuntend')
    break;
    case 'goed':
        console.log('Goed')
    break;
    case 'voldoende':
        console.log('Voldoende')
    break;
    case 'onvoldoende':
        console.log('Onvoldoende')
    break;
    default:
        console.log('Dit is een ongeldig getal')
    break;
}*/

/*const voldoende = cijfer >= 7 ? 'voldoende' : 'goed';
switch(voldoende){
    case 'goed':
        console.log('Goed')
    break;
    case 'voldoende':
        console.log('Voldoende')
    break;
}*/

/*const voldoende = cijfer >= 6 ? 'voldoende' : 'onvoldoende';
switch(voldoende){
    case 'voldoende':
        console.log('Voldoende')
    break;
    case 'onvoldoende':
        console.log('Onvoldoende')
    break;
    default:
        console.log('Dit is een ongeldig getal')
    break;
}*/