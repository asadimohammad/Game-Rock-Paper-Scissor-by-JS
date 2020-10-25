// Variables
let userScore = 0;
let computerScore = 0
const rock = document.querySelector('#r')
const paper = document.querySelector('#p')
const scissor = document.querySelector('#s')
const compScore_span = document.getElementById("comp-score");
const userScore_span = document.getElementById("user-score");
const result_p = document.querySelector(".result p");


// EventListeners
EventListeners()
function EventListeners() {
    rock.addEventListener('click', () => {
        game('r')
    })
    paper.addEventListener('click', () => {
        game('p')
    })
    scissor.addEventListener('click', () => {
        game('s')
    })
}

// Functions
function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}
function game(userChoice) {
    let computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice)
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, computerChoice)
            break;
    }
}
function convertToWord(letter) {
    switch (letter) {
        case 'r':
            return 'سنگ';
            break;
        case 'p':
            return 'کاغذ';
            break;
        case 's':
            return 'قیچی';
            break;
    }
}
function win(userChoice, computerChoice){
    userScore ++ ;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `شما برنده شدید!!!
    شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(
      computerChoice
    )} را انتخاب کرد`;
    // add green border to div
  document.getElementById(userChoice).classList.add("green");
  // remove class after 500
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green");
  }, 500);
}
function lose(userChoice, computerChoice){
    computerScore ++ ;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `شما باختید!!!
    شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(
      computerChoice
    )} را انتخاب کرد`;
    // add green border to div
  document.getElementById(userChoice).classList.add("red");
  // remove class after 500
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red");
  }, 500);
}
function draw(userChoice, computerChoice){

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `مساوی شد !!!
    شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(
      computerChoice
    )} را انتخاب کرد`;
    // add green border to div
  document.getElementById(userChoice).classList.add("gray");
  // remove class after 500
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("gray");
  }, 500);
}