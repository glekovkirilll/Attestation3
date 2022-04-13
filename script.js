$('#leftButton').click(
	function(e){
		$('#animatedImage').animate({"marginLeft" : "-=100px"})
	}
);

$('#rightButton').click(
	function(e){
		$('#animatedImage').animate({"marginLeft" : "+=100px"})
	}
);