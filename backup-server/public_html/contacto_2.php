<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Nafra es un Broker de Seguros independiente que opera sólo con las Aseguradoras líderes más sólidas y de mayor respaldo de nuestro Mercado Asegurador." />
    <meta name="keywords" content="aseguradora, automoviles, auto, seguros, seguro para el auto" />
    <title>NAFRA :: Contacto</title>
    <!-- captcha -->
    <script src="https://www.google.com/recaptcha/api.js?render=6LfA3BcaAAAAADN6GZLgnceA39AO3PO1-XwBc2E0"></script>

    <?php include 'partials/head.php'; ?>


</head>

<body>
    <div class="container-fluid p-0">
        <?php include 'partials/header.php'; ?>
        <section>
            <div class="row p-0 m-0">
                <div class="col p-0 m-0">
                    <div class="full-width-image">
                        <img class="img-fluid" src="assets/img/banner_contacto.jpg" alt="Nafra confianza">
                    </div>
                </div>
            </div>
            <div class="row fondoAzul">
                <div class="col">
                    <div class="container">
                        <div class="fondoAzul row pt-5">
                            <div class="col text-center">
                                <h2 class="txtBlanco text-uppercase pb-5">contacto</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row fondoAzul pb-5">
                <div class="col">
                    <div class="container">
                        <div class="row justify-content-between">
                            <!-- formulario de contacto -->
                            <div class="col-12 col-md-6 txtGris pb-5 pb-md-0">
                                <h4>Envíenos un mensaje</h4>
                                <form id="formContacto" action="vendor/sendMail.php" method="post" enctype="multipart/form-data">
                                    <input type="hidden" name="tipoFormulario" value="contacto">
                                    <input type="hidden" name="trampa">
                                    <!-- nombre -->
                                    <div class="formLinea row py-0 mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="mail">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" placeholder="nombre" name="nombre">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- mail -->
                                    <div class="formLinea row py-0 mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="mail">E-mail(*)</label>
                                                <input type="email" class="form-control" id="mail" placeholder="E-mail" name="mail" required>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- asunto -->
                                    <div class="formLinea row py-0 mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="asunto">Asunto</label>
                                                <input type="text" class="form-control" id="mensaje" placeholder="Asunto" name="asunto">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- mensaje -->
                                    <div class="formLinea row py-0 mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="mensaje">Mensaje</label>
                                                <textarea class="form-control" name="mensaje" id="" cols="30" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- cv -->
                                    <div class="formLinea row p-3 mb-3 justify-content-center">
                                        <div class="col">
                                            <div class="form-group">
                                                <input id="cv" type="file" class="custom-file-input" name="cv">

                                                <label class="custom-file-label" for="customFile">Cargar CV</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="fondoGrisForm txtAzul btn rounded mb-3" >Enviar consulta</button>
                                </form>
                                <h6 class="txtCeleste">(*) campos obligatorios</h6>
                            </div>
                            <!-- datos de contacto -->
                            <div id="datosContacto" class="col-12 col-md-5 txtGris">
                                <h4>Contáctenos</h4>

                                <h5 class="pt-2">Comercial:</h5>
                                <p><a class="txtCeleste" href="mailto:matacarlos@nafra.com.ar"> matacarlos@nafra.com.ar</a></p>

                                <h5 class="pt-2">Emisión:</h5>
                                <p><a class="txtCeleste" href="mailto:justo@nafra.com.ar">justo@nafra.com.ar</a></p>

                                <h5 class="pt-2">Siniestros:</h5>
                                <p><a class="txtCeleste" href="mailto:juancruz@nafra.com.ar">juancruz@nafra.com.ar</a></p>

                                <h5 class="pt-2">Administración de ventas y cobranzas:</h5>
                                <p><a class="txtCeleste" href="mailto:nidia@nafra.com.ar">nidia@nafra.com.ar</a></p>

                                <h5 class="pt-2">Despacho de pólizas:</h5>
                                <p><a class="txtCeleste" href="mailto:despacho@nafra.com.ar">despacho@nafra.com.ar</a></p>

                                <h5 class="pt-2">Información:</h5>
                                <p><a class="txtCeleste" href="mailto:info@nafra.com.ar">info@nafra.com.ar</a></p>

                                <h5 class="pt-2">Teléfonos:</h5>
                                <p><a class="txtCeleste" href="tel:011 60919787">011 60919787</a> / <a class="txtCeleste" href="tel:0348 4442078">0348 4442078</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>



    </div>
    <!-- fin container-fluid -->


    <!-- footer -->
    <?php include 'partials/footer.php'; ?>


</body>
<?php include 'partials/javascript.php'; ?>
<script>
    $(document).ready(function() {
        // captha 3
        grecaptcha.ready(function() {
        grecaptcha.execute('6LfA3BcaAAAAADN6GZLgnceA39AO3PO1-XwBc2E0', {
          action: 'consulta'
        }).then(function(token) {
          $('#formContacto').prepend('<input type="hidden" name="token" value="' + token + '">');
          $('#formContacto').prepend('<input type="hidden" name="action" value="consulta">');
        })
      })

        $('input[type="file"]').change(function(event) {
            var _size = this.files[0].size;
            var fSExt = new Array('Bytes', 'KB', 'MB', 'GB'),
                i = 0;
            while (_size > 900) {
                _size /= 1024;
                i++;
            }
            var exactSize = (Math.round(_size * 100) / 100) + ' ' + fSExt[i];
            console.log('FILE SIZE = ', exactSize);

            if (exactSize > 13600) {
                alert(`El cv es demasiado grande, por favor reduzca el tamaño para poder enviarlo. Debe ser menor a 1,7Mb.`);
            }

        });
    });
</script>


</html>