const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const myArray = ["ایمان", "پرهام", "سارا", "رضا", "مینا", "محسن", "محمد", "عماد"];
let inPlay = false;
let scramble = "";
let scrambled = "";
let score = 0;
button.addEventListener("click", function() {
    console.log("Clicked");
    if (!inPlay) {
        inPlay = true;
        button.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        guess.value = "";
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    } else {
        let tempGuess = guess.value;
        score++;
        if (tempGuess === scramble) {
            inPlay = false;
            message.innerHTML = "Correct it was " + scramble + " it look " + score + " guesses";
            button.innerHTML = "Start";
            guess.classList.toggle("hidden");
        } else {
            message.innerHTML = "Wronge " + scrambled;
        }
    }
});

function createWord() {
    let randomIndex = Math.floor(Math.random() * myArray.length);
    let tempWord = myArray[randomIndex];
    return tempWord;
}

function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}