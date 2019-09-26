/*Hoisting is the act of Javascript automatically moving all variables to the top of the current script or the current function.
Yet, this does not always work. Here I explain why.*/

//We start off with let and const and how these variables interact with hoisting.
// function hoisting(){
//     let liftMeUp = 3;
//     console.log(liftMeUp + iHaveFallenAndCantGetUp);
//     let iHaveFallenAndCantGetUp = 5;
// }
// (hoisting())
/*As you can see, hoisting the second variable is impossible and produces the following error on Firefox:
ReferenceError: can't access lexical declaration `iHaveFallenAndCantGetUp' before initialization
The reason let iHaveFallenAndCantGetUp cannot be hoisted is because let and const variables simply cannot be hoisted at all.*/

//Here is an example of the function hoisting succesfully producing the number 8, because it was manually declared at the top of the statement.
// function hoisting(){
//     let liftMeUp = 3;
//     let iHaveFallenAndCantGetUp = 5;
//     console.log(liftMeUp + iHaveFallenAndCantGetUp);
// }
// (hoisting())

//Here is an example of hoisting using var.
// function hoisting(){
//     var liftMeUp = 3;
//     var iHaveFallenAndCantGetUp = 5;
//     console.log(liftMeUp + iHaveFallenAndCantGetUp);
// }
// (hoisting())
/*It just works, because I properly declared my variables at the top, just as I did in the previous hoisting example.*/

//Letting Javascript hoist var.
// function hoisting(){
//     var liftMeUp = 3;
//     console.log(liftMeUp + iHaveFallenAndCantGetUp);
//     var iHaveFallenAndCantGetUp = 5;
// }
// (hoisting())
/*Hoisting the second variable, aka iHaveFallenAndCantGetUp works, but it produces the following error on Firefox: NaN (Not a Number)
Why? Because the declaration of the variable is hoisted, but not the initialization.
Reminder: iHaveFallenAndCantGetUp = declaration and = 5 is the initialization*/

//However, hoisting would work properly if 
function hoisting(){
    iHaveFallenAndCantGetUp = 3;
    console.log(iHaveFallenAndCantGetUp);
    var iHaveFallenAndCantGetUp;
}
(hoisting())
//Produces the number 3 as intended.
/*Hoisting works in this instance because the variable iHaveFallenAndCantGetUp has no initialization at the bottom of the code block.
At the top of the code block, the declaration was initialized before it became a proper variable.
So when var iHaveFallenAndCantGetUp was hoisted, it turned the existing declaration into a proper variable,
and since the initialization was already at the top, it didn't need to be hoisted. (Which wouldn't work anyways)*/