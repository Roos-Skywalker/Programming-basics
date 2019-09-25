//Variables
const job = 'teacher';
const purchasedBook = false;
const inTrain = true;
//nested elseif
if (purchasedBook === true && inTrain === true && job === 'teacher'){
    console.log('Finally I can enjoy my book!');
}
else if (purchasedBook === true){
    if (inTrain === true && job !== 'teacher'){
        console.log('You can\'t read a book, because you aren\'t a teacher and because my programming tells me that it\'s so.');
    }
    else if (inTrain === false){
        console.log('Whether you are a teacher or not, you have no time to read right now.');
    }
}
else{
    console.log('No book for me \u{1F614}')
}

//My failed attempted at creating a nested elseif inside an elseif

// if (purchasedBook === true && inTrain === true && job === 'teacher'){
//     console.log('finally I can enjoy my book!');
// }
// else if (purchasedBook === true){
//     if (inTrain === true && job !== 'teacher'){
//         console.log('You can\'t read a book, because you aren\'t a teacher and because my programming tells me that it\'s so.');
//     }
//     else if (inTrain === true){
//         if (job === 'teacher'){
//             console.log(finally I can enjoy my book!);
//         }
//     }
// else {
//     console.log('No book for me \u{1F614}')
//     }
// }