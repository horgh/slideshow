/*
	assumes all gallerys are relative to cwd
	see change_image() call to change this
*/

$(document).ready(function() {

	// 2 second delay
	var delay = 2000;

	$('#button').click(function(e) {
		e.preventDefault();

		var gallery = "testgallery";

		// get list of images from images.php
		$.get(
			"images.php",
			{
				album: gallery
			},
			function (data) {
				var images = JSON.parse(data);
				slideshow(gallery, images);
			}
		);
	});

	// switch a single image
	function change_image (image) {
		$('#image').attr('src', image);
		$('#msg').html($('#msg').html() + "Loading image: " + image + "<br>");
	}

	// loop through images array setting up calls to change images
	function slideshow (gallery, images) {
		for (var i = 0; i < images.length; i++) {
			$('#msg').html($('#msg').html() + images[i] + ", ");

			var actual_delay = delay * (i+1);
			setTimeout(
				function(x) {
					return function() {
						change_image(gallery + "/" + images[x])
					};}(i),
				actual_delay
			);
		}
		$('#msg').html($('#msg').html() + '<br>');
	}

});
