'use strict';

const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const userChoiceEl = document.getElementById('user-choice');
const compChoiceEl = document.getElementById('comp-choice')
const resultEl = document.getElementById('result');

let userScore = 0;
    let compScore = 0;



const getCompChoice = function(){
    const weapons = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.trunc(Math.random()*3);
    const randomChoice = weapons[randomNumber];
    return randomChoice;
    console.log(randomChoice);    
}
const getResult = function(userChoice, compChoice){
if (userChoice === 'rock'){
    if(compChoice === 'rock'){
        return 'Draw';
    }else if(compChoice === 'paper'){
        return 'lost';
    }else if (compChoice === 'scissor'){
        return 'won';
    }
}else if(userChoice === 'paper'){
    if(compChoice === 'rock'){
        return 'won';
    }else if(compChoice === 'paper'){
        return 'Draw';
    }else if(compChoice === 'scissor'){
        return 'lost';
    }
}else if (userChoice === 'scissor'){
    if(compChoice === 'rock'){
        return 'lost';
    }else if(compChoice === 'paper'){
        return 'won';
    }else if(compChoice === 'scissor'){
        return 'Draw';
    }
}

};

const updateScores = function(result, userChoice, compChoice){    
    if(result === 'won'){
        userScore++;
        userScoreEl.innerText = userScore;
        resultEl.innerText = `You Won`;
    }else if(result === 'lost'){
        compScore++;
        compScoreEl.innerText = compScore;
        resultEl.innerText = `You lost`;
    }else if(result === 'Draw'){
resultEl.innerText = `Draw`;
    }
    userChoiceEl.innerText = `Your choice ${userChoice.toUpperCase()}`;
    compChoiceEl.innerText = `Comp choice ${compChoice.toUpperCase()}`;
}

const playGame = function(weapons){
    const userChoice = weapons;
    const compChoice = getCompChoice();
    const result = getResult(userChoice, compChoice);
    console.log(userChoice, compChoice, result);
    updateScores(result, userChoice, compChoice);
}

