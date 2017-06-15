$(document).ready(function(){
	var audioElement = document.getElementById('musicTrigger');

	
	$(".pop").slideUp();
	
	$(".card").click(function(){
		$(".pop").slideDown();
	});
	
	$("a").mouseover(function() {
		$(this).css("color", "#ffd86d");
	});
	$("a").mouseout(function() {
		$(this).css("color", 'white');
	});
	
	$(".me").click(function() {
		audioElement.play();
	});
});