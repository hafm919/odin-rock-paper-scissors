let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let choice=Math.ceil(Math.random()*3);
    
    if (choice===1) return 'Rock';
    else if(choice===2) return 'Paper';
    else return 'Scissors';
}

function getHumanChoice(){
    let choice=parseInt(prompt("1:Rock, 2: Paper, 3:Scissors"));
    if (choice===1) return 'Rock';
    else if(choice===2) return 'Paper';
    else return 'Scissors';

}

function playRound(){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    console.log(computerChoice);
    let winner=-1; //0:computer 1:player
    if (humanChoice==='Rock'){
        if(computerChoice==='Paper'){
            winner=0
        }
        else if (computerChoice==='Scissors'){
            winner=1
        }
    }
    else if (humanChoice==='Paper'){
        if(computerChoice==='Scissors'){
            winner=0
        }
        else if (computerChoice==='Rock'){
            winner=1
        }
    }
    else if (humanChoice==='Scissors'){
        if(computerChoice==='Rock'){
            winner=0
        }
        else if (computerChoice==='Paper'){
            winner=1
        }
    }

    if(winner===0){
        console.log('Computer won')
        computerScore+=1
    }
    else if(winner===1){
        console.log('Human won')
        humanScore+=1
    }
    else{
        console.log('Tie')
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        playRound();
    }
    console.log("Score- Human:"+humanScore+" Computer:"+ computerScore);
    if (humanScore>computerScore) console.log("You won!");
    else if(humanScore<computerScore) console.log("You lost!");
    else console.log("You tied!");
}

playGame();