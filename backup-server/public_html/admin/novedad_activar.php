<?php
include 'datos.php';
$sql = "UPDATE novedades SET
novedad_activo = '$_REQUEST[novedad_activo]'
WHERE id_novedad = $_REQUEST[id_novedad]
";

if ($conn->query($sql) === TRUE) {
    header('location: novedad.php?id_novedad='.$_REQUEST['id_novedad']);
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>