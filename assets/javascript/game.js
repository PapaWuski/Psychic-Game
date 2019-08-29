var win = 0;
var lose = 0;
var tries = 10;

var container = document.getElementById("tracker");
var wrongGuess = [];
var target = String.fromCharCode(97 + Math.floor(Math.random() * 26));
console.log(target)

function resetGame() {
    target = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    console.log(target)
    tries = 10;
    wrongGuess = [];
    document.querySelector("#attempts").innerHTML = tries;
    document.querySelector("#guess").innerHTML = wrongGuess;
}

function logScore(){
    var paragraph = document.createElement("P");
    paragraph.textContent = ui_in;
    paragraph.setAttribute("class","redText");
    container.appendChild(paragraph);
}
document.onkeypress = function (event) {
    // console.log(event.key);
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122))) {
        console.log("invalid letter");
        return;
    }
    if (event.key === target) {
        console.log("you win");
        win++;
        document.querySelector("#winScore").innerHTML = win;
        resetGame();
    } else if (!wrongGuess.includes(event.key)) {
        tries--;
        wrongGuess.push(event.key);
        console.log("wrong", wrongGuess);
        document.querySelector("#attempts").innerHTML = tries;
        document.querySelector("#guess").innerHTML = wrongGuess;
        if (tries === 0) {
            lose++;
            document.querySelector("#loseScore").innerHTML = lose;
            resetGame();
        }
    } else {
        console.log("Already Guessed that letter");
    }

}