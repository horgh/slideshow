<?
/*
 * attempts to read directory cwd + $_GET['album'] for files
 */

require_once("util.php");
require_once("config.php");

if (isset($_GET['album'])) {
	$dir = $ALBUMS_DIR . '/' . $_GET['album'];
	// make sure directory actually exists...
	if (!is_dir($dir)) {
		print("Directory doesn't exist!\n");
		return;
	}

	// read list of filenames into array from dir
	$files = get_files($dir);
	//print_r($files);
	$json = json_encode($files);
	print($json);
}
?>
