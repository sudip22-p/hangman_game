const wordsArray = [
    "ability",
    "absolute",
    "abstract",
    "abundance",
    "academic",
    "acceptance",
    "according",
    "accuracy",
    "accurately",
    "achievement",
    "acknowledge",
    "adventure",
    "advertising",
    "agreement",
    "ambassador",
    "application",
    "architecture",
    "association",
    "attention",
    "authority",
    "beautiful",
    "beneficial",
    "brilliant",
    "catalyst",
    "celebration",
    "challenge",
    "character",
    "chemistry",
    "community",
    "comparison",
    "compassion",
    "comprehensive",
    "consequence",
    "consideration",
    "controversial",
    "contribution",
    "cooperation",
    "courageous",
    "creativity",
    "declaration",
    "deliberation",
    "democracy",
    "determination",
    "development",
    "difference",
    "discovery",
    "diversity",
    "education",
    "efficiency",
    "electricity",
    "employment",
    "engineering",
    "enthusiasm",
    "environment",
    "equivalent",
    "evaluation",
    "excellent",
    "experience",
    "expression",
    "extraordinary",
    "fantastic",
    "foundation",
    "friendship",
    "generation",
    "government",
    "gratitude",
    "happiness",
    "harmony",
    "healthcare",
    "heartfelt",
    "hypothesis",
    "imagination",
    "implementation",
    "independence",
    "individual",
    "information",
    "innovation",
    "inspiration",
    "integration",
    "intelligence",
    "intermediate",
    "investment",
    "leadership",
    "legislation",
    "liberation",
    "maintenance",
    "management",
    "manufacturing",
    "marketing",
    "meditation",
    "motivation",
    "negotiation",
    "opportunity",
    "organization",
    "participation",
    "passionate",
    "performance",
    "perseverance",
    "perspective",
    "philosophy",
    "positivity",
    "potential",
    "preparation",
    "presentation",
    "productivity",
    "professional",
    "progressive",
    "relationship",
    "reliable",
    "representation",
    "responsibility",
    "revolution",
    "satisfaction",
    "significance",
    "simplification",
    "specialization",
    "spirituality",
    "spontaneous",
    "stability",
    "successful",
    "sustainability",
    "technology",
    "transformation",
    "understanding",
    "university",
    "visualization",
    "wonderful",
    "workmanship",
    "worldwide",
    "yesterday",
    "athlete",
    "competition",
    "champion",
    "victory",
    "teamwork",
    "exercise",
    "fitness",
    "strategy",
    "coach",
    "tournament",
    "score",
    "training",
    "athlete",
    "winning",
    "goalkeeper",
    "basketball",
    "football",
    "swimming",
    "tennis",
    "cycling",
    "experiment",
    "hypothesis",
    "research",
    "laboratory",
    "scientist",
    "chemistry",
    "biology",
    "physics",
    "astronomy",
    "geology",
    "technology",
    "innovation",
    "discovery",
    "evolution",
    "environment",
    "ecosystem",
    "genetics",
    "microscope",
    "equation",
    "laser",
    "radiation",
    "molecule",
    "galaxy",
    "particle",
    "hypothesis",
    "asteroid",
    "astronaut",
    "celestial",
    "cosmic",
    "planet",
    "nebula",
    "orbit",
    "rocket",
    "satellite",
    "telescope",
    "universe",
    "supernova",
    "astronomer",
    "spaceship",
    "gravity",
    "meteorite",
    "cosmonaut",
    "interstellar",
    "extraterrestrial",
    "comet",
    "solar",
    "astronomy",
    "exploration",
    "moon",
    "galaxy",
    "spacecraft",
    "constellation",
    "observatory",
];

let randomWord;
let imageSelection = 1;
let intervalId;
const imageEl = document.getElementById("img");
const incorrectCount = document.getElementById("incorrect-count");
const alphabets = document.getElementById("alphabets");
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const wordList = document.getElementById("word");



