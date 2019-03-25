//Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    return console.log('Error!')
  }
}

//Create a new function named getComputerChoice with no parameters.
//Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2
function getComputerChoice() {
  let random = Math.floor(Math.random()*3)
	switch(random) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return null;
 	}
}
//Create a function named determineWinner that takes two parameters named userChoice and computerChoice.
//This function will compare the two choices played and then return if the human player won, lost, or tied.
function determineWinner(userChoice,computerChoice){
  if (userChoice === computerChoice) {
    return 'Game was a tie'
  }
  /*Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. 
  The inner if/else should check if the computerChoice is 'paper'. 
  If so, return a message that the computer won. If not, return a message that the user won.*/
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'computer Won'
    } else {
      return 'User Won'
    }
  
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
      return 'computer Won'
    } else {
      return 'User Won'
    }
  }
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
      return 'computer Won'
    } else {
      return 'User Won'
    }
  }
}
};
function playGame() {
  
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame()
