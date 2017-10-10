$(document).ready(function() {

	function updateSquareSize(numSquares) {
		console.log('Running updateSquareSize');

		var size = (960 / numSquares - 2).toString();

		console.log('Calculated size is:')
		console.log(size);

		// Add height/width css here
		$('.child-container').height(size);
		$('.child-container').width(size);

		console.log('Updated css height is:')
		console.log($('.child-container').css('height'));
	}

	function drawSquares(numSquares) {
		// Need to clear the grid if running again
		$('.child-container').remove();

		// Draw grid
		for (i=0; i<(numSquares*numSquares); i++) {
			$('.container').append('<div class="child-container" id="'+i+'"></div>');
		}

		// Update square size
		updateSquareSize(numSquares);
		hoverSquares();

	}

	function hoverSquares() {
		// Create hover effect
		$(".child-container").hover(function() {
			$(this).addClass('highlighted');
		});
	}

	// Start by drawing the default grid
	drawSquares(16);

	/*
	// Create hover effect
	$(".child-container").hover(function() {
		$(this).addClass('highlighted');
	});
	*/
	hoverSquares();

	// Upon button press, get user input and reset grid
	$('#header-button').click(function() {;
		var numSquares = prompt('How many squares would you like?','16');
		drawSquares(numSquares);
	});

} );