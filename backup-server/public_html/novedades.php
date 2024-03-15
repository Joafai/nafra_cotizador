<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Nafra es un Broker de Seguros independiente que opera sólo con las Aseguradoras líderes más sólidas y de mayor respaldo de nuestro Mercado Asegurador." />
    <meta name="keywords" content="aseguradora, automoviles, auto, seguros, seguro para el auto" />
    <title>NAFRA :: Novedades</title>
    <?php include 'partials/head.php'; ?>


</head>

<body>
    <div class="container-fluid p-0">
        <?php include 'partials/header.php'; ?>
        <section>
            <div class="row fondoAzul">
                <div class="col">
                    <div class="container">
                        <div class="row pt-5">
                            <div class="col-12 text-center">
                                <h2 class="txtBlanco text-uppercase pb-5">NOVEDADES</h2>
                            </div>
                        </div>
                    </div>

                    <?php
                    include 'admin/datos.php';
                    $sql = "SELECT 
                    id_novedad,
                    novedad_titulo,
                    novedad_tipo_imagen,
                    novedad_video,
                    novedad_epigrafe,
                    novedad_texto,
                    novedad_foto,
                    novedad_activo,
                    DATE_FORMAT(novedad_fecha, '%d-%m-%y') AS novedad_fecha_cast
                    FROM novedades
                    WHERE novedad_activo LIKE 'si'
                    ORDER BY novedad_fecha DESC
                    ";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        // output data of each row
                        while ($row = $result->fetch_assoc()) {
                    ?>
                            <div class="fondoNegro row pt-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-8">
                                            <h4><?= $row['novedad_titulo'] ?></h4>
                                            <?php
                                            if ($row['novedad_tipo_imagen'] == 'video') {
                                                echo $row['novedad_video'];                                        
                                            }else{
                                                if($row['novedad_foto'] != 'no'){
                                                    echo '<img class="img-fluid" src="'.$row['novedad_video'].'">';
                                                }
                                            }
                                            if($row['novedad_epigrafe']){
                                                echo '<h6>'.$row['novedad_epigrafe'].'</h6>';
                                            }
                                            if($row['novedad_texto']){
                                                echo '<p class="text-left">'.$row['novedad_texto'].'</p>';
                                            }
                                            ?>

                                        </div>
                                    </div>
                                </div>

                            </div>
                    <?php

                        }
                    }

                    $conn->close();
                    ?>


                    <div class="fondoNegro row pt-5">
                        <div class="container">
                            <div class="row d-flex justify-content-center">
                                <div id="video" class="col-8">
                                    <div class="embed-responsive  embed-responsive-1by1">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                                        <iframe class="embed-responsive embed-responsive-16by9" src="https://www.youtube.com/embed/Ldj7ty36YgI" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="fondoGris row pt-5">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h4 class="txtAzul pl-3">Reabrimos nuestra oficina</h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="logoAbajo" class="row fondoGris pt-5">
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
    <?php include 'partials/footer.php'; ?>


</body>
<?php include 'partials/javascript.php'; ?>

</html>