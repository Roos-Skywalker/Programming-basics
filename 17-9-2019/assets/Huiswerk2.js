const cijfer = 7;
const onvoldoende = cijfer < 6;
console.log(onvoldoende);
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

/*const onvoldoende = cijfer <= 6 && cijfer > 7 ? 'onvoldoende' : 'voldoende';
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
}
const voldoende = cijfer >= 7 ? 'voldoende' : 'goed';
switch(voldoende){
    case 'goed':
        console.log('Goed')
    break;
    case 'voldoende':
        console.log('Voldoende')
    break;
}
const voldoende = cijfer >= 6 ? 'voldoende' : 'onvoldoende';
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