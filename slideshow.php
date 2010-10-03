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
$files = util::get_files(config::ALBUMS_DIR);
foreach ($files as $file) {
	print('<option value="' . $file . '">' . $file . '</option>');
}
?>
</select>
<div id="button"><a href="start">start</a></div>

<img id="image" src="">
<div id="msg">Ready<br></div>

</body>
</html>
