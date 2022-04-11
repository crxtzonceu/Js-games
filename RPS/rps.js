// open for refactoring

// getting the elements
const botDisplay = document.getElementById('computer')
const userDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const possible = document.querySelectorAll('button') // get all the buttons
// variables
let userChoice
let botChoice
let result


// loop through the array and add evenlistener to each of them
possible.forEach(choices => choices.addEventListener('click', (e) => {
  userChoice = e.target.id     // get the id of the specific button that was clicked
  userDisplay.innerHTML = userChoice     // display the user move to the dom
  generateComputer()       // call functions
  getResult()              // call functions
}))


// generate the move of the computer
const generateComputer = () => {
  const random = Math.floor(Math.random() * 3) + 1  // random numbers from 1 - 3

  switch(random) {   // switch from the organization
    case 1:
      botChoice = 'rock'
      break
    case 2:
      botChoice = 'paper'
      break
    case 3:
      botChoice = 'scissor'
      break
  }
  botDisplay.innerHTML = botChoice   // display the bot move onto the dom

}


// simulate the result of the fight
const getResult = () => {
  if(userChoice === botChoice ){     // check for draw/tied
    result = "It's a draw!"
  } else if (userChoice == 'rock' && botChoice == 'scissor'){
    result = "You Won!"
  } else if (userChoice == 'paper' && botChoice == 'rock'){
    result = "You Won!"
  } else if (userChoice == 'scissor' && botChoice == 'paper'){
    result = "You Won!"
  } else {      // automatically you already lose
    result = "You Lose!"
  }
  resultDisplay.innerHTML = result   // display the result of the match
}