//import React from "react";
//import "PlayerClass.js"
// TODO: PlayerClass => needs alot

// ====Game Params====
var userGreenTime;
var randTimeParam = 4;
var fFail = 0;

//Keep track of the User Game State.
const GameState = {
    Start: 0,
    InRed: 1,
    InGreen: 2,
    End: 3
}
//User gen
//const CurrentUser = new UserPlayer();
let User = GameState;
User.GameState = 0;

// HTML Objs
const btn = document.querySelector(".btn");
const returnTime = document.querySelector(".ReturnTime"); 

        //Change this to an ID later on...
const timeTrailS = document.getElementsByClassName("ReturnTime font-bold p-2 text-green-400")[1];
// -----

document.addEventListener("DOMContentLoaded", () => {
    
    let startTime = null;
    let redButtonTimeout = null;
    let randTime;
    const timeouts = [];

    //Default button config
    btn.style.backgroundColor = "white";
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
        btn.style.backgroundColor = "white";
        btn.textContent = "Click to start!";
        User.GameState = GameState.Start;
        returnTime.innerText = (Date.now() - userGreenTime)/1000;
        
    }

    //Click before button is green (losing)
    function reactGameFail() {
        User.GameState = GameState.End;
        btn.textContent = "Fail!";
        returnTime.innerText = "Fail!";
        timeTrailS.style.visibility = 'hidden';

        setTimeout(() => {
            User.GameState = GameState.Start;
            btn.style.backgroundColor = "White";
            btn.textContent = "Click to start!";
            timeTrailS.style.visibility = 'visible';
            returnTime.innerText = "0.00";
        }, 2000); // 3 seconds to reset game
    }

    btn.addEventListener("click", () => {
        if (User.GameState === GameState.Start || User.GameState === GameState.End) {
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