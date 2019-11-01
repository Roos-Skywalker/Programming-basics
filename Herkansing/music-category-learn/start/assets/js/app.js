window.addEventListener('load', init);

//global variables
const myPlayList = {
    name: 'My Favourite 80s tracks',
    numbers: [
        {
            name: 'Wake me up be for you Go-Go',
            duration: 3.43,
            artist: 'Wham'
        },
        {
            name: 'Never gonna give you up',
            duration: 3.30,
            artist: 'Rick Astley'
        },
        {
            name: 'The final countdown',
            duration: 3.57,
            artist: 'Europe'
        }
    ]
}

/**
 * @function
 * This function initializes the event.
 */
function init(event) {
    const submitButton = document.getElementById('sbmButton');
    submitButton.addEventListener('click', clickHandler);
}

/**
 * 
 * @function
 * This function allows the other functions to activate after clicking the button.
 */
function clickHandler(event){
    event.preventDefault();
    addDuration();
    writeSelectionToDom();
}

/**
 * @function
 * This function will add all song times, to get the total duration of the playlist. Then it will write that to the DOM.
 */
function addDuration(){
    let total = 0;
    for (let i = 0; i < myPlayList.numbers.length; i++) {
        total += myPlayList.numbers[i].duration;
//        realTotal = Math.max(total); Redundant, but working piece of code to filter the highest value.
//        console.log(realTotal); Used for debugging the calculations in the function.
    }
    const airtime = document.getElementById('total-airtime'); //Write to DOM for the total playlist duration
    airtime.innerText = total;
}
/**
 * @function
 * This function writes your selection to the DOM.
 */
function writeSelectionToDom(){
    const artist = document.getElementById('artist');
    const number = document.getElementById('number');
    const duration = document.getElementById('duration');
        if (document.getElementById('inputNumber').value === "Wake me up be for you Go-Go"){
            artist.innerText = myPlayList.numbers[0].artist;
            number.innerText = myPlayList.numbers[0].name;
            duration.innerText = `Duration: ${myPlayList.numbers[0].duration} minutes`;
        }
        else if (document.getElementById('inputNumber').value === "Never gonna give you up"){
            artist.innerText = myPlayList.numbers[1].artist;
            number.innerText = myPlayList.numbers[1].name;
            duration.innerText = `Duration: ${myPlayList.numbers[1].duration} minutes`;
        }
        else if (document.getElementById('inputNumber').value === "The final countdown"){
            artist.innerText = myPlayList.numbers[2].artist;
            number.innerText = myPlayList.numbers[2].name;
            duration.innerText = `Duration: ${myPlayList.numbers[2].duration} minutes`;
        }
}