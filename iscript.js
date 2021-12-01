const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
	log.textContent = e.target.value;
}

/* document.getElementById("gender").addEventListener("change", function () {
	console.log(this.value);

	if (this.value === "Female") {
		// do stuff
		document.getElementById("valuesGender").textContent += this.value;
	}
}); */
/* 
const select = document.querySelector("select");
const place = document.getElementById("valuesGender");

var string = `<img src="imgRace/halfling.jpg">`;
var stringMasik = `<img src="imgRace/human.jpg">`;

select.addEventListener("change", imgFill);

function imgFill() {
	var choice = select.value;

	if (choice === "Female") {
		place.insertAdjacentHTML("afterbegin", string);
	} else if (choice === "Intersex") {
		place.insertAdjacentHTML("afterbegin", stringMasik);
	}
} */

/* const img = document.querySelector("#valuesGender");
const select = document.querySelector("#gender");

select.addEventListener("change", function () {
	img.src = `https://flagpedia.net/data/flags/h80/${this.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`;
});
 */

function changeRaceImage() {
	var imgValue = document.getElementById("race").value;
	document.getElementById("selectRaceImg").src = "imgRace/" + imgValue + ".png";
	document.getElementById("selectRaceImg").style.display = "block";
}

function changeClassImage() {
	var imgValue = document.getElementById("class").value;
	document.getElementById("selectClassImg").src =
		"imgClass/" + imgValue + ".png";
	document.getElementById("selectClassImg").style.display = "block";
}

function changeGenderImage() {
	var imgValue = document.getElementById("gender").value;
	document.getElementById("selectGenderImg").src =
		"imgGender/" + imgValue + ".png";
	document.getElementById("selectGenderImg").style.display = "block";
}
