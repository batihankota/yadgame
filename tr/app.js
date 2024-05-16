// Global değişkenleri tanımlama
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

// Kapı resimlerine tıklayıcı etkinliklerini devre dışı bırakan fonksiyon
function disableDoorClickEvents() {
    doorImage1.onclick = null;
    doorImage2.onclick = null;
    doorImage3.onclick = null;
	//d1.hidden = true;
	//d2.hidden = true;
	//d3.hidden = true;
}


// Dışındaki düğmelere tıklamayı engellemek için olay dinleyicisi
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    // Tıklanan öğenin düğmelerin dışında olup olmadığını kontrol etme
    if (clickedElement !== switchChoiceYes && clickedElement !== switchChoiceNo) {
        event.stopPropagation(); // Olay yayılmasını durdur
        disableDoorClickEvents(); // Kapı resimlerine tıklama etkinliklerini devre dışı bırak
    }else{
		event.preventDefault(); // Varsayılan eylemi önle
	}
});

// Araba resmi
const winPath = "https://www.svgrepo.com/show/476857/car-rental.svg";
// Keçi resmi
const losePath = "https://www.svgrepo.com/show/396571/goat.svg";

// Kapıları karıştırmak için değişkenler
var openDoor1, openDoor2, openDoor3, winner;
// Gereksiz öğeleri gizleme
row2.hidden = true;
SwitchAndWin.hidden = true;
SwitchAndLose.hidden = true;
NoSwitchAndWin.hidden = true;
NoSwitchAndLose.hidden = true;
d1.hidden = true;
d2.hidden = true;
d3.hidden = true;
// Kapıları rastgele karıştırmak için fonksiyon
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
// Fonksiyonu çağırma
winDoorGenerator();
// Kapı 1 için olay dinleyicisi
doorImage1.onclick = () => {

	// Diyalog için gerekli öğeleri açığa çıkarma
	row1.hidden = true;
	d1.hidden = false;
	setTimeout(()=>{
		d1.hidden = true;
	},1000);
	setTimeout(()=>{
		row2.hidden = false;
	},1000);

	// Arkasında keçi olan bir kapıyı açma.
	if (openDoor2 === losePath) {
		setTimeout(() => 
		{ doorImage2.src = openDoor2; }, 2000);

	} else if (openDoor3 === losePath) {
		setTimeout(() => 
		{ doorImage3.src = openDoor3; }, 2000);
	}

	// Oyuncunun değiştirmeyi seçmesi durumunda olay dinleyicisi
	switchChoiceYes.onclick = () => {

		// Açılan kapı 2 ise, uygun bir diyalog oluşturma
		if (doorImage2.src === 
		"https://www.svgrepo.com/show/396571/goat.svg"){
			row2.hidden = true;
			instructions.innerHTML = "Kapını 3.kapı ile değiştirdin.";
			setTimeout(()=>{
				instructions.innerHTML = 
				"Seçtiğin kapı açılıyor......";
			},1000);

			// Seçilen kapıyı açma
			setTimeout(() => 
			{ doorImage3.src = openDoor3; }, 2500);

			// Sonucu görüntülemek için koşullar
			if (openDoor3 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
		// Açılan kapı 3 ise, uygun bir diyalog oluşturma
		else if (doorImage3.src === 
		"https://www.svgrepo.com/show/396571/goat.svg") {
			row2.hidden = true;
			instructions.innerHTML = "Kapını 2.kapı ile değiştirdin.";
			setTimeout(()=>{
				instructions.innerHTML = 
				"Seçtiğin kapı açılıyor......";
			},1000);
			
			// Seçilen kapıyı açma
			setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
			// Sonucu görüntülemek için koşullar
			if (openDoor2 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
	}
	// Oyuncunun değiştirmeyi seçmemesi durumunda olay dinleyicisi
	switchChoiceNo.onclick = () => {
		row2.hidden = true;
		instructions.innerHTML = "Seçimin hala aynı (1.Kapı)";
		setTimeout(() => 
		{ instructions.innerHTML = 
		"Seçtiğin kapı açılıyor......"; }, 1000);
		
		// Seçilen kapıyı açma
		setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
		
		// Sonucu görüntülemek için koşullar
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

// Kapı 2 için olay dinleyicisi
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
			instructions.innerHTML = "Kapını 3.kapı ile değiştirdin."
			setTimeout(() => 
			{ instructions.innerHTML = 
			"Seçtiğin kapı açılıyor......"; }, 1000);
			setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
			if (openDoor3 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		} else if (doorImage3.src === 
		"https://www.svgrepo.com/show/396571/goat.svg") {
			row2.hidden = true;
			instructions.innerHTML = "Kapını 1.kapı ile değiştirdin.";
			setTimeout(() => { instructions.innerHTML 
			= "Seçtiğin kapı açılıyor......"; }, 1000);
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
		instructions.innerHTML = "Seçimin hala aynı (2.Kapı)"
		setTimeout(() => { instructions.innerHTML =
		"Seçtiğin kapı açılıyor......"; }, 1000);
		setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
		if (openDoor2 === losePath) {
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	}
}

// Kapı 3 için olay dinleyicisi
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
			instructions.innerHTML = "Kapını 2.kapı ile değiştirdin."
			setTimeout(() => { instructions.innerHTML = 
			"Seçtiğin kapı açılıyor......"; }, 1000);
			setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
			if (openDoor2 === losePath) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		} else if (doorImage2.src === 
		"https://www.svgrepo.com/show/396571/goat.svg") {
			row2.hidden = true;
			instructions.innerHTML = "Kapını 1.kapı ile değiştirdin."
			setTimeout(() => { instructions.innerHTML = 
			"Seçtiğin kapı açılıyor......"; }, 1000);
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
		instructions.innerHTML = "Seçimin hala aynı (3.Kapı)"
		setTimeout(() => { instructions.innerHTML = 
		"Seçtiğin kapı açılıyor......"; }, 1000);
		setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
		if (openDoor3 === losePath) {
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	}
}