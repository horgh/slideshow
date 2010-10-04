<?
/*
 * Get list of dirs/files in given directory
 *
 * TODO do some error handling
 */
function get_files($dir) {
	if ($handle = opendir($dir)) {
		while (false !== ($file = readdir($handle))) {
			if ($file != '.' && $file != '..') {
				$files[] = $file;
			}
		}
	}
	closedir($handle);
	return $files;
}
?>
