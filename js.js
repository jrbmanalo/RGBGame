var numberOfSquares = 6;
var colors = [];
var pickedColor ;
var squaresColor = document.querySelectorAll(".square");
var displayedColor = document.getElementById("colorDisplayed");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#resetColor");
var modeButtonsPressed = document.querySelectorAll(".mode");


initializeGame();

resetButton.addEventListener("click", function() {
	resetGame();
})

function initializeGame() {
	setModeButton();
	setSquares();
	resetGame();
}

function setModeButton() {
	for(var i = 0; i < modeButtonsPressed.length; i ++) {
	modeButtonsPressed[i].addEventListener("click", function() {
		modeButtonsPressed[0].classList.remove("selected");
		modeButtonsPressed[1].classList.remove("selected");
		modeButtonsPressed[2].classList.remove("selected");
		modeButtonsPressed[3].classList.remove("selected");
		this.classList.add("selected");
		
		if(this.textContent === "Easy") {
			numberOfSquares = 3;
		} else if(this.textContent === "Medium") {
			numberOfSquares = 6;
		} else if(this.textContent === "Hard") {
			numberOfSquares = 9;
		} else {
			numberOfSquares = 12;
		}

		resetGame();
		});
	}
}


function setSquares() {
	for(var i = 0; i < squaresColor.length; i ++) {
	squaresColor[i].style.backgroundColor = colors[i];

	squaresColor[i].addEventListener("click", function() {
		var clickedColor = (this.style.backgroundColor);

		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeSquareColor(clickedColor)
			header.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}



function resetGame() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = randomSquare();
	displayedColor.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	header.style.backgroundColor = "#CD5C5C";

	for(var i = 0; i < squaresColor.length; i ++) {
		if(colors[i]) {
			squaresColor[i].style.display = "block";
			squaresColor[i].style.backgroundColor = colors[i];
		} else {
			squaresColor[i].style.display = "none";
		}
		
	}
	
}


function changeSquareColor(color) {
	for (var i = 0; i < colors.length; i++) {
		squaresColor[i].style.backgroundColor = color;
	}
}


function randomSquare(){
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}


function generateRandomColors(num) {
	var colorArray = []

	for(var i = 0; i < num; i ++) {
		colorArray.push(randomColor())
	}

	return colorArray;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb("+ red + ", " + green + ", " + blue + ")";
}
