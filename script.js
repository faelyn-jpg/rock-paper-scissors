function getComputerChoice() {
    //random math * 10 to get number between 1 and 9 by rounding down
    let randomNumber = Math.floor(Math.random() * 3) + 1
    //1 = rock, 2 = paper, 3 = scissors
    if (randomNumber === 1) {
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    }
    //return string value
}
console.log(getComputerChoice())

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

console.log(getHumanChoice())