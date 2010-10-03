<?
/*
attempts to read directory cwd + $_GET['album'] for files

TODO:
 - limit to only image files
 - use hardcoded file for acceptable images rather than any $_GET['album'] so
   as to avoid potential security issue
*/

if (isset($_GET['album'])) {
	$dir = getcwd() . '/' . $_GET['album'];
	// make sure directory actually exists...
	if (!is_dir($dir)) {
		print("Directory doesn't exist!\n");
		return;
	}

	// code for reading files from http://php.net/manual/en/function.readdir.php
	// read list of filenames into array from dir
	if ($handle = opendir($dir)) {
		while (false !== ($file = readdir($handle))) {
			if ($file != '.' && $file != '..') {
				$files[] = $file;
			}
		}
	}
	closedir($handle);
	//print_r($files);
	$json = json_encode($files);
	print($json);
}
?>
