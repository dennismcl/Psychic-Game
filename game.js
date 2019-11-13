console.log("my Javascript has loaded")
var userWin = 0;
var userLoses = 0;
var guessesLeft = 10
var lettersGuessed = [];
var computerChoice = "abcdefghijklmnopqrstuvwxyz".split("")
var computerGuess = "";
// here we create variables that reference specif parts of the page
var $userWin = document.getElementById("userWin");
var $userLoses = document.getElementById("userLoses");
var $guessesLeft = document.getElementById("guessesLeft");
var $lettersGuessed = document.getElementById("lettersGuessed");


//Were going to create a function that resets the game
function resetGame ()
{
    guessesLeft = 10;
    lettersGuessed = [];

    var randomCompChoice = [Math.floor(Math.random() * computerChoice.length)];
 computerGuess = computerChoice[randomCompChoice];

 console.log (randomCompChoice)
 alert("A new game is starting")
};

document.onkeyup = function (event){
var userGuess = event.key;
lettersGuessed.push(userGuess);
$lettersGuessed.textContent = lettersGuessed.join(", ");

if (userGuess === computerGuess) {
    
    userWin++;

    resetGame();

    $userWin.textContent = userWin;

}
else {
    guessesLeft--;
}
if (guessesLeft === 0) {

userLoses++;

resetGame();

$userLoses.textContent = userLoses;

}


}

resetGame();

