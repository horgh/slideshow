<?
/*
attempts to read directory cwd + $_GET['album'] for files

TODO:
 - limit to only image files
 - use hardcoded file for acceptable images rather than any $_GET['album'] so
   as to avoid potential security issue
*/
require_once("util.php");
require_once("config.php");

if (isset($_GET['album'])) {
	$dir = config::ALBUMS_DIR . '/' . $_GET['album'];
	// make sure directory actually exists...
	if (!is_dir($dir)) {
		print("Directory doesn't exist!\n");
		return;
	}

	// read list of filenames into array from dir
	$files = util::get_files($dir);
	//print_r($files);
	$json = json_encode($files);
	print($json);
}
?>
