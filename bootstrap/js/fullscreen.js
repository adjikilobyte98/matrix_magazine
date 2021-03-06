var enterFullscreen = function(el) {
	if(el.requestFullscreen) {
		el.requestFullscreen();
	} else if(el.msRequestFullscreen) {
		el.msRequestFullscreen();
	} else if(el.mozRequestFullScreen) {
		el.mozRequestFullScreen();
	} else if(el.webkitRequestFullscreen) {
		el.webkitRequestFullscreen();
	} else {
		noFullscreenSupport();
	}
};

var exitFullscreen = function() {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else {
		noFullscreenSupport();
	}
};

var noFullscreenSupport = function() {
	alert('Your browser does not support the Fullscreen API.');
};

var fsbutton = document.getElementById('fsbutton');
fsbutton.addEventListener('click', function(e) {
	e.preventDefault();
	if((window.innerWidth === screen.width && window.innerHeight === screen.height) || (window.fullScreen)) {
		exitFullscreen();
	} else {
		enterFullscreen(document.documentElement);
	}	
});

var eventList = ["fullscreenchange", "MSFullscreenChange", "mozfullscreenchange", "webkitfullscreenchange"];
for(event of eventList) {
	window.addEventListener(event, function() {
		if(fsbutton.querySelector('.fa').classList.contains('fa-compress')) {
			fsbutton.querySelector('.fa').classList.add('fa-expand');
			fsbutton.querySelector('.fa').classList.remove('fa-compress');
		} else if(fsbutton.querySelector('.fa').classList.contains('fa-expand')) {
			fsbutton.querySelector('.fa').classList.remove('fa-expand');
			fsbutton.querySelector('.fa').classList.add('fa-compress');
		}
	});
}