let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convert(letter){
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return "Scissors";
}	

function win(userChoice, compChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convert(userChoice)} beats ${convert(compChoice)}. You Win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 400);
}

function lose(userChoice, compChoice){
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convert(userChoice)} loses to ${convert(compChoice)}. You Lost :(`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 400);
}

function draw(userChoice, compChoice){
	userScore;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convert(userChoice)} draws with ${convert(compChoice)}. It's a Draw.`;
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 400);
}


function getComputerChoice(){
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function game(userChoice) {
	const compChoice = getComputerChoice();
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}

getComputerChoice();

main();