var pics = [
	"imgs/me.jpg",
	"imgs/view.jpg",
	"imgs/interstellar.jpg",
	"imgs/character.jpg"

]

let texts = [
	"I like playing guitar",
	"I currently live in Vlissingen",
	"This is my favorite movie",
	"How i would describe myself",
]

var btn = document.getElementById("tap");
var img = document.querySelector("img");
let p = document.getElementById("paragraph");

var counter = 1;

btn.addEventListener("click", function(){
	if (counter === 4){
		counter = 0
	}
	img.src = pics [counter]
	p.innerText = texts[counter]
	counter = counter + 1;
});

