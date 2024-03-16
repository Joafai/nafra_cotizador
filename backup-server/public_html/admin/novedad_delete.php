<?php
include 'datos.php';

$sql = "DELETE FROM novedades 
WHERE id_novedad = $_REQUEST[id_novedad] ";

if ($conn->query($sql) === TRUE) {

} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
header('location: novedades.php');
?>