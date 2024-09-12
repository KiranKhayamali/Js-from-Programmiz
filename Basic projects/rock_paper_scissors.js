const cpu = (option) =>{
    let choice = Math.floor(Math.random()*3);
    return option[choice];
}

const user = (option) =>{
    while(true){
        let choice = prompt("Choose from Rock, Paper and Scissors:");
        if (option.includes(choice.toLowerCase())){
            return choice.toLowerCase();
        }
    }
}

const determineOutcome = (computerChoice, userChoice) =>{
    // if both the computer and user choose the same option, it's a draw
    if (computerChoice === userChoice) {
        return "Draw";
    }

    // user wins if they choose paper against rock
    else if (computerChoice === "rock" && userChoice === "paper") {
        return "Win";
    }
    // user wins if they choose scissors against paper
    else if (computerChoice === "paper" && userChoice === "scissors") {
        return "Win";
    }   
    // user wins if they choose rock against scissors
    else if (computerChoice === "scissors" && userChoice === "rock") {
        return "Win";
    } 

    // if none of the above conditions are met, the user loses
    else {
        return "Lose";
    }
}

let options = ['rock', 'paper', 'scissors'];
let cpuChoice = cpu(options);
let userChoice = user(options);

console.log(`You Choose ${userChoice} and Computer Picks ${cpuChoice}
${determineOutcome(cpuChoice, userChoice)}!!!!`)