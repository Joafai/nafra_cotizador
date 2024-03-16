<?php 
session_destroy();
session_start();
define("RECAPTCHA_V3_SECRET_KEY", '6LfA3BcaAAAAAJwsHTNCIg_xT6_72-De5AoRbI97');
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$token = $_POST['token'];
$action = $_POST['action'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => RECAPTCHA_V3_SECRET_KEY, 'response' => $token)));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$respuesta = curl_exec($ch);
curl_close($ch);
$arrResponse = json_decode($respuesta, true);

if($arrResponse["success"] == '1' && $arrResponse["action"] == $action && $arrResponse["score"] >= 0.5) {

   if($_POST['tipoFormulario'] == 'cotizador'){
      $email = $_POST['mail'];
      $subject = 'Pedido de cotizacion';
      $message = '<html><h1>Pedido de contizacion</h1>.<p>0km: '.$_POST['cerokilometro'].'<br>Marca: '.$_POST['marca'].' <br>Modelo '.$_POST['modelo'].'<br>Versi&oacute;n: '.$_POST['version'].'<br>A&ntilde;o:'.$_POST['ano'].'<br>GNC: '.$_POST['gnc'].'<br>Observaciones: '.$_POST['observaciones'].'<br>Localidad: '.$_POST['localidad'].'<br>C&oacute;digo postal: '.$_POST['codigoPostal'].'<br>Mail: '.$_POST['mail'].'<br>Celular: '.$_POST['celular'].'</p></html>';
      $altBody = 'Cotizador';
   }else{
      $email = $_POST['mail'];
      $subject = 'Solicitud de contacto';
      $message = '<html><h1>Solicitud de contacto</h1>.<p>Nombre: '.$_POST['nombre'].'<br>Mail: '.$_POST['mail'].' <br>Asunto '.$_POST['asunto'].'<br>Mensaje: '.$_POST['mensaje'].'</p></html>';
      $altBody = 'Solicitud de contacto';
      $attachment = $_POST['cv'];//cv
   }
   
   
   require 'autoload.php';
   /* Create a new PHPMailer object. */
   $mail = new PHPMailer(TRUE);
   
   /* Open the try/catch block. */
   try {
      /* Set the mail sender. */
      $mail->setFrom('matacarlos@nafra.com.ar', $subject);
   
      /* Add a recipient. */
      $mail->addAddress('matacarlos@nafra.com.ar');
      //$mail->addAddress('ximenamay@gmail.com');
      $mail->addAddress('carloschaparro@nafra.com.ar');
      $mail->addReplyTo($email);
      /* Set the subject. */
      $mail->Subject = $subject;
   
      /* Set the mail message body. */
      $mail->isHTML(TRUE);
      $mail->Body = $message;
   
      $mail->AltBody = $altBody;
   
      if ($_POST['tipoFormulario'] == 'contacto' && isset($_FILES['cv']) &&
      $_FILES['cv']['error'] == UPLOAD_ERR_OK) {
         $mail->AddAttachment($_FILES['cv']['tmp_name'], $_FILES['cv']['name']);
      }
   
     
   
    
   
      /* Finally send the mail. */
      // $mail->send();
      if (!$mail->send()) {
         $_SESSION['status'] = 0;
     } else {
         $_SESSION['status'] = 1;
         $_SESSION['mail'] = $email;
     }
      
   }
   catch (Exception $e)
   {
      /* PHPMailer exception. */
      $_SESSION['error'] = $e->errorMessage();
      echo $e->errorMessage();
   }
   
   header('Location: http://www.nafra.com.ar/contacto_gracias.php');
   exit();


}

error_reporting(E_ALL);
 

?>

