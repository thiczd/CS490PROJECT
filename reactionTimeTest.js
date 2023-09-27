//import "PlayerClass.js"
// TODO: PlayerClass => needs alot

// ====Game Params====
var userGreenTime;
var randTimeParam = 4;

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
// -----


btn.addEventListener("click", () => {
        //Set to starting a state transition to InProgress
        if (User.GameState == 0) {
            btn.style.backgroundColor = "red";
            User.GameState = 1;
        }
        
        //No cheating protection yet (you can just spam the button rn)
        if (User.GameState == 1) {
            //Pick a number between 1-3 and sec -> milsec
            var randTime = Math.floor((Math.random() * randTimeParam)+1) * 1000;
            console.log(randTime);
            setTimeout(() => {
                User.GameState = 2;
                btn.style.backgroundColor = "green";
                userGreenTime = Date.now();
            }, randTime);
        }
    
        if (User.GameState == 2) {
            //Current state if the user has clicked only in the green
            var userInputTime = Date.now() - userGreenTime;
    
            btn.style.backgroundColor = "white";
            returnTime.innerText = userInputTime/1000;
            User.GameState = 0; // end or start again havent decided.
        }
});
