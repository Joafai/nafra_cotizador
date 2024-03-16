<?php
include 'datos.php';
// video
if($_POST['novedad_video']){
    $video = convertYoutube($_POST['novedad_video']);
}else{
    $video = 'no';
}

//foto
if(isset($_FILES['novedad_foto'])){

    $image_name = $_FILES['novedad_foto']['name']; //file name
    $image_size = $_FILES['novedad_foto']['size']; //file size
    $image_temp = $_FILES['novedad_foto']['tmp_name']; //file temp

    $image_size_info = getimagesize($image_temp); //gets image size info from valid image file

    //create a random name for new image (Eg: fileName_293749.jpg) ;
    $image_info = pathinfo($image_name);
    $image_extension = strtolower($image_info["extension"]); //image extension
    $image_name_only = strtolower($image_info["filename"]);//file name only, no extension
    $new_file_name = $image_name_only. '_' .  rand(0, 9999999999) . '.' . $image_extension;

    if(is_uploaded_file($_FILES['novedad_foto']['tmp_name'])){
        sleep(1);
        move_uploaded_file($_FILES['novedad_foto']['tmp_name'], 'novedades/'.$new_file_name);
    }
    
}else{
    $new_file_name = '';
}

$sql = "INSERT INTO novedades SET
  novedad_titulo = '$_POST[novedad_titulo]',
  novedad_tipo_imagen = '$_POST[novedad_tipo_imagen]',
  novedad_video = '$video',
  novedad_epigrafe = '$_POST[novedad_epigrafe]',
  novedad_texto = '$_POST[novedad_texto]',
  novedad_fecha = '$_POST[novedad_fecha]',
  novedad_foto = '$new_file_name'
";
if ($conn->query($sql) === TRUE) {
            $_SESSION['foto'] = $new_file_name;
           header('Location: novedades.php');
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();


exit();
