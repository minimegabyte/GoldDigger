console.clear();

window.addEventListener("load", function(event) {
	spotlight = document.getElementById("night");
	sizedisplay = document.getElementById("currentsize");
	spotlightwidth = 128;
	spotlightheight = 128;
	
	
	//register an event to move the spotlight
	document.onmousemove = function(event) {
		spotlight.style.backgroundImage = "-webkit-radial-gradient(" + event.pageX + "px " + event.pageY + "px, " + spotlightwidth + "px " + spotlightheight + "px, transparent 5%, #000022)";
		sizedisplay.value = spotlightwidth + "x" + spotlightheight;
	};
	//fire the event for the first time
	document.onmousemove({ pageX: 100, pageY: 100 });
	
	document.getElementById("spotlightwidth").oninput = function(event) {
		spotlightwidth = this.value;
	};
	document.getElementById("spotlightheight").oninput = function(event) {
		spotlightheight = this.value;
	};
});