import pandaFlip from './panda-flip.js';
const submitFlip = document.getElementById('submit');
const pandaSide = document.getElementById('panda');
const messageSays = document.getElementById('message');
const headsGuess = document.getElementById('heads');
const winsCount = document.getElementById('wins');
const lossesCount = document.getElementById('losses');

// defining scoring variables
let wins = 0;
let losses = 0;

//flip or submit the panda flip
submitFlip.addEventListener('click', () => {
    const randomNum = Math.random();
    
//change image display update src 
    const flip = pandaFlip(randomNum);
    let image = '';
    if(flip === 'heads'){
        image = './assets/pandaHead4.png';
    }
    else {
        image = './assets/pandaButt2.jpeg';
    }

    pandaSide.src = image;

//did the user guess correctly?
    let userGuess = '';
    if(headsGuess.checked) {
        userGuess = 'heads';
    }
    else { 
        userGuess = 'tails';
    }

//show message
    if(flip === userGuess) {
        messageSays.textContent = 'Ye!';
        wins++;
        winsCount.textContent = 'Wins: ' + wins; 
        messageSays.classList.remove('loss');
        messageSays.classList.add('win');

    }
    else {
        messageSays.textContent = 'Soz no.';
        losses++;
        lossesCount.textContent = 'Losses: ' + losses; 
        messageSays.classList.remove('win');
        messageSays.classList.add('loss');

    }
});

