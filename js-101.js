// var songs = [];
// var songString = "";
var element = document.getElementById("song-info");
// var songContainer = element.innerHTML;

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// function addSongEnd(title, artist, album) {
// 	songs.push(title + "- by " + artist + " on the album " + album);
// }

// function addSongBegining(title, artist, album) {
// 	console.log(title);
// 	songs.unshift(title + "- by " + artist + " on the album " + album);
// }

// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = (songs[i].replace(/[^0-9a-z&>" "]/gi, ''));
// 	songs[i] = (songs[i].replace(/>/gi, '-'));
// }

// addSongBegining("Wait for it", "Leslie Odam, Jr.", "Hamilton");
// addSongEnd("Boombastic", "Shaggy", "Boombastic");

// for (var i = 0; i < songs.length; i++) {
// 	songString += songs[i] + "<br>";
// }




function buildDom() {
	var musicData = JSON.parse(this.responseText);
	var musicChart = ""
	musicChart += `<table>`
	for (var i = 0; i < musicData["default-music"].length; i++) {
		musicChart += `<tr>`
		musicChart += `<th colspan="1"><a class="delete-button" href="#">X</a>&nbsp;&nbsp;&nbsp;${musicData["default-music"][i].title}</th>`
		musicChart += `</tr>`
		musicChart += `<tr>`
		musicChart += `<td>${musicData["default-music"][i].artist}</td>`	
		musicChart += `<td>${musicData["default-music"][i].album}</td>`	
		musicChart += `<td>${musicData["default-music"][i].genre}</td>`	
		musicChart += `</tr>`
	}
		musicChart += `</table>`
		musicChart += `<a class="button" href="#">More  ></a>`
		element.innerHTML = musicChart;
}

function executeThisCodeAfterFileFails() {
	alert("File not found!");
}

var myRequest = new XMLHttpRequest(); 
myRequest.addEventListener("load", buildDom); //Look at createCategoriesArray
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "default-music.JSON");
myRequest.send();

document.body.addEventListener("click", function(event) {
	if (event.target.className === "delete-button") {
		event.target.parentNode.parentNode.nextSibling.remove();
		event.target.parentNode.parentNode.remove();
	}
});