// Commented out old code once we started learning Angular!

// function buildDom(music) { 
// 	var musicChart = "";
// 	var musicData;
// 	$.each(music, function(key) {
// 		if (key === "default-music") {
// 			musicData = music["default-music"];
// 			$("#song-info").html("");
// 			$("#song-info").append(`<table>`);
// 		}
// 		else {
// 			musicData = music["user-music"];
// 		}
// 	});

// 	$.each(musicData, function(index, key) {
// 		$("#song-info").append(`<tr><th colspan="3"><a class="delete-button" href="#">X</a>&nbsp;&nbsp;&nbsp${key.title}</th></tr>`);
// 		$("#song-info").append(`<tr><td>${key.artist}</td><<td>${key.album}</td><<td>${key.genre}</td></tr>`);
// 	});
// 	$("#song-info").append(`<a class="button" href="#">More  ></a>`);
// }

// $.ajax({
//   url: "default-music.JSON"
// }).done(function(data){
// 	buildDom(data);
// }).fail(function(error){
//   console.log(error);
// });

// $(document).ready(function() {
// 	$(".button").on('click', function(event) {
// 		$(this).remove();
// 		$.ajax({
// 		  url: "user-music.JSON"
// 		}).done(function(data){
// 			buildDom(data);
// 		}).fail(function(error){
// 		  console.log(error);
// 		});		
// 	});
// 	$(document).on('click', '.delete-button', function(event) {
// 		$(this).closest("tr").next("tr").remove();
// 		$(this).closest("tr").remove();
// 	});
// });


