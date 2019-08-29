var win = 0;
var lose = 0;
var tries = 10;

var container = document.getElementById("tracker");
var guess = [];
var target = String.fromCharCode(97 + Math.floor(Math.random() * 26));
console.log(target)

function resetGame() {
    target = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    console.log(target)
    tries = 10;
    guess = [];
    document.querySelector("#attempts").innerHTML = tries;
    document.querySelector("#guess").innerHTML = guess;
}

function logScore(endGame) {
    var paragraph = document.createElement("P");
    paragraph.textContent = `Game#: ${win + lose} | ${endGame} | Goal: ${target} | Guesses(${guess.length}): ${guess.join(" ")}`;
    if (endGame === "Win") {
        paragraph.setAttribute("class", "bg-primary text-light p-1");
    } else {
        paragraph.setAttribute("class", "bg-danger text-light p-1");
    }

    container.appendChild(paragraph);
}
document.onkeypress = function (event) {
    // console.log(event.key);
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122))) {
        console.log("invalid letter");
        return;
    }
    if (event.key === target) {
        guess.push(event.key);
        // console.log("you win");
        win++;
        document.querySelector("#winScore").innerHTML = win;
        logScore("Win");
        resetGame();
    } else if (!guess.includes(event.key)) {
        tries--;
        guess.push(event.key);
        // console.log("wrong", guess);
        document.querySelector("#attempts").innerHTML = tries;
        document.querySelector("#guess").innerHTML = guess.join(" ");
        if (tries === 0) {
            lose++;
            document.querySelector("#loseScore").innerHTML = lose;
            logScore("Lose");
            resetGame();
        }
    } else {
        alert("Already Guessed that letter");
    }

}