// Global variables declaration
const body = document.getElementById('body');
const instructions = document.getElementById('instructions');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const switchChoiceYes = document.getElementById('btn-1');
const switchChoiceNo = document.getElementById('btn-2');
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const SwitchAndWin = document.getElementById("switchAndWin");
const SwitchAndLose = document.getElementById("switchAndLose");
const NoSwitchAndWin = document.getElementById("NoSwitchAndWin");
const NoSwitchAndLose = document.getElementById("NoSwitchAndLose");

// Function to disable click events on door images
function disableDoorClickEvents() {
doorImage1.onclick = null;
doorImage2.onclick = null;
doorImage3.onclick = null;
//d1.hidden = true;
//d2.hidden = true;
//d3.hidden = true;
}

// Event listener to prevent clicking outside of buttons
document.addEventListener('click', function(event) {
const clickedElement = event.target;
// Check if the clicked element is outside of the buttons
if (clickedElement !== switchChoiceYes && clickedElement !== switchChoiceNo) {
event.stopPropagation(); // Stop event propagation
disableDoorClickEvents(); // Disable click events on door images
} else {
event.preventDefault(); // Prevent default action
}
});

// Image of Car
const winPath = "https://www.svgrepo.com/show/476857/car-rental.svg";
// Image of Goat
const losePath = "https://www.svgrepo.com/show/396571/goat.svg";

