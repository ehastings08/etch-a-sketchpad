$(document).ready(function() {
	console.log('jQuery on');

	/* Code below */
	// Create divs
	for (i=0; i<16*16; i++) {
		$('.container').append('<div class="child-container child-container-default-size" id="'+i+'"></div>');
	}

	// Create hover effect
	$(".child-container").hover(function() {
		$(this).addClass('highlighted');
	});

	// Upon button press, get user input and reset grid
	$('#header-button').click(function() {
		var squares = prompt('How many squares would you like?','16');
		console.log(squares);
	});

} );