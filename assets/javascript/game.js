var wrongGuess = [];
var screenGuess = document.getElementById("replacetext");
var target = String.fromCharCode(97+Math.floor(Math.random() * 26));
console.log(target)
// document.onkeypress = function(event) {
//     console.log(event.key);
//     if (target.indexOf(event.key) === -1 && wrongGuess.indexOf(event.key) === -1) {
//         wrongGuess.push(event.key);
//     }else{
//         console.log(wrongGuess);
//     }
// }
document.onkeypress = function(event) {
    // console.log(event.key);
    if (event.key === target) {
        console.log("you win");
    }else if(!wrongGuess.includes(event.key)){
        wrongGuess.push(event.key);
        console.log("wrong",wrongGuess);
        document.querySelector("#replacetext").innerHTML = wrongGuess;
    }else{
        console.log("Already Guessed that letter");
    }

}