// Variables for shuffling the doors
var openDoor1, openDoor2, openDoor3, winner;
// Hiding unnecessary elements
row2.hidden = true;
SwitchAndWin.hidden = true;
SwitchAndLose.hidden = true;
NoSwitchAndWin.hidden = true;
NoSwitchAndLose.hidden = true;
d1.hidden = true;
d2.hidden = true;
d3.hidden = true;
// Function to randomly shuffle the doors
function winDoorGenerator() {
winner = Math.floor(Math.random() * 3);
if (winner === 1) {
openDoor1 = winPath;
openDoor2 = losePath;
openDoor3 = losePath;
} else if (winner === 2) {
openDoor2 = winPath;
openDoor1 = losePath;
openDoor3 = losePath;
} else {
openDoor3 = winPath;
openDoor2 = losePath;
openDoor1 = losePath;
}
}
// Calling the function
winDoorGenerator();
// Event listener for door 1
doorImage1.onclick = () => {


// Revealing necessary elements for dialogue
row1.hidden = true;
d1.hidden = false;
setTimeout(()=>{
	d1.hidden = true;
},1000);
setTimeout(()=>{
	row2.hidden = false;
},1000);

// Opening a door which has a goat behind it.
if (openDoor2 === losePath) {
	setTimeout(() => 
	{ doorImage2.src = openDoor2; }, 2000);

} else if (openDoor3 === losePath) {
	setTimeout(() => 
	{ doorImage3.src = openDoor3; }, 2000);
}

//Event listener if the player opts to switch
switchChoiceYes.onclick = () => {

	// If the opened door is door2, forming a
	// suitable dialogue.
	if (doorImage2.src === 
	"https://www.svgrepo.com/show/396571/goat.svg"){
		row2.hidden = true;
		instructions.innerHTML = "You switched your door to door 3.";
		setTimeout(()=>{
			instructions.innerHTML = 
			"Opening the chosen door......";
		},1000);

		// Opening the chosen door
		setTimeout(() => 
		{ doorImage3.src = openDoor3; }, 2500);

		//Conditions to display the result page
		if (openDoor3 === losePath) {
			setTimeout(() => { switchAndLose(); }, 3500)
		} else {
			setTimeout(() => { switchAndWin(); }, 3500)
		}
	}
	//If the opened door is door3, forming a suitable dialogue.
	else if (doorImage3.src === 
	"https://www.svgrepo.com/show/396571/goat.svg") {
		row2.hidden = true;
		instructions.innerHTML = "You switched your door to door 2.";
		setTimeout(()=>{
			instructions.innerHTML = 
			"Opening the chosen door......";
		},1000);
		
		// Opening the chosen door
		setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
		//Conditions to display the result page
		if (openDoor2 === losePath) {
			setTimeout(() => { switchAndLose(); }, 3500)
		} else {
			setTimeout(() => { switchAndWin(); }, 3500)
		}
	}
}
//Event listener if the player does not opts to switch
switchChoiceNo.onclick = () => {
	row2.hidden = true;
	instructions.innerHTML = "You stick with your original choice (Door 1)";
	setTimeout(() => 
	{ instructions.innerHTML = 
	"Opening the chosen door......"; }, 1000);
	
	// Opening the chosen door
	setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
	
	// Conditions to display the result page
	if (openDoor1 === losePath) {
		setTimeout(() => { noSwitchAndLose(); }, 3500)
	} else {
		setTimeout(() => { noSwitchAndWin(); }, 3500)
	}
}
}
const switchAndWin = () => {
body.hidden = true;
SwitchAndWin.hidden = false;
}
const switchAndLose = () => {
body.hidden = true;
SwitchAndLose.hidden = false;
}
const noSwitchAndWin = () => {
body.hidden = true;
NoSwitchAndWin.hidden = false;
}
const noSwitchAndLose = () => {
body.hidden = true;
NoSwitchAndLose.hidden = false;
}
doorImage2.onclick = () => {
row1.hidden = true;
d2.hidden = false;
setTimeout(() => { d2.hidden = true; }, 1000);
setTimeout(() => { row2.hidden = false; }, 1000)



if (openDoor1 === losePath) {
	setTimeout(() =>
	{ doorImage1.src = openDoor1; }, 2000);

} else if (openDoor3 === losePath) {
	setTimeout(() => 
	{ doorImage3.src = openDoor3; }, 2000);
}

switchChoiceYes.onclick = () => {
	if (doorImage1.src === 
	"https://www.svgrepo.com/show/396571/goat.svg") {
		row2.hidden = true;
		instructions.innerHTML = "You switched your door to door 3."
		setTimeout(() => 
		{ instructions.innerHTML = 
		"Opening the chosen door......"; }, 1000);
		setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
		if (openDoor3 === losePath) {
			setTimeout(() => { switchAndLose(); }, 3500)
		} else {
			setTimeout(() => { switchAndWin(); }, 3500)
		}
	} else if (doorImage3.src === 
	"https://www.svgrepo.com/show/396571/goat.svg") {
		row2.hidden = true;
		instructions.innerHTML = "You switched your door to door 1.";
		setTimeout(() => { instructions.innerHTML 
		= "Opening the chosen door......"; }, 1000);
		setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
		if (openDoor1 === losePath) {
			setTimeout(() => { switchAndLose(); }, 3500)
		} else {
			setTimeout(() => { switchAndWin(); }, 3500)
		}
	}
}
switchChoiceNo.onclick = () => {
	row2.hidden = true;
	instructions.innerHTML = "You stick with your original choice (Door 2)"
	setTimeout(() => { instructions.innerHTML =
	"Opening the chosen door......"; }, 1000);
	setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
	if (openDoor2 === losePath) {
		setTimeout(() => { noSwitchAndLose(); }, 3500)
	} else {
		setTimeout(() => { noSwitchAndWin(); }, 3500)
	}
}
}
doorImage3.onclick = () => {
row1.hidden = true;
d3.hidden = false;
setTimeout(() => { d3.hidden = true; }, 1000);
setTimeout(() => { row2.hidden = false; }, 1000)



if (openDoor1 === losePath) {
	setTimeout(() => { doorImage1.src = openDoor1; }, 2000);

} else if (openDoor2 === losePath) {
	setTimeout(() => { doorImage2.src = openDoor2; }, 2000);
}

switchChoiceYes.onclick = () => {
	if (doorImage1.src === 
	"https://www.svgrepo.com/show/396571/goat.svg") {
		row2.hidden = true;
		instructions.innerHTML = "You switched your door to door 2."
		setTimeout(() => { instructions.innerHTML = 
		"Opening the chosen door......"; }, 1000);
		setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
		if (openDoor2 === losePath) {
			setTimeout(() => { switchAndLose(); }, 3500)
		} else {
			setTimeout(() => { switchAndWin(); }, 3500)
		}
	} else if (doorImage2.src === 
	"https://www.svgrepo.com/show/396571/goat.svg") {
		row2.hidden = true;
		instructions.innerHTML = "You switched your door to door 1."
		setTimeout(() => { instructions.innerHTML = 
		"Opening the chosen door......"; }, 1000);
		setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
		if (openDoor1 === losePath) {
			setTimeout(() => { switchAndLose(); }, 3500)
		} else {
			setTimeout(() => { switchAndWin(); }, 3500)
		}
	}
}
switchChoiceNo.onclick = () => {
	row2.hidden = true;
	instructions.innerHTML = "You stick with your original choice (Door 3)"
	setTimeout(() => { instructions.innerHTML = 
	"Opening the chosen door......"; }, 1000);
	setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
	if (openDoor3 === losePath) {
		setTimeout(() => { noSwitchAndLose(); }, 3500)
	} else {
		setTimeout(() => { noSwitchAndWin(); }, 3500)
	}
}
}