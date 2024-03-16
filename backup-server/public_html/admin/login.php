<?php 
session_start();
if($_SESSION['mensaje']){
	echo $_SESSION['mensaje'];
}
?>
<!doctype html>
<html lang="es">

<head>
	<title>Login Ice Lady Patagonia</title>

	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php include 'partials/head.php'; ?>
	<style>
		body,
		html {
			height: 100%;
			margin: 0;
		}
	</style>
</head>

<body>
	<div id="pagLogin" class="bg">
		<div class="container bg" id="login">
			<div class="row justify-content-center">
				<div class="col-4 border rounded p-4 bg-white mt-5">
					<h3><i class="fas fa-user-lock fa-2x"></i> Acceso restringido</h3>
					<form action="check-login.php" method="post">
						<div class="form-group">
							<input type="email" class="form-control input-lg" name="email" placeholder="Email" required>
						</div>
						<div class="form-group">
							<input type="password" class="form-control input-lg" name="password" placeholder="Password" required>
						</div>
						<button type="submit" class="btn btn-dark">Entrar</button>
					</form>

					<p class="text-center mt-2 my-1"><a href="#showForm" data-toggle="collapse" aria-expanded="false" aria-controls="collapse">¿Olvidaste la contraseña?</a></p>
					<div class="collapse" id="showForm">
						<div class='well'>
							<form action="password-recovery.php" method="post">
								<div class="form-group">
									<input type="email" class="form-control" name="email" placeholder="Ingrese su mail para recuperar la clave" required>
								</div>
								<button type="submit" class="btn btn-dark">Recuperar contraseña</button>
							</form>
						</div>
					</div>


				</div>
			</div>



		</div>



		<!--/.row-->
	</div><!-- /.container -->
	</div>

</body>
<?php include 'partials/footer.php'?>
</html>