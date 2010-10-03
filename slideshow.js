$(document).ready(function() {
	var albums_dir = 'albums/';

	// holds timer associated with running slideshow
	var intervalID;

	// 2 second delay
	var delay = 2000;

	/*
	 * start button clicked
	 */
	$('#button').click(function(e) {
		e.preventDefault();

		// gallery is the selected one
		var gallery = $("#dropdown :selected").text();

		// get list of images from images.php
		$.get(
			"images.php",
			{
				album: gallery
			},
			function (data) {
				var images = JSON.parse(data);

				// repeatedly call slideshow every delay
				intervalID = setInterval(
					function() {
						slideshow(gallery, images)
					}, 2000
				);
			}
		);
	});

	/*
	 * switch a single image
	 */
	function change_image(image) {
		$('#image').attr('src', image);
		$('#msg').html($('#msg').html() + "Loading image: " + image + "<br>");
	}

	/*
	 * select a random image and display
	 */
	function slideshow(gallery, images) {
		// choose a random image
		var i = Math.floor(Math.random() * (images.length-1));
		change_image(albums_dir + gallery + "/" + images[i])
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
