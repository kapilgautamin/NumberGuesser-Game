let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random()*9);
// console.log(generateTarget());

const compareGuesses = (userGuess, compGuess, target) => {
  if(userGuess < 0 || userGuess > 9)
    alert('Enter a number between 0 and 9');
  let userDiff = Math.abs(userGuess - target);
  let compDiff = Math.abs(compGuess - target);
  if(userDiff <= compDiff)
    return true;
  return false;
};

const updateScore = winner => {
  if(winner === 'human')
    humanScore++;
  else
    computerScore++;
}

const advanceRound = () => currentRoundNumber++;
