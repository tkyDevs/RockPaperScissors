const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let myScore = document.getElementById('player');
let pcScore = document.getElementById('pc');
let result = document.getElementById('result');
let player = 0;
let pc = 0;

rock.addEventListener('click', () => playTurn('rock'));
paper.addEventListener('click', () => playTurn('paper'));
scissors.addEventListener('click', () => playTurn('scissors'));


function getRandomMove() {
    let moves = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function playTurn(move) {
    let pcMove = getRandomMove();
    if (move === pcMove) {
        result.textContent = `Draw! You played ${move}. PC played ${pcMove}.`;
    } else if ((move === 'rock' && pcMove === 'scissors') || (move === 'paper' && pcMove === 'rock') || (move === 'scissors' && pcMove === 'rock')) {
        player += 1;
        result.textContent = `You Win! You played ${move}. PC played ${pcMove}.`;
    } else {
        pc += 1;
        result.textContent = `You Lose! You played ${move}. PC played ${pcMove}.`;
    }
    updateScoreboard();
}

function updateScoreboard() {
    myScore.textContent = player;
    pcScore.textContent = pc;
}