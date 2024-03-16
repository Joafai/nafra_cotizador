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
    <title>Novedad</title>
    <?php include 'partials/head.php'; ?>
</head>

<body>
    <div class="container border rounded p-3 bg-white">
        <?php include 'partials/header.php'; ?>
        <div class="row">
            <div class="col">
                <h1>Novedad</h1>

           <table class="table mb-4">
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
                WHERE id_novedad = $_REQUEST[id_novedad]";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // output data of each row
                $row = $result->fetch_assoc();
                    echo '<tr scope="row">';
                    echo '<td>';
                    if($row['novedad_activo'] == 'si'){
                        echo '<a class="text-success btn" href="novedad_activar.php?novedad_activo=no&id_novedad='.$row['id_novedad'].'"><i class=" far fa-check-square fa-2x"></i> Activo en la web</a>';
                    }else{
                        echo '<a class="btn text-secondary" href="novedad_activar.php?novedad_activo=si&id_novedad='.$row['id_novedad'].'" alt="No activo en la web"><i class=" far fa-square fa-2x"></i> Inactivo en la web</a>';
                    }  
                    echo '</td>';
                    echo '<td align="right"><a href="novedad_actualizar.php?id_novedad=' . $row['id_novedad'] . '"><i class="fas fa-2x text-secondary fa-edit pr-3"></i></a> <a href="novedad_delete.php?id_novedad=' . $row['id_novedad'] . '"><i class="fas fa-2x text-secondary fa-trash-alt"></i></a>'; 
                   
                    echo '</tr>';
                    echo '<tr>';
                    echo '<td nowrap class="">id: '.$row['id_novedad'];
                    
                    echo '</td>';
                    echo '<td><h3><strong>TiTULO: </strong> '.$row['novedad_titulo'].'</h3></td>';
                    if ($row['novedad_tipo_imagen'] == 'video') {
                        echo '<tr><td colspan="2">' . $row['novedad_video'] . '</td></tr>';
                    }else{
                        echo '<tr><td colspan="2" align="center"><img class="img-fluid" src="novedades/' . $row['novedad_foto'] . '"></td></tr>';
                    }
                    echo '<tr><td colspan="2"><p><strong>EPIGRAFE: </strong>'.$row['novedad_epigrafe'].'</p></td></tr>';
                    echo '<tr><td colspan="2"><p><strong>DESCRIPCION: </strong>'.$row['novedad_texto'].'</p></td></tr>';
                    echo '<tr><td colspan="2"><p><strong>FECHA: </strong>'.$row['novedad_fecha_cast'].'</p></td></tr>';
                
            } else {
                echo "0 results";
            }
            $conn->close();
?>
           </table>
        </div>
 </div>
    </div>
    <?php include 'footer.php'; ?>
</body>

</html>