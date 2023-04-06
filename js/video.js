var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("video").play()
	var vid = document.querySelector("video")
	document.querySelector("#volume").textContent = vid.volume*100 + "%"

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	document.querySelector("video").pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow");
	var rate = document.querySelector("video").playbackRate;
	console.log(rate);
	rate = rate - (document.querySelector("video").playbackRate*.10);
	document.querySelector("video").playbackRate = rate;
	console.log(rate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast");
	var rate = document.querySelector("video").playbackRate;
	console.log(rate);
	rate = rate + (document.querySelector("video").playbackRate*.10);
	document.querySelector("video").playbackRate = rate;
	console.log(rate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	var time = document.querySelector("video").currentTime;
	if (document.querySelector("video").ended){
		document.querySelector("video").currentTime = 0
		console.log(time);
	}
	else {
		console.log(time);
		var time = document.querySelector("video").currentTime + 10;
		document.querySelector("video").currentTime = time
		console.log(time);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	var vid = document.querySelector("video")
	console.log(vid.muted)
	if (vid.muted == false){
		console.log("Mute")
		vid.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		console.log("Unmute")
		vid.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
    console.log("I am in slider")
	console.log(this)
    console.log(this.value)
    vid = document.querySelector("video")
    vid.volume = this.value*.01
	document.querySelector("#volume").innerHTML = vid.volume*100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("I am in old school")
    bd = document.querySelector("body")
    bd.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("I am in original")
    bd = document.querySelector("body")
    bd.classList.remove("oldSchool")
});