<?php session_start();
if($_SESSION['status'] == 0){
    $icono = '<i class="txtCeleste far fa-check-circle"></i>';
}else{
    $icono = '<i class="txtCeleste fas fa-exclamation-circle"></i> ';
}

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Nafra es un Broker de Seguros independiente que opera sólo con las Aseguradoras líderes más sólidas y de mayor respaldo de nuestro Mercado Asegurador." />
    <meta name="keywords" content="aseguradora, automoviles, auto, seguros, seguro para el auto" />
    <title>NAFRA :: gracias</title>
<?php include'partials/head.php';?>
    
</head>

<body>
    <div class="container-fluid p-0">
        <?php include 'partials/header.php'; ?>
        <section>
            <div class="row p-0 m-0">
                <div class="col p-0 m-0">
                    <div class="full-width-image">
                        <img class="img-fluid" src="assets/img/banner_inicio.jpg" alt="Nafra confianza">
                    </div>
                </div>
            </div>
            <div class="row fondoAzul">
                <div class="col">
                    <div id="contactoGracias" class="container">
                        <div class="row pt-5">
                        <div class="col text-center">
                                <h2 class="txtBlanco text-uppercase pb-5">CONTACTO</h2>
                                <h4 class="txtBlanco pb-5 mb-5"><i class="txtCeleste far fa-check-circle"></i> Gracias por escribirnos, pronto un representante se pondrá en contacto con Ud.</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div id="logoAbajo" class="row fondoGris mt-5 pt-5">
                <div class="container">
                    <div class="row justify-content-center d-flex align-items-center">
                        <div class="col-5 col-md-2 pl-5 text-right">
                            <img class="img-fluid" src="assets/img/logo_nafra.png" alt="Nafra">
                        </div>
                        <div class="col-2 col-md-1 text-center">
                            <img class="img-fluid" src="assets/img/puntitos_logo.png" alt="">
                        </div>
                        <div class="col-5 col-md-2 text-left">
                            <h3 class="txtCeleste">20 años</h3>
                        </div>
                    </div>
                </div>

            </div>

        </section>



    </div>
    <!-- fin container-fluid -->


<!-- footer -->
<?php include 'partials/footer.php';?>
   

</body>
<?php include 'partials/javascript.php'; ?>

</html>