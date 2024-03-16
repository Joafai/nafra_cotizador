<?php include 'inc_loggin.php'; ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Ximena May">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex" />
    <title>Actualizar</title>
    <?php include 'partials/head.php'; ?>
</head>

<body>
    <div class="container border rounded p-3 bg-white">
        <?php include 'partials/header.php'; ?>
        <div class="row">
            <div class="col">
                <h1>Actualizar</h1>
                <div class="row justify-content-center">
                    <div class="col-8 border rounded p-3">
                        <?php
                        include 'datos.php';
                        $sql = "SELECT 
                        id_novedad,
                        novedad_titulo,
                        novedad_tipo_imagen,
                        novedad_video,
                        novedad_epigrafe,
                        novedad_texto,
                        novedad_foto,
                        novedad_activo,
                        DATE_FORMAT(novedad_fecha, '%Y-%m-%d') AS novedad_fecha_cast
                            FROM novedades
                            WHERE id_novedad = $_REQUEST[id_novedad]";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            // output data of each row
                            $row = $result->fetch_assoc();
                        ?>
                            <form id="formNovedad" action="novedad_grabar.php" method="post" enctype="multipart/form-data">
                                <input type="hidden" name="id_novedad" value="<?= $row['id_novedad'] ?>">
                                <div class="col">
                                    <div class="form-check">
                                        <?php
                                        radio_checked('foto', $row['novedad_tipo_imagen'], 'novedad_tipo_imagen');
                                        ?>
                                    </div>

                                    <div class="form-check">
                                        <?php
                                        radio_checked('video', $row['novedad_tipo_imagen'], 'novedad_tipo_imagen');
                                        ?>
                                    </div>
                                </div>
                                <script>
                                    var dia = '<?= $row['novedad_fecha_cast'] ?>';
                                </script>
                                <div class="col">
                                    <hr>
                                    <div class="form-group">
                                        <label for="titulo">Título</label>
                                        <input type="text" class="form-control" name="novedad_titulo" value="<?= $row['novedad_titulo'] ?>">

                                    </div>
                                </div>
                                <?php
                                if ($row['novedad_tipo_imagen'] == 'video') {
                                ?>

                                    <div class="col">
                                        <div id="video" class="form-group">

                                            <label for="imagen">Video</label>
                                            <?php
                                            if ($row['novedad_video'] == '' || $row['novedad_video'] == 'no') {
                                                echo '<input class="form-control" type="text" name="novedad_video">';
                                                echo '<input type="hidden" name="novedad_video_igual" value="no">';
                                            } else {
                                            ?>
                                                <a class="btn btn-secondary m-1" href="novedad_grabar_video.php?id_novedad=<?= $row['id_novedad'] ?>"><i class="fas fa-trash-alt"></i> Eliminar video</a>
                                                <?= $row['novedad_video'] ?>
                                                <input type="hidden" name="novedad_video_igual" value="si">

                                        </div>
                                    <?php
                                            }
                                            //imagen
                                        } else {
                                    ?>
                                    <div class="row">
                                        <div class="col-4">
                                            <img class="img-fluid" src="novedades/<?= $row['novedad_foto'] ?>" alt="">
                                        </div>
                                        <div class="col-6 mx-3 my-5">
                                            <div id="foto" class="form-group">
                                                <input id="foto" type="file" class="custom-file-input" name="novedad_foto">
                                                <input type="hidden" name="novedad_foto" value="<?= $row['novedad_foto'] ?>">

                                                <label class="custom-file-label" for="customFile">Cargar foto/imagen</label>
                                                <p class="small"> Hasta 2.5Mb</p>
                                            </div>
                                        </div>
                                    </div>
                                <?php
                                        }
                                ?>



                                <div class="col">
                                    <div class="form-group">
                                        <label for="medio">Epigrafe</label>
                                        <input type="text" class="form-control" id="medio" name="novedad_epigrafe" value="<?= $row['novedad_epigrafe'] ?>">
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="form-group">
                                        <label for="texto">Texto</label>
                                        <textarea class="form-control" name="novedad_texto" cols="30" rows="10"><?= $row['novedad_texto'] ?></textarea>
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="fecha">Fecha</label>
                                        <input type="date" class="form-control" id="datepicker" name="novedad_fecha" value="<?= $row['novedad_fecha_cast'] ?>">
                                    </div>

                                    <button type="submit" class="btn btn-secondary">Enviar</button>
                            </form>

                        <?php
                        } else {
                            echo "0 results";
                        }
                        $conn->close();
                        ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include 'partials/footer.php'; ?>
    <?php include 'partials/spinner.html'; ?>
    <script>
        $(function() {
            console.log("ready!");

            function updateDate() {
                $("#datepicker").datepicker("setDate", dia);
            }

        })
    </script>
</body>

</html>