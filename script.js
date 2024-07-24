function getComputerChoice() {
    //random math * 10 to get number between 1 and 9 by rounding down
    let randomMath = Math.floor(Math.random() * 3) + 1
    let computerChoice = 0
    //1 = rock, 2 = paper, 3 = scissors
    if (randomMath === 1) {
        computerChoice = "rock"
        return computerChoice
    } else if (randomMath === 2) {
        computerChoice = "paper"
        return computerChoice
    } else {
        computerChoice = "scissors"
        return computerChoice
    }
    //return string value
}

function getHumanChoice() {
    //prompt player to choose
    let humanChoice = prompt("Rock, paper, scissors?")
    humanChoice = humanChoice.toLowerCase();
    //check that its a valid choice
    if (humanChoice == "rock" || 
    humanChoice == "paper" || 
    humanChoice == "scissors") {
        return humanChoice 
    } else {
        while (humanChoice != "rock" ||
             humanChoice != "paper" || 
             humanChoice != "scissors") {
            humanChoice = prompt("Please pick a valid choice. Rock, paper, scissors?")
            humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" ||
            humanChoice === "paper" ||
            humanChoice === "scissors") {
                return humanChoice
            }
        }
    }
}
    //return choice
//create variables to hold score
let humanScore = 0
let computerScore = 0

function capitalize(text)  {
    let start = text.substr(0,1)
    let end = text.substr(1)
    start = start.toUpperCase();
    end = end.toLowerCase();
    return start.concat(end);
}

function playRound(humanChoice, computerChoice) {
//compare humanChoice and computerChoice
//if human and computer have equal values, tie, dont add to score
if (humanChoice === computerChoice) {
    console.log("It's a tie!")
} else if (humanChoice === "paper" && computerChoice === "rock") {
    //if human paper and computer rock, human win
    console.log("You win! Paper beats Rock!")
    humanScore += 1
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    //if human rock and computer scissors, human win
    console.log("You win! Rock beats Scissors!")
    humanScore += 1
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    //if human scissors and computer paper, human win
    console.log("You win! Scissors beats Paper!")
    humanScore += 1
 } else {
    //otherwise, human lose
    humanChoice = capitalize(humanChoice)
    computerChoice = capitalize(computerChoice)
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
    computerScore += 1
 }
//log who wins in correct score
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
console.log(`Player: ${humanScore}, Computer: ${computerScore}.`)