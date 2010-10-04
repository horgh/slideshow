$(document).ready(function() {
	// relative path to albums directory. should match config.php
	var albums_dir = 'albums/';

	var default_image = 'default.jpg';

	// holds timer associated with running slideshow
	var intervalID;

	// index of last seen
	var last_index = -1;

	/*
	 * start button clicked
	 */
	$('#start_button').click(function(e) {
		e.preventDefault();

		last_index = -1;
		// first stop any running slideshow
		clearInterval(intervalID);

		// gallery & delay choice from dropdowns
		var gallery = $("#dropdown :selected").text();
		var delay = $("#time_choice :selected").val();

		// get list of images from images.php
		$.get(
			"images.php",
			{
				album: gallery
			},
			function (data) {
				var images = JSON.parse(data);

				// display first image immediately
				slideshow(gallery, images);
				// repeatedly call slideshow every delay
				intervalID = setInterval(
					function() {
						slideshow(gallery, images)
					}, delay * 1000
				);
			}
		);
	});

	/*
	 * stop button clicked
	 */
	$('#stop_button').click(function(e) {
		e.preventDefault();
		stop_slideshow();
	});

	/*
	 * stop slideshow & display default
	 */
	function stop_slideshow() {
		clearInterval(intervalID);
		change_image(default_image);
	}

	/*
	 * switch a single image
	 */
	function change_image(image) {
		$('#image').attr('src', image);
		// add a message saying the filename
		//$('#msg').html($('#msg').html() + "Loading image: " + image + "<br>");
	}

	/*
	 * select a random image and display
	 */
	function slideshow(gallery, images) {
		// choose a random image
		var i = -1;
		// get a new random index if i unset or found is same as previously displayed
		while (i == -1 || i == last_index) {
			i = Math.floor(Math.random() * images.length);
		}
		change_image(albums_dir + gallery + "/" + images[i])
		last_index = i;
	}

	/*
	 * loop through images array setting up calls to change images
	 * sequential.
	 */
	function slideshow_seq(gallery, images) {
		for (var i = 0; i < images.length; i++) {
			$('#msg').html($('#msg').html() + images[i] + ", ");

			var actual_delay = delay * (i+1);
			setTimeout(
				function(x) {
					return function() {
						change_image(albums_dir + gallery + "/" + images[x])
					};}(i),
				actual_delay
			);
		}
		$('#msg').html($('#msg').html() + '<br>');
	}
});
