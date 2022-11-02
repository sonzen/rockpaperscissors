let randomHand = Math.floor(Math.random() * 3) + 1;
let computerSelection = getComputerChoice();

function getComputerChoice(){
    switch (randomHand){
        case 1:
           console.log('rock');
           break;
        case 2:
            console.log('paper');
            break;
        case 3:
            console.log('scissors'); 
            break;

        default: 
        console.log('something went wrong');
    }
}

