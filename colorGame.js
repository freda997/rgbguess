var squares=document.querySelectorAll(".square");
var colors= genRandomColors(squares.length);
var pickedColor=colors[pickcolor()];
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easyBtn");
var hard=document.querySelector("#hardBtn");
var numSquares=6;
colorDisplay.textContent=pickedColor;

easy.addEventListener("click",function(){
	numSquares=3;
	this.classList.add("selected");
	hard.classList.remove("selected");
	colors=genRandomColors(3);
	pickedColor=colors[pickcolor()];
	colorDisplay.textContent=pickedColor;
	for (var i=0; i<squares.length;i++){
			if (colors[i]){ //if i is valid index in colors
				squares[i].style.backgroundColor=colors[i];
			}
			else{
				squares[i].style.display="none";
			}
		}
});

hard.addEventListener("click",function(){
	numSquares=6;
	this.classList.add("selected");
	easy.classList.remove("selected");
	colors=genRandomColors(6);
	pickedColor=colors[pickcolor()];
	colorDisplay.textContent=pickedColor;
	for (var i=0; i<squares.length;i++){
			 //if i is valid index in colors
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
});
reset.addEventListener("click", function(){
	colors=genRandomColors(numSquares);
	pickedColor=colors[pickcolor()];
	colorDisplay.textContent=pickedColor;
	this.textContent="New Color"
	messageDisplay.textContent="";
	for (var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
		h1.style.backgroundColor="steelblue";
	}
});
for (var i =0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	//add click listener
	squares[i].addEventListener("click",function(){
	var clickedColor=this.style.backgroundColor
	if (clickedColor===pickedColor){
		messageDisplay.textContent="Correct!";
		reset.textContent="Play Again";
		changeAllColors(clickedColor);
		h1.style.backgroundColor=clickedColor;
		
	}
	else{
		this.style.backgroundColor="#232323";
	    messageDisplay.textContent="Try Again";
	}
  });
}

function changeAllColors(color){
	for (var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random =Math.floor(Math.random()*colors.length);
	return random;
}

function genRandomColors(num){
	var arr=[]
	for (var i =0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	return `rgb(${red}, ${blue}, ${green})`;
}