//import React from "react";
//import "PlayerClass.js"
// TODO: PlayerClass => needs alot

//Keep track of the User Game State.
const GameState = {
    Start: 0,
    End: 3
}

// HTML Objs
const btn = document.getElementById("Main-interact");
const returnTime = document.getElementById("returnTime"); 
const timeTrailS = document.getElementById("trailingS"); // ID for the trailing S for the reaction time.
const border = document.getElementById("borderReactionTime");
// -----

// Gloval Score - used for copying to the clipboard
let globalScore = 0;

document.addEventListener("DOMContentLoaded", () => {
    //User gen
    //const CurrentUser = new UserPlayer();
    let User = GameState;
    User.GameState = 0;

    // ====Game Params====
    var userGreenTime;
    var randTimeParam = 4;

    let startTime = null;
    let redButtonTimeout = null;
    let randTime;

    //Array storing any or all timeouts
    const timeouts = [];

    //Default button config
    btn.textContent = "Click to start!";

    //Clicked to start run this
    function reactGameStart() {
        btn.style.backgroundColor = "Red";
        btn.textContent = "Not Yet!";
        User.GameState = GameState.InProgress;

        //Pick a number between 1-3 and sec -> milsec
        startTime = Date.now();
        randTime = Math.floor((Math.random() * randTimeParam)+1) * 1000;
        console.log(randTime);

        redButtonTimeout = setTimeout(()=>{
            btn.style.backgroundColor = "green";
            btn.textContent = "Click!";
            userGreenTime = Date.now();
        }, randTime);

        timeouts.push(redButtonTimeout)

    }
    
    //Click after button is green (winning)
    function reactGameEnd() {
        border.style.borderColor = "Green";
        btn.style.backgroundColor="#111827";
        btn.textContent = "Click to start!";
        User.GameState = GameState.Start;
        globalScore = (Date.now() - userGreenTime)/1000;
        returnTime.innerText = globalScore

        document.getElementById("copy-results").style.display = "block"; // Display copy button
    }

    //Click before button is green (losing)
    function reactGameFail() {
        User.GameState = GameState.End;
      
        btn.textContent = "Fail!";
        returnTime.innerText = "Fail!";
        returnTime.style.color="Red";
        border.style.borderColor = "Red";

        globalScore = "⏰Reaction Time Test⏰\nMy Score: ❌ Fail! ❌\n📈Human Benchmark📈\nhttps://breakthegreat.github.io/CS490PROJECT/reactionTimeTest.html";
        timeTrailS.style.visibility = 'hidden';

        setTimeout(() => {
            User.GameState = GameState.Start;
            btn.style.backgroundColor = "#111827";
            returnTime.style.color="Green";            

            btn.textContent = "Click to start!";
            timeTrailS.style.visibility = 'visible';
            returnTime.innerText = "0.00";
        }, 2000); // 3 seconds to reset game

        document.getElementById("copy-results").style.display = "block"; // Display copy button
    }

    btn.addEventListener("click", () => {
        if (User.GameState === GameState.Start) {
            console.log("Game Start!");
            for (var i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }

            reactGameStart();
        } else if (randTime > Date.now()-startTime && User.GameState === GameState.InProgress) {
            console.log("Fail");
            // Clear any and all left over timeouts
            for (var i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            clearTimeout(redButtonTimeout);
            redButtonTimeout = null;
            console.log((Date.now() - startTime) / 1000);
            reactGameFail();

        } else if (randTime < Date.now()-startTime && User.GameState === GameState.InProgress) {
            console.log("You won!");
            reactGameEnd();

            // Clear any and all left over timeouts
            for (var i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            redButtonTimeout= null;
        } 
    });
});