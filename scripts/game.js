let playerScore=0;
let computerScore=0;
let roundNo=1;

function getComputerChoice(){
    let choice=Math.ceil(Math.random()*3);
    
    if (choice===1) return 'shuriken';
    else if(choice===2) return 'shield';
    else return 'katana';
}


function playRound(humanChoice){
    let computerChoice=getComputerChoice();
    computerChoiceDisplay.style.content=`url(img/${computerChoice}.png)`;
    let winner=-1; //0:computer 1:player
    if (humanChoice==='shuriken'){
        if(computerChoice==='shield'){
            winner=0
        }
        else if (computerChoice==='katana'){
            winner=1
        }
    }
    else if (humanChoice==='shield'){
        if(computerChoice==='katana'){
            winner=0
        }
        else if (computerChoice==='shuriken'){
            winner=1
        }
    }
    else if (humanChoice==='katana'){
        if(computerChoice==='shuriken'){
            winner=0
        }
        else if (computerChoice==='shield'){
            winner=1
        }
    }

    if(winner===0){
        console.log('Computer won')
        computerScore+=1
        computerScoreDisplay.textContent=computerScore;
    }
    else if(winner===1){
        console.log('Human won')
        playerScore+=1
        playerScoreDisplay.textContent=playerScore;
    }
    else{
        console.log('Tie')
    }
}

function checkGameOver(){
    if (roundNo>5){
        if (playerScore>computerScore) round.textContent = "You won!";
        else if(playerScore<computerScore) round.textContent = "You lost!";
        else round.textContent = "You tied!";
        
        playerOptions.forEach((option)=>{
            option.style.display='none';
        });
        computerChoiceDisplay.style.display='none';
    }
}


const playerOptions=document.querySelectorAll(".player");
const computerChoiceDisplay=document.querySelector("#computer");
const round=document.querySelector(".round");
const playerScoreDisplay=document.querySelector('#player-score');
const computerScoreDisplay=document.querySelector('#computer-score');

playerOptions.forEach((option)=>{
    option.addEventListener('click',()=>{
        let playerChoice=option.id;
        playRound(playerChoice);
        roundNo+=1;
        round.textContent='Round '+roundNo;
        checkGameOver();
    });
});