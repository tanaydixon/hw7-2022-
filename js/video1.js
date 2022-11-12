var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.getElementById("volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#Pause").addEventListener("click", function(){
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = 0.9 * video.playbackRate;
	console.log(video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		console.log(video.playbackRate);}
	});


document.querySelector("mute").addEventListener("click", function(){
	console.log("Mute Video");
	if(video.muted){
		video.muted = true;
		document.getElementById("mute").innerHTML="Unmute";
	}
	else{ 
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute";

	}
});

document.querySelector("#slider").addEventListener("click",function() {
	video.classList.add("oldSchool")
	
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove('oldSchool')
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

