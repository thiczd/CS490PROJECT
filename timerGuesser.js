//import "PlayerClass.js"
// TODO: PlayerClass => needs alot

//Keep track of the User Game State.
const GameState = {
    Start: 0,
    InProgress: 1,
    End: 2
}

// HTML Objs
const btn = document.querySelector(".btn");
const returnTime = document.querySelector(".ReturnTime"); 
// -----

// Gloval Game Output - used for copying to the clipboard
let gameOutput = "";

document.addEventListener("DOMContentLoaded", () => {
    const goalTimeDisplay = document.getElementById("goal-time-val");
    const button = document.getElementById("Main-interact");
    const userGuessDisplay = document.getElementById("user-guess-val");
    const scoreDisplay = document.getElementById("score-val");

    // Game Params
    let goalTime;
    let startTime;

    // User gen
    //const CurrentUser = new UserPlayer();
    let User = {
        GameState: GameState.Start
    };

    function startGame() {
        goalTime = Math.floor(Math.random() * 10) + 1; // Randomly generate goal time between 1 and 10 seconds
        goalTimeDisplay.textContent = goalTime; // Display goal time
        startTime = Date.now();
        button.textContent = "Click to stop";
        User.GameState = GameState.InProgress;
    }

    function endGame() {
        const elapsed = (Date.now() - startTime) / 1000;
        userGuessDisplay.textContent = `${elapsed.toFixed(2)} seconds`; // Display user's guess
        const score = Math.abs(goalTime - elapsed);
        gameOutput = `⏲Timer Guesser⏲\nMy Guess: ${elapsed.toFixed(2)} seconds`;

        // Display score (|goalTime - elapsed|)
        if (score === 0) {
            scoreDisplay.textContent = "Perfect score!";
            gameOutput += "\nI got a perfect score!";
        } else {
            scoreDisplay.textContent = `You missed the goal time by ${score.toFixed(2)} seconds`; 
            gameOutput += `\nI missed the goal time by ${score.toFixed(2)} seconds`;
        }
        gameOutput += "\n📈Human Benchmark📈\nhttps://breakthegreat.github.io/CS490PROJECT/timerGuesser.html"

        button.textContent = "Click to start";
        User.GameState = GameState.End;

        document.getElementById("copy-results").style.display = "block"; // Display copy button
    }

    button.addEventListener("click", () => {
        if (User.GameState === GameState.Start || User.GameState === GameState.End) {
            startGame();
        } else if (User.GameState === GameState.InProgress) {
            endGame();
        }
    });
});
