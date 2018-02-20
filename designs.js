$(document).ready(function() {

	const grid = $('#pixelCanvas');
	let color = $('#colorPicker');
	let mouseDown = false;
	
	// Event listener for the size picker
	$('#sizePicker').submit(function(event) {
		event.preventDefault();
		makeGrid();
	});

	/*
	The makeGrid() function uses size from user input to 
	make the required table/grid
	*/
	function makeGrid() {

		// Clears previously drawn grid
		grid.html('');

		// This builds the grid that will be drawn on the pixel canvas 
		for (let i = 0; i < $('#inputHeight').val(); i++) {
			var tableElement = $('<tr></tr>'); 

			for (let j = 0; j < $('#inputWidth').val(); j++) {
				tableElement.append('<td></td>');
			}

			grid.append(tableElement);
		}
	};

	// Changes background color of grid element to selected value on click 
	grid.on('click', 'td', function() {
		$(this).css('background-color', color.val());	
	});

	//Remove color on double click
  	grid.on('dblclick', 'td', function changeColor() {
		$(this).css('background-color', 'transparent');
	});

	// Check if mousedown is true or false for dragging to fill
	grid.on('mousedown', function() {
		mouseDown = true;
	});

	grid.on('mouseup', function() {
		mouseDown = false;
	});

	// Part of dragging to fill multiple grid pixels at a time
	grid.on('mousemove', 'td', function(event) {
		event.preventDefault();
		if (mouseDown) {
			$(this).attr('style', 'background-color: ' + color.val());
		}
	});

	// Resets grid to have no color fill
	$('#clearButton').on('click', function() {
		if (grid.html() != '') {
			makeGrid();
		}	
	});
});

