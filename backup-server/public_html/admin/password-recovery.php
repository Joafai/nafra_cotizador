<!doctype html>
<html lang="en">
	<head>		
    	<title>Password Recovery</title>
    	<!-- Required meta tags -->
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
  </head>
<body>
<div class="container">
	<div class="row">
		<div class="col-sm-12 col-md-12 col-lg-12">
			
			<?php
			include 'datos.php';
			
			$email = $_POST['email'];				
			
			$sql = "SELECT email, password FROM users WHERE email LIKE '$email'";				
			$result = mysqli_query($conn, $sql);
				
			if (mysqli_num_rows($result) > 0) {				
				$row = mysqli_fetch_assoc($result);
				
				$subject = "Recupero de clave nafra.com.ar";
				$body = "Tu clave es: " . $row['password'];
				
				$headers = 'From: info@nafra.com.ar' . "\r\n" .
				
				'X-Mailer: PHP/' . phpversion();
			
				mail($email, $subject, $body, $headers);				
				
				echo "<div class='alert alert-success alert-dismissible mt-4' role='alert'>
				<button type='button' class='close' data-dismiss='alert' aria-label='Cerrar'>
				<span aria-hidden='true'>&times;</span></button>

				<p>Enviamos tu contraseña a la dirección de mail de tu cuenta.</p>
				<p><a class='alert-link' href=login.php>Login</a></p></div>";
			} else {
				echo "<div class='alert alert-danger alert-dismissible mt-4' role='alert'>
				<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
				<span aria-hidden='true'>&times;</span></button>

				<p>Lo sentimos pero tu dirección de mail no está registrada en nuestra base de datos</p>
				<p><a class='alert-link' href=login.php>Login</a></p></div>";
			}
			
			?>
		</div>
	</div>
</div>
<?php include 'partials/footer.php'; ?>
	</body>
</html>