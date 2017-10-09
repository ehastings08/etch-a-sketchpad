$(document).ready(function() {
	console.log('jQuery on');

	function drawSquares(numSquares) {
		// Need to clear the grid if running again
		$('.child-container').remove();

		// Draw grid
		for (i=0; i<(numSquares*numSquares); i++) {
			$('.container').append('<div class="child-container child-container-default-size" id="'+i+'"></div>');
		}
	}

	// Start by drawing the default grid
	drawSquares(16);

	// Create hover effect
	$(".child-container").hover(function() {
		$(this).addClass('highlighted');
	});

	// Upon button press, get user input and reset grid
	$('#header-button').click(function() {
		var numSquares = prompt('How many squares would you like?','16');
		console.log(numSquares);
	});

} );