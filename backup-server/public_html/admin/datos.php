<?php
$servername = "localhost";
$username = "nafracom";
$password = "f2Xs26QVfX.5n.!";
$dbname = "nafracom_novedades";
//f2Xs26QVfX.5n.!
//usuario base nafracom Tr$c63g4

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection


if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";

function convertYoutube($string) {
	return preg_replace(
		"/\s*[a-zA-Z\/\/:\.]*youtu(be.com\/watch\?v=|.be\/)([a-zA-Z0-9\-_]+)([a-zA-Z0-9\/\*\-\_\?\&\;\%\=\.]*)/i",
		"<div class=\"embed-responsive embed-responsive-16by9\"><iframe class=\"embed-responsive-item\" src=\"//www.youtube.com/embed/$2\" allowfullscreen></iframe></div>",
		$string
	);
}

function radio_checked($valor_bd, $value, $name){
     if ($valor_bd == $value) {
          echo "<input class=\"form-check-input\" type='radio' name='" . $name . "' value='" . $value . "' checked > ";
          echo ' <label class="form-check-label" for="'.$value.'">'.$valor_bd.'</label>';
     } else {
          echo "<input class=\"form-check-input\" type='radio' name='" . $name . "' value='" . $value . "'> ";
          echo ' <label class="form-check-label" for="'.$value.'">'.$valor_bd.'</label>';
     }
}
