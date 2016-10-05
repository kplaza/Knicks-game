var players = [
["S","T","A","R","K","S"],
  ["P","O","R","Z","I","N","G","A","S"],
  ["F","R","A","Z","I","E","R"],
  ["C","A","R","M","E","L","O"],
  ["E","W","I","N","G"],
  ["H","O","U","S","T","O","N"],
]
var random = Math.floor((Math.random()*(players.length-1))); 

var word = players[random]; 
var rate = new Array(word.length);
var oakley = 0;


for (var i = 0; i < rate.length; i++){
	rate[i] = "_ ";
}


function knicks(){
	for (var i = 0; i < rate.length; i++){
	var output = document.getElementById("output");
	var text  = document.createTextNode(rate[i]);
	output.appendChild(text);
	}
}


var starks = function(){
	var f = document.forms; 
	var b = f.elements["left"]; 
	var provided = b.value; 
	provided = provided.toUpperCase();
	for (var i = 0; i < word.length; i++){
		if(word[i] === provided){
			rate[i] = provided + " ";
			var kev = true;
		}
	b.value = "";
	}
	
	
	var output = document.getElementById("output");
	output.innerHTML=""; 
	knicks();
	

	if(!kev){
		var wrongLetter = document.getElementById("wrongLetter");
		var text = document.createTextNode(" " + provided);
		wrongLetter.appendChild(text); 
	}
	

	var check = true;
	for (var i = 0; i < rate.length; i++){
		if(rate[i] === "_ "){
			check = false;
		}
	}
	if(check){
		
		$("#div1").fadeIn();
	}
}



function init(){
	knicks();
	SC.initialize({client_id: '8fba673fabdb327a1fab7b8af63503f9'
});





var cole = SC.get("/tracks",{
 q:"jock jams megamix"
 // 
}).then(function(response){
  songs = response;
  console.log(songs)
 
  SC.stream("/tracks/" + songs[0].id ).then (function(player){
    console.log(player);
    player.play();
  });
});
}

window.onload = init;