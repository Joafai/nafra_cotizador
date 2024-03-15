<?php

// Varios destinatarios
$para  = 'matacarlos@nafra.com.ar'; // atención a la coma // atención a la coma

// título
$titulo = "Mensaje desde formulario web :".$_POST['subject'];

// mensaje
$mensaje = "De: ".$_POST['name']."<br>";
$mensaje .= "Mail: ".$_POST['email']."<br>";
$mensaje .= "Consulta: ".$_POST['message'];

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras = "From: matacarlos@nafra.com.ar \r\n";
$cabeceras .= "Reply-To:" . $email . "\r\n";
$cabeceras .= "MIME-Version: 1.0" . "\r\n";
$cabeceras .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$cabeceras .= "Return-Path: matacarlos@nafra.com.com" . "\r\n";
$cabeceras .= "X-Mailer: PHP" . phpversion() . "\r\n";

// Cabeceras adicionales
// $cabeceras .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
// $cabeceras .= 'De: Recordatorio <cumples@example.com>' . "\r\n";
// $cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
// $cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Enviarlo
mail($para, $titulo, $mensaje, $cabeceras);


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<!--[if IE 8]>         <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!--<![endif]-->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="keywords" content="seguros de personas, seguros de vida">
   <meta name="description" content=" NAFRA es un Broker de Seguros independiente que opera sólo con las Aseguradoras líderes más sólidas y de mayor respaldo de nuestro Mercado Asegurador. ">
   <meta name="author" content="SU WEB EXPRESS">

   <title>NAFRA - Brokers de Seguros</title>
   
   <!-- retina Bookmark Icon -->
   <link rel="apple-touch-icon-precomposed" href="apple-icon.png">
<link href="js/rs-plugin/css/settings.css" rel="stylesheet" media="screen">
   <!-- CSS -->
   <link href="css/foundstrap.css" rel="stylesheet">

   <!--[if (lt IE 9) & (!IEMobile)]>
      <script src="js/respond.min.js"></script>
   <![endif]-->
   
   <!-- CSS Plugin -->

   <!-- theme Stylesheet -->
   <link href="css/style.css" rel="stylesheet">
   <link href="css/theme-responsive.css" rel="stylesheet">   

   <!-- theme Option -->
   
   <link href="css/theme/default.css" id="theme" rel="stylesheet">

   <!-- favicon -->
   <link rel="icon" type="image/png" href="favicon.png" /> 
   
   <!-- modernizr -->
   <script src="js/modernizr.js"></script>
   
</head>
<body>

   <!-- main-container -->
   <div id="main-container">
      <div class="topbar">
         <div class="contenedor">
            <div class="contacto">
                <span><i class="fa fa-phone"></i> 0348 444-2078</span>
                <spab class="separador"></spab>
                <span><i class="fa fa-whatsapp"></i> 11 3607-8265</span>
            </div>
            <div class="redes">
               <span>Seguinos en nuestras redes:</span>
               <a href="https://www.facebook.com/nafra.arg.9" target="_blank"><i class="fa fa-facebook"></i></a>
               <a href="https://www.instagram.com/nafrabrokers" target="_blank"><i class="fa fa-instagram"></i></a>
            </div>
         </div>
      </div>

      <!-- headaer -->
      <header id="me-header">
         <div class="row">
            <div class="large-12 column">

               <!-- logo container -->
               <div class="logo-container">
                  <a href="index.html">
                     <img class="retina" src="img/logo/logo.png" alt="Logo">
                  </a>
                  <div class="menu-trigger">
                     <i class="fa fa-bars"></i>
                  </div> 
               </div> 
               <!-- logo container end here -->
               
               <!-- header information  -->
               
               <!-- header infomration end here -->

               <!-- menu navigation -->
              <nav class="menu-container">
                  <ul id="menu" class="sm me-menu">
                     <li><a href="index.html"><i class="fa fa-home"></i></a></li>
                     <li><a href="#">La empresa</a><ul><li class=""><a href="quienessomos.html">Quiénes somos</a></li><li><a href="nuestrosvalores.html">Nuestros valores</a></li><li><a href="nuestrasoficinas.html">Nuestras oficinas</a></li><li><a href="presenciaenmedios.html">Presencia en medios</a></li></ul></li>
                     <li class="active"><a href="servicios.html">Servicios</a></li>
                     <li><a href="novedades.html">Novedades</a></li>
                     <li><a href="productos.html">Productos</a></li>
                     <li><a href="aseguradoras.html">Aseguradoras</a></li>
                     <li><a href="online.html">Cotización Online</a></li>
                     <li><a href="contacto.html">Contacto</a></li>
                     
                  </ul>
               </nav>    
               <!-- menu navigation end here -->
               
            </div>
         </div>
      </header>
      <!-- header end here --> 
      
      <section class="container no-padding" id="slideshow-container">
         <div class="slideshow">
            <ul>
               <li data-transition="fade" data-masterspeed="1500">
                  <img src="img/slide.jpg" alt="slider background" style="background:#85867b;">
                  
                  <!-- heading caption slider 1 -->
                  
               </li>

              <li data-transition="fade" data-masterspeed="1500">
                  <img src="img/slide1.jpg" alt="slider background" style="background:#85867b;">
                  
                  <!-- heading caption slider 1 -->
                  
               </li>
			    <li data-transition="fade" data-masterspeed="1500">
                  <img src="img/slide2.jpg" alt="slider background" style="background:#85867b;">
                  
                  <!-- heading caption slider 1 -->
                  
               </li>
			   <li data-transition="fade" data-masterspeed="1500">
                  <img src="img/slide3.jpg" alt="slider background" style="background:#85867b;">
                  
                  <!-- heading caption slider 1 -->
                  
               </li>
            </ul>
         </div>
      </section>
      <!-- slideshow end here -->
      <!-- page header -->

      <!-- container -->
      <section class="container">
         <div class="row">
            <div class="large-12 medium-12 column me-animate" data-animate="fadeIn">
               <p class="lead text-italic gap" data-gap-bottom="20"><?= $_POST['name']?> gracias por su consulta, pronto nos pondremos en contacto.</p>
               
            
            </div>

            





          
			   
			   <br />&nbsp;<br />

			   
            </div>

            
			
			
         </div>
      </section>
      <!-- container end here -->
      
      <!-- container -->
      
      <!-- container end here -->
      
      <!-- container -->
      
      <!-- container end here -->

      <!-- footer -->
      <footer id="me-footer">
         <div class="row">
            <div class="large-12 column">
               <ul class="large-block-grid-3 medium-block-grid-3 small-block-grid-3 social-footer">
                 
                  
                  
               </ul>
            </div>

            

            

            <div class="large-12 column">
               <div class="footer-info-container">
                  <p><a href="avisolegal.html">AVISO LEGAL</a></p>

                  <div class="logo-footer-container">
                     <a href="index.html">
                        <img src="img/logo/logo-footer.png" class="retina" alt="Logo Footer">
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <!-- footer end here -->

   </div>
   <!-- main-container end here -->

   <!-- javascript -->
   <script src="js/jquery.min.js"></script>
   <script src="js/foundstrap.js"></script>
   <script src="js/owl.carousel.min.js"></script>
   <script src="js/jquery.sscr.js"></script>
   <script src="js/jquery.fancybox.js"></script>
   <script src="js/jquery.fancybox-media.js"></script>
   <script src="js/jquery.waypoints.min.js"></script>
   <script src="js/jquery.smartmenus.min.js"></script>
   <script src="js/jquery.scrollUp.js"></script>
   <script src="js/jquery.retina.js"></script>

   <!-- javascript plugin -->
   <script src="js/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
   <script src="js/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
   <script src="js/masonry.pkgd.min.js"></script>
   <script src="js/jquery.countTo.js"></script>
   
   <!-- javascript core -->
   <script src="js/theme-script.js"></script>
   <script src="js/jquery.cookie.js"></script>
   
   <script type="text/javascript">
      jQuery(document).ready(function($) {
         // your javascript here

         // revolution slider configuration here
         $('.slideshow').revolution({
            delay:2500,
            startwidth:1080,
            startheight:778,
            hideThumbs:1,
            navigationType:"none",                  // bullet, thumb, none
            navigationArrows:"none",                // nexttobullets, solo (old name verticalcentered), none
            navigationStyle:"square",               // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
            navigationHAlign:"center",              // Vertical Align top,center,bottom
            navigationVAlign:"bottom",              // Horizontal Align left,center,right
            navigationHOffset:0,
            navigationVOffset:0,
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:0,
            soloArrowLeftVOffset:0,
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:0,
            soloArrowRightVOffset:0,
            touchenabled:"on",                      // Enable Swipe Function : on/off
            onHoverStop:"on",                       // Stop Banner Timet at Hover on Slide on/off
            stopAtSlide:-1,                         // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
            stopAfterLoops:-1,                      // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
            hideCaptionAtLimit:0,                   // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
            hideAllCaptionAtLilmit:0,               // Hide all The Captions if Width of Browser is less then this value
            hideSliderAtLimit:0,                    // Hide the whole slider, and stop also functions if Width of Browser is less than this value
            shadow:0,                               // 0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
            fullWidth:"off",                        // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
            fullScreen:"on"
         });
      });
   </script>
</body>

</html>
<!-- Localized -->
</html>