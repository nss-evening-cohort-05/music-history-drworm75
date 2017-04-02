var songs = [];
var songString = "";
var element = document.getElementById("song-info");
var songContainer = element.innerHTML;

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function addSongEnd(title, artist, album) {
	console.log(title);
	songs.push(title + "- by " + artist + " on the album " + album);
}

function addSongBegining(title, artist, album) {
	console.log(title);
	songs.unshift(title + "- by " + artist + " on the album " + album);
}

for (var i = 0; i < songs.length; i++) {
	songs[i] = (songs[i].replace(/[^0-9a-z>" "]/gi, ''));
	songs[i] = (songs[i].replace(/>/gi, '-'));
}

addSongBegining("Wait for it", "Leslie Odam, Jr.", "Hamilton");
addSongEnd("Boombastic", "Shaggy", "Boombastic");

for (var i = 0; i < songs.length; i++) {
	songString += songs[i] + "<br>";
}

element.innerHTML = songString;
console.log(songContainer);