<?php
include 'datos.php';

$sql = "UPDATE novedades SET
  novedad_video = ''
  WHERE id_novedad = $_REQUEST[id_novedad]
";
if ($conn->query($sql) === TRUE) {
    $_SESSION['foto'] = $new_file_name;
    header('Location: novedad_actualizar.php?id_novedad='.$_REQUEST['id_novedad']);
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

exit();
?>