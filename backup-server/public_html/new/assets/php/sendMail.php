<?php 


/* Exception class. */

include './vendor/phpmailer/phpmailer/src/PHPMailer.php';

/* Create a new PHPMailer object. */
$mail = new PHPMailer();

/* Set the mail sender. */
$mail->setFrom('matacarlos@nafra.com.ar', 'Darth Vader');

/* Add a recipient. */
$mail->addAddress('ximenamay@gmail.com', 'Emperor');

/* Set the subject. */
$mail->Subject = 'Force';

/* Set the mail message body. */
$mail->Body = 'There is a great disturbance in the Force.';

/* Finally send the mail. */
if (!$mail->send())
{
   /* PHPMailer error. */
   echo $mail->ErrorInfo;
}



// $headers = "From: matacarlos@nafra.com.ar\r\n";
// $headers .= "Reply-To: matacarlos@nafra.com.ar\r\n";
// $headers .= "Return-Path: matacarlos@nafra.com.ar\r\n";
// // $headers .= "CC: sombodyelse@anotherdomain.com\r\n";
// // $headers .= "BCC: hidden@anotherdomain.com\r\n";
// $para = "ximenamay@gmail.com";
// $titulo = "Consulta desde web";
// // $mensaje  .= 'Mensaje semanal programado.';
// $cabeceras = 'From: matacarlos@nafra.com.ar' . "\n" . 'X-Mailer: PHP/' . phpversion();
// $mensaje = "Nombre: "."\n";
// $mensaje .= "Telefono: "."\n";
// $mensaje .= "Mail: "."\n";
// $mensaje .= "Mensaje: "."\n";

// mail($para, $titulo, $mensaje, $cabeceras);


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

