<?php
 	$sFileInfo = '';
	$headers = array();
	 
	foreach($_SERVER as $k => $v) {
		if(substr($k, 0, 9) == "HTTP_FILE") {
			$k = substr(strtolower($k), 5);
			$headers[$k] = $v;
		} 
	}
	
	$file = new stdClass;
	$file->name = str_replace("\0", "", rawurldecode($headers['file_name']));
	$file->size = $headers['file_size'];
	$file->content = file_get_contents("php://input");
	
	$filename_ext = strtolower(array_pop(explode('.',$file->name)));
	$allow_file = array("jpg", "png", "bmp", "gif");

	$file->name = uniqid(rand(), false).".".$filename_ext;
	
	if(!in_array($filename_ext, $allow_file)) {
		echo "NOTALLOW_".$file->name;
	} else {
		$uploadDir = '../../../../../../userfile/contents/'.date("Y").'/'.date("m").'/'.date("d").'/';
		if(!is_dir($uploadDir)){
			mkdir($uploadDir, 0755, true);
		}
		
		$newPath = $uploadDir.iconv("utf-8", "cp949", $file->name);
		
		if(file_put_contents($newPath, $file->content)) {
			$sFileInfo .= "&bNewLine=true";
			$sFileInfo .= "&sFileName=".$file->name;
			$sFileInfo .= "&sFileURL=../../../../../../userfile/contents/".date("Y")."/".date("m").'/'.date("d").'/'.$file->name;
		}
		
		echo $sFileInfo;
	}
?>