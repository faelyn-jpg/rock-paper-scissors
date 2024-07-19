function getComputerChoice() {
    //random math * 10 to get number between 1 and 9 by rounding down
    let randomNumber = Math.floor(Math.random() * 3) + 1
    //1 = rock, 2 = paper, 3 = scissors
    if (randomNumber === 1) {
        return "Rock"
    } else if (randomNumber === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
    //return string value
}
console.log(getComputerChoice())