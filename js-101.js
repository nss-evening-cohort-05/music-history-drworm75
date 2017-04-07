var element = document.getElementById("song-info");
var moreBtn = document.getElementById("button");

function buildDom(music) {
	var musicChart = ""
	for (key in music) {
		if (key === "default-music") {
			var musicData = music["default-music"]		
		}
		else if (key === "user-music") {
			var musicData = music["user-music"]
		}
	}
	if (musicData === music["user-music"]) {
		musicChart = element.innerHTML;
	}

	musicChart += `<table>`
	for (var i = 0; i < musicData.length; i++) {
		musicChart += `<tr>`
		musicChart += `<th colspan="3"><a class="delete-button" href="#">X</a>&nbsp;&nbsp;&nbsp;${musicData[i].title}</th>`
		musicChart += `</tr>`
		musicChart += `<tr>`
		musicChart += `<td>${musicData[i].artist}</td>`	
		musicChart += `<td>${musicData[i].album}</td>`	
		musicChart += `<td>${musicData[i].genre}</td>`	
		musicChart += `</tr>`
	}
		musicChart += `</table>`
		musicChart += `<a class="button" href="#">More  ></a>`
		element.innerHTML = musicChart;
}

function executeRequest() {
	var data = JSON.parse(this.responseText);
	buildDom(data);
}

function executeThisCodeAfterFileFails() {
	alert("File not found!");
}

var myRequest = new XMLHttpRequest(); 
myRequest.addEventListener("load", executeRequest); //Look at createCategoriesArray
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "default-music.JSON");
myRequest.send();

document.body.addEventListener("click", function(event) {
	if (event.target.className === "delete-button") {
		event.target.parentNode.parentNode.nextSibling.remove();
		event.target.parentNode.parentNode.remove();
	}
});

document.body.addEventListener("click", function(event) {
	if (event.target.className === "button") {
		event.target.remove();
		var myRequest2 = new XMLHttpRequest(); 
		myRequest2.addEventListener("load", executeRequest); //Look at createCategoriesArray
		myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
		myRequest2.open("GET", "user-music.JSON");
		myRequest2.send();
	}
});

