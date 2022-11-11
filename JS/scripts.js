// assign empty variables to keep track of score
let computerPoints = 0;
let playerPoints = 0; 

// create variable to hold div that holds buttons
const selections = document.querySelector('.selections'); 

// create var to hold return message
const messages = document.createElement('div'); 
const body = document.querySelector('body');
body.appendChild(messages); 

// create var to hold return scoreboard
const scoreboard = document.createElement('div');
body.appendChild(scoreboard);

// create buttons and assign their id's/textContent. Then append
 const button = document.createElement('button');
 button.textContent = "Rock";
 button.id = 'button1'
 selections.appendChild(button);

 const button2 = document.createElement('button');
 button2.textContent = "paper";
 button2.id = 'button2';
 selections.appendChild(button2);

 const button3 = document.createElement('button');
 button3.id = 'button3';
 button3.textContent = "scissors";
 selections.appendChild(button3);


// create var to hold nodeList of buttons
let buttonSelections = document.querySelectorAll('.selections button');




// add eventListener to each node which triggers game()

buttonSelections.forEach((button) =>{
    button.addEventListener('click' , clicker)
})

function clicker (e){
    if (e.target.id === 'button1'){
        playerSelection = 'rock';
        game();
    }
    else if(e.target.id === 'button2'){
        playerSelection = 'paper';
        game();
    }
    else{
        playerSelection = 'scissors';
        game();
    }
}




// create function for game play
function game(){
 
    // to lower case var to ensure that result isn't case sensitive
    playerSelection = playerSelection.toLowerCase();

    // create a random choice for computer
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

getComputerChoice(); 

    // return results through the "messages" div
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        messages.textContent = 'you lose! paper beats rock';
        return 'l';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        messages.textContent = 'you win! rock beats scissors';
        return 'w';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        messages.textContent = 'you win! paper beats rock';
        return 'w';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        messages.textContent = 'you lose! scissors beats paper';
        return 'l';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        messages.textContent = 'you lose! rock beats scissors';
        return 'l';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        messages.textContent = 'you win! scissors beats paper';
        return 'w';
    }
    else if(playerSelection == computerSelection){
        messages.textContent = "it's a tie.";
        return 't'; 
        
    }
    else { messages.textContent = 'something is wrong'};
}

 //return the scoreboard based on the return value of playRound Function
let statement = '';
statement = playRound(playerSelection, computerSelection).substring(0, 1); 
 
// create conditions where scoreboard changes only when both scores are below 5. 
function scoreBoard () {
    while (playerPoints < 5 && computerPoints < 5){
    if(statement == 'w'){
        return playerPoints += 1;
    }
    else if(statement == 'l'){
        return computerPoints += 1;
    }
    else if (statement === 't'){
        return; 
    }
}
}
scoreBoard();

if (playerPoints === 5){
    messages.textContent = 'GAME OVER. player wins.';
}
else if (computerPoints === 5){
    messages.textContent = 'GAME OVER. computer wins.'
}
// display scoreboard in HTML 
scoreboard.textContent = `your score: ${playerPoints} computer score: ${computerPoints}`;


}




// }

// game();

//  if (playerPoints > computerPoints){
//      console.log('ur the weiner')
//  }
//  else if(playerPoints < computerPoints){
//      console.log('u lost u weiner')
//  }
//  else{
//      console.log('its a tie. you both suck')
//  }
