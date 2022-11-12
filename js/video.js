var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	/*video = document.querySelector("#player1");*/
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	/*console.log("Play Video")*/
	video.play()
	document.getElementById("volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function(){
	/*console.log("Pause Video")*/
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
	/*console.log(video.currentTime);*/
	/*video.currentTime += 15;*/
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		console.log(video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Video");
	if(!video.muted){
		video.muted = true;
		document.getElementById("mute").innerHTML="Unmute";
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value / 100
	document.getElementById("volume").textContent = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

