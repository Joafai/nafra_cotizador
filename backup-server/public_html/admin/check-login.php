<?php
session_start();
require 'datos.php';

// data sent from form login.html 
$email = $_POST['email'];
$password = $_POST['password'];

$result = mysqli_query($conn, "SELECT email, password, name FROM users WHERE email LIKE '$email'");

// Variable $row hold the result of the query
$row = mysqli_fetch_assoc($result);

if ($_POST['password'] === $row['password']) {

	$_SESSION['loggedin'] = true;
	$_SESSION['name'] = $row['Name'];
	$_SESSION['start'] = time();
	$_SESSION['expire'] = $_SESSION['start'] + (1 * 600);

	header('Location:index.php');
	exit();
} else {
	$mensaje = "<div class='alert alert-danger alert-dismissible mt-4' role='alert'>
	<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
	<span aria-hidden='true'>&times;</span></button>

	<p>La dirección de mail o la clave son incorrectas!</p>
	<p><a class='alert-link' href=login.php>Login</a></p></div>";
$_SESSION['mensaje'] = $mensaje;
header('Location:login.php');

}
