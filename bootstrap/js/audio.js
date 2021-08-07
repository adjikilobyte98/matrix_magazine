$(document).ready(function() {
 var backsound = new buzz.sound("backsound.mp3",{
  preload: true,
  autoplay: true,
  loop: true
});

 $('#audio').on('click', function(){
  backsound.togglePlay();
  if(backsound.isPaused()){
    $("#audio").toggleClass("btn-soundhidup");
  } else {
    $("#audio").toggleClass("btn-soundhidup");
  }
});
});