let computerPoints = 0;
let playerPoints = 0; 

function game(){

    for (let i = 0; i < 5; i++){

let playerSelection = prompt("what is your choice");
    playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice(); 

function getComputerChoice(){
    let randomHand = Math.floor(Math.random() * 3) + 1;

    switch (randomHand){
        case 1:
           return 'rock';
           break;
        case 2:
            return 'paper';
            break;
        case 3:
            return'scissors'; 
            break;

        default: 
        console.log('something went wrong');
    }
}

    
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'you lose! paper beats rock';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'you win! rock beats scissors';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'you win! paper beats rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'you lose! scissors beats paper';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'you lose! rock beats scissors';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'you win! scissors beats paper';
    }
    else if(playerSelection == computerSelection){
        return "it's a tie."
    }
    else { return 'something is wrong'};
}

console.log(playRound(playerSelection, computerSelection));

let statement = playRound(playerSelection, computerSelection); 
statement = statement.substring(0, 5);

function scoreBoard () {
    if(statement == 'you w'){
        return playerPoints += 1;
    }
    else if(statement == 'you l'){
        return computerPoints += 1;
    }
    else {
        return;
    }
}

scoreBoard();

console.log(`your score: ${playerPoints} computer score: ${computerPoints}`);


}
}

game();

if (playerPoints > computerPoints){
    console.log('ur the weiner')
}
else if(playerPoints < computerPoints){
    console.log('u lost u weiner')
}
else{
    console.log('its a tie. you both suck')
}