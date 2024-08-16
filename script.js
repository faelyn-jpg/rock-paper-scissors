const choices = ["Rock", "Paper", "Scissors"]
const contain = document.querySelector("#container")
const textBlock = document.querySelector("#text")
const btnStart = document.querySelector("#start")
const buttonContain = document.querySelector(".button-container")


btnStart.addEventListener("click", () => {
    playGame()
})

function addButtons() {
    btnStart.remove()
    for (let i = 0; i < choices.length; i++) {
        const addBtn = document.createElement("button")
        addBtn.id = choices[i]
        addBtn.className = "rpsButtons"
        addBtn.textContent = choices[i]
        buttonContain.appendChild(addBtn)
    }
    textBlock.textContent = "Rock, Paper, Scissors?"
}

function removeButtons() {
    for (let i = 0; i < choices.length; i++) {
        const rpsButt = document.querySelector(".rpsButtons")
        rpsButt.remove()
    }
}

function disableButtons() {
    const rpsButtons = document.querySelectorAll(".rpsButtons")
    rpsButtons.forEach(btn => {
        btn.setAttribute("disabled", "")
    })
}

function getComputerChoice() {
    let randomMath = Math.floor(Math.random() * 3)
    let computerChoice = choices[randomMath]
    return computerChoice
}

function playGame() {
    addButtons()
    const scoreDiv = document.createElement("div")
    scoreDiv.id = "runningScore"
    contain.appendChild(scoreDiv)
    let playerScore = 0
    let computerChoice
    let computerScore = 0
    let playerChoice = ""
    const allButtons = document.querySelectorAll(".rpsButtons")
    allButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            playerChoice = e.target.textContent;
            const result = playRound(playerChoice, computerChoice)
            if (result === "Player Win") ++playerScore
            else if (result === "Computer Win") ++computerScore
            const runningScore = document.querySelector("#runningScore")
            runningScore.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
            contain.appendChild(runningScore)
            console.log(playerScore, computerScore)
            if (playerScore + computerScore == 5) {
                disableButtons()
                const outcome = document.createElement("div")
                if (playerScore > computerScore) {
                    outcome.textContent = "WIN!"
                    contain.appendChild(outcome)
                }
                else {
                    outcome.textContent = "LOSS!"
                    contain.appendChild(outcome)
                }
                const resetButton = document.createElement("button")
                resetButton.textContent = "Play Again?"
                contain.appendChild(resetButton)
                resetButton.addEventListener("click", () => {
                    outcome.remove()
                    computerScore = 0
                    playerScore = 0
                    textBlock.textContent = ""
                    runningScore.remove()
                    removeButtons()
                    contain.appendChild(btnStart)
                    resetButton.remove()
                })
            }
        })
    })
}


function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice()
    console.log(computerChoice, playerChoice)

    if (playerChoice == computerChoice) {
        textBlock.textContent = "It's a tie!"
        return "Tie"
    }
    else if (((playerChoice === choices[0]) && (computerChoice === choices[2])) ||
        ((playerChoice === choices[1]) && (computerChoice === choices[0])) ||
        ((playerChoice === choices[2]) && (computerChoice === choices[1]))) {
        textBlock.textContent = `You win! ${playerChoice} beats ${computerChoice}!`
        return "Player Win"
    } else {
        textBlock.textContent = `You lose! ${computerChoice} beats ${playerChoice}!`
        return "Computer Win"
    }
}


//1. on game start everything should be fresh
//2. set up button functionality
//3. when user clicks on something, a round should be "played"
//the pc score generated and the scores updated
//4.if player wins, disable buttons and show win to player
//5.if pc wins, disable buttons and show LOSS to the player
//show restart button???