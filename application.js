$(document).ready(function() {
	console.log('jQuery is working');

	/* Code below */
	// Create divs
	for (i=0; i<16*16; i++) {
		$('.container').append('<div class="child-container" id="'+i+'"></div>');
	}
} );