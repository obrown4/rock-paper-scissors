const startButton = document.getElementById('start');
startButton.addEventListener('click', playRound);

const stopButton = document.getElementById('stop');
stopButton.addEventListener("click", stopGame);


let computerScore = 0;
let humanScore = 0; 

function start(){
    
}

function playRound(){
    let human = getHumanInput();
    let computer = getComputerInput();

    if(human == "stop"){
        stopGame();
        return;
    }
    console.log(human, computer)
    let result = getScore(human,computer);
    console.log(result)
    humanScore += result[0];
    computerScore += result[1];

    updateScore(humanScore, computerScore);
}

function stopGame(){
    if(computerScore > humanScore){
        console.log("The computer wins!")
    }
    else if(computerScore < humanScore){
        console.log("You Win!")
    }
    else{
        console.log("It's a tie!")
    }
    
    computerScore = 0
    humanScore = 0

    updateScore()
}

function updateScore(){
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function getScore(human, computer){
    let announcer;

    let score;
    
    
    
    const rules = new Map([
        ['rock scissors', 1],
        ['paper rock', 1],
        ['scissors paper', 1]
    ]);

    if (human === computer) {
        announcer = `Draw! Both played ${human}`;
        score = [0, 0];
    } else if (rules.get(`${human} ${computer}`) === 1) {
        announcer = `You Win! ${human} beats ${computer}`;
        score = [1, 0];
    } else {
        announcer = `Computer Wins! ${computer} beats ${human}`;
        score = [0, 1];
    }

    console.log(announcer);
    return score;

}

function getHumanInput(){
    let modInput;

    while (true) {
        let input = prompt("Rock Paper Scissors? (or type 'stop' to end the game)");
        
        if (input === null) {
            return 'stop';
        }

        modInput = input.trim().toLowerCase();

        if (modInput === "rock" || modInput === "paper" || 
            modInput === "scissors" || modInput === "stop") {
            break;
        } else {
            alert("Invalid input. Please enter 'rock', 'paper', 'scissors', or 'stop'.");
        }
    }

    return modInput;
}

function getComputerInput(){
    let opts = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3)

    return opts[index]
}