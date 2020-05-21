const screen1 = document.querySelector('#quiz1');
const screen2 = document.querySelector('#quiz2');

function Quiz (questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}



function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}




function populate() {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}




function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Vraag " + currentQuestionNumber + " van " + quiz.questions.length;
}


function showScores() {
	var gameOverHTML = "  <div class='jumbotron section-quiz'><h1>Klaar!</h1>";
	gameOverHTML += "<h2 id='score'> Jouw score: " + quiz.score + "/4</h2><br> <img class='img-fluid img-zzzumi-los' src='images/zzzumi-los.png'></img>  </div>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [
	new Question("Van welke planeet komt Zzzumi?", ["Aarde", "Booo", "Mars", "Texel"], "Booo"),
	new Question("Hoeveel pootjes heeft Zzzumi?", ["2", "4", "6", "8"], "4"),
	new Question("Hoe heet de hond die Zzzumi helpt een oplossing te verzinnen?", ["Harry", "Bikkel", "Spikkel", "Hugo"], "Hugo"),
	new Question("Wat maakte het eitje van Zzzumi open?", ["Vuurpijl", "Aardbeving", "UFO", "Bliksem"], "Vuurpijl"),
];

var quiz = new Quiz (questions);
//
// populate();
