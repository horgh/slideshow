<?
require_once("config.php");
require_once("util.php");
?>
<html>

<head>
<title>slideshow</title>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="slideshow.js"></script>
</head>

<body>

<select id="dropdown" name="dropdown">
<?
$files = get_files($ALBUMS_DIR);
foreach ($files as $file) {
	print('<option value="' . $file . '">' . $file . '</option>');
}
?>
</select>

<select id="time_choice" name="time_choice">
<option value="30">30 seconds</option>
<option value="60">1 minute</option>
<option value="180">3 minutes</option>
<option value="300">5 minutes</option>
<option value="3">3 seconds</option>
</select>

<div id="start_button"><a href="#start">Start</a></div>
<div id="stop_button"><a href="#stop">Stop</a></div>

<img id="image" src="default.jpg">
<div id="msg"></div>

</body>
</html>
