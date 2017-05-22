$(document).ready(function(){
	var audioElement = document.getElementById('musicTrigger');

	
	$(".main").slideUp();
	
	$("#jquery").click(function(){
		$(".main").slideToggle();
	});
	
	$("a").mouseover(function() {
		$(this).css("color", "#ffd86d");
	});
	$("a").mouseout(function() {
		$(this).css("color", 'white');
	});
	
	$("#jquery").mouseover(function() {
		$(this).css("color", "#95968e");
	});
	$("#jquery").mouseout(function() {
		$(this).css("color", 'black');
	});
	

	$(".me").click(function() {
		audioElement.play();
	});
});