<?php //include 'inc_loggin.php';
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Ximena May">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex" />
    <title>Novedades</title>
    <?php include 'partials/head.php'; ?>
</head>


<body>
    <div class="container border rounded p-3 bg-white">
        <?php include 'partials/header.php'; ?>

        <div class="row">
            <div class="col">
                <h1>Novedades</h1>
                <table class="table table-striped">
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
                    DATE_FORMAT(novedad_fecha, '%d-%m-%y') AS novedad_fecha_cast
                    FROM novedades
                    ORDER BY novedad_fecha DESC
                    ";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        // output data of each row
                        while ($row = $result->fetch_assoc()) {
                    ?>
                    <?php
                            echo '<tr scope="row"';
                            if($row['novedad_activo'] == 'si'){
                                echo ' class="bg-success" ';
                            }else{
                                echo ' class="bg-table-secondary" ';
                            }
                            echo '>';
                            echo '<td nowrap>' . $row['novedad_fecha_cast'];
                            
                            
                            if ($row['novedad_tipo_imagen'] == 'video') {
                                echo '<td>' . $row['novedad_video'] . '<strong>TITULO: </strong>' . $row['novedad_titulo'] . '</td>';
                            } elseif($row['novedad_tipo_imagen'] == 'foto') {
                                echo '<td><img src="novedades/' . $row['novedad_foto'] . '" height="120px"> <strong>TITULO: </strong>' . $row['novedad_titulo'] . '</td>';
                            }else{
                                echo '<td><strong>TITULO: </strong>' . $row['novedad_titulo'] . '</td>';
                            }
                            echo '<td></td>';
                            echo '<td><a class="btn" href="novedad.php?id_novedad='.$row['id_novedad'].'"><i class="far fa-eye fa-2x"></i></a></td>';
                            echo '<td>';
                            if($row['novedad_activo'] == 'si'){
                                echo '<a class="text-success btn" href="novedad_activar.php?novedad_activo=no&id_novedad='.$row['id_novedad'].'"><i class=" far fa-check-square fa-2x"></i> Activo</a>';
                            }else{
                                echo '<a class="btn text-secondary" href="novedad_activar.php?novedad_activo=si&id_novedad='.$row['id_novedad'].'" alt="No activo en la web"><i class=" far fa-square fa-2x"></i> Inactivo </a>';
                            } 
                            echo  '</td>';
                            echo '</tr>';
                        }
                    }

                    $conn->close();
                    ?>
                </table>
            </div>

        </div>


    </div>
    <?php include 'partials/footer.php'; ?>
</body>
</html>