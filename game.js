const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  const outputs = 
  console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");

}

function getWinner(move1, move2) {
if (move1 === move2) {
  ties++;
  return 0
} 
else if (VALID_MOVES[move1].winsAgainst === move2) {
  wins++;
  return 1;
}

else { // loss
         console.log("You lose...\n");
         losses++;
         return -1
     }

}

function getCPUMove() {
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  const cpu = validMoveKeys[randomIndex];
  return cpu
}

function processMove(cmd, cpu) {

  if (cpu === "r") {
    console.log(`You pick ${cmd}, computer picks ${cpu}.`)
    if (cmd === "r") {
      console.log("You tie.\n")
    }
    else if (cmd === "p") {
      console.log("You win!\n")
    }
    else {
      console.log("You lose...\n")
    }
  }

  else if (cpu === "p") {
    console.log(`You pick ${cmd}, computer picks ${getCPUMove()}.`)
    if (cmd === "r") {
      console.log("You lose...\n")
    }
    else if (cmd === "p") {
      console.log("You tie.\n")
    }
    else {
      console.log("You win!\n")
    }
  }
  else if (cpu === "s") {
    console.log(`You pick ${cmd}, computer picks ${getCPUMove()}.`)
    
    if (cmd === "r") {
      console.log("You win!\n")
    }
    else if (cmd === "p") {
      console.log("You lose...\n")
    }
    else {
      console.log("You tie.\n")
    }
  }
  

}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();
    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp()
    }
    else if (cmd === 'q') {
      rl.close();
      return;
    } 
    
    else if (VALID_MOVES[cmd]){
       console.log(`You pick ${cmd}, computer picks ${getCPUMove()}.`);
      
      getWinner(cmd, getCPUMove())
    }

  //   // } 
       else {
      console.log("\nInvalid command.\n");
      // Instance of Help
      printHelp()
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Instance of Help
  printHelp() 

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