function gameOverLoser() {
    let gameBox = document.getElementsByClassName("game-over")[0];
    gameBox.style.display = "flex";
    let imgEl = document.getElementById("game-over-img");
    imgEl.src = "./images/loser.gif";
    let wave = document.getElementsByClassName("wave")[0];
    wave.innerHTML = "Whoops,You lost!!!";
    wave.style.color = "#ed2aa5";
    let textPart = document.getElementById("text-part");
    textPart.innerHTML = "The correct word was: ";
    let wordDisplay = document.getElementById("word-display");
    wordDisplay.innerHTML = randomWord;
}



function gameOverWinner() {
    clearInterval(intervalId);
    let gameBox = document.getElementsByClassName("game-over")[0];
    gameBox.style.display = "flex";
    let imgEl = document.getElementById("game-over-img");
    imgEl.src = "./images/winner.gif";
    let wave = document.getElementsByClassName("wave")[0];
    wave.innerHTML = "Hurray,You win!!!";
    wave.style.color = "#ed2aa5";
    let textPart = document.getElementById("text-part");
    textPart.innerHTML = "You got the correct word: ";
    textPart.style.color = "green";
    let wordDisplay = document.getElementById("word-display");
    wordDisplay.innerHTML = randomWord;
}



// Function to check if a letter is present in the word
function isLetterInWord(word, letter) {
    return word.includes(letter);
}



function handleClick(divEl) {
    divEl.removeEventListener("click", () => {
        handleClick(div);
    });
    divEl.style.backgroundColor = "#999999";
    let letter = divEl.innerHTML;
    if (isLetterInWord(randomWord, letter)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                let liToChange = document.getElementById("letter" + i.toString());
                liToChange.classList.add("filled");
                liToChange.innerHTML = letter;
                divEl.style.backgroundColor = "rgb(78 124 227)";
            }
        }
    } else {
        if (imageSelection === 1) {
            imageEl.src = "./images/hangman-1.svg";
            imageSelection += 1;
            incorrectCount.innerHTML = (imageSelection - 1).toString() + "/6";
        } else if (imageSelection === 2) {
            imageEl.src = "./images/hangman-2.svg";
            imageSelection += 1;
            incorrectCount.innerHTML = (imageSelection - 1).toString() + "/6";
        } else if (imageSelection === 3) {
            imageEl.src = "./images/hangman-3.svg";
            imageSelection += 1;
            incorrectCount.innerHTML = (imageSelection - 1).toString() + "/6";
        } else if (imageSelection === 4) {
            imageEl.src = "./images/hangman-4.svg";
            imageSelection += 1;
            incorrectCount.innerHTML = (imageSelection - 1).toString() + "/6";
        } else if (imageSelection === 5) {
            imageEl.src = "./images/hangman-5.svg";
            imageSelection += 1;
            incorrectCount.innerHTML = (imageSelection - 1).toString() + "/6";
        } else if (imageSelection === 6) {
            imageEl.src = "./images/hangman-6.svg";
            imageSelection += 1;
            incorrectCount.innerHTML = (imageSelection - 1).toString() + "/6" + ":(last chance)";
        } else if (imageSelection === 7) {
            setTimeout(gameOverLoser, 500);
        }
    }
}



function placeAllAlphabets() {
    for (let i = 0; i < alphabetArray.length; i++) {
        let div = document.createElement("div");
        div.classList.add("alphabet-set");
        alphabets.append(div);
        div.innerHTML = alphabetArray[i];
        div.addEventListener("click", () => {
            handleClick(div);
        });
    }
}



function setupEmptyBoxes() {
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];//getting the random word
    for (let i = 0; i < randomWord.length; i++) {
        let li = document.createElement("li");
        li.id = "letter" + i.toString();
        wordList.append(li);
    }
}


window.addEventListener("load", () => {
    placeAllAlphabets();
    setupEmptyBoxes();
    intervalId = setInterval(() => {
        let filledEls = document.getElementsByClassName("filled");
        if (randomWord.length === filledEls.length) {
            gameOverWinner();
        }
    }, 50);
});


document.getElementsByClassName("btn")[0].addEventListener("click", () => {
    location.reload();
});