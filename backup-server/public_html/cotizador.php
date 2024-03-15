<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Nafra es un Broker de Seguros independiente que opera sólo con las Aseguradoras líderes más sólidas y de mayor respaldo de nuestro Mercado Asegurador." />
    <meta name="keywords" content="aseguradora, automoviles, auto, seguros, seguro para el auto" />
    <title>NAFRA :: cotizador online</title>
    <?php include 'partials/head.php'; ?>
    <script src="https://www.google.com/recaptcha/api.js?render=6LfA3BcaAAAAADN6GZLgnceA39AO3PO1-XwBc2E0"></script>

</head>

<body>
    <div class="container-fluid p-0">
        <?php include 'partials/header.php'; ?>
        <section>
            <div class="row p-0 m-0">
                <div class="col p-0 m-0">
                    <div class="full-width-image">
                        <img class="img-fluid" src="assets/img/banner_cotizador.jpg" alt="Nafra confianza">
                    </div>
                </div>
            </div>
            <div class="row fondoAzul">
                <div class="col">
                    <div class="container">
                        <div class="fondoAzul row pt-5">
                            <div class="col text-center">
                                <h2 class="txtBlanco text-uppercase pb-5">cotizador online</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row fondoAzul pb-5">
                <div class="col">
                    <div class="container">
                        <div class="row justify-content-center">
                            <!-- formulario de cotizador -->
                            <div class="col-12 col-md-6 txtGris">
                                <form id="formCotizador" action="vendor/sendMail.php" method="post">
                                    <input type="hidden" name="tipoFormulario" value="cotizador">
                                    <input type="hidden" name="trampa">

                                    <div class="formLinea row py-2">
                                        <div class="col-12 col-md-6 align-self-center">
                                            <p>¿Es 0Km?</p>
                                        </div>
                                        <div class="col-12 text-right col-md-6 align-self-center">
                                            <div class="form-check form-check-inline">
                                                <input class="txtBlanco form-check-inline-input" type="radio" name="cerokilometro" id="gridRadios1" value="si" checked>
                                                <label class="form-check-label" for="gridRadios1">
                                                    SI
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="cerokilometro" id="gridRadios2" value="no">
                                                <label class="form-check-label" for="gridRadios2">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- año -->
                                    <div class="formLinea row py-2">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="">Año</label>
                                                <select class="form-control" id="ano" name="ano">
                                                    <option value=""></option>
                                                    <?php
                                                    $firstYear = 1970;
                                                    $lastYear = date("Y");
                                                    for ($i = $lastYear; $i >= $firstYear; $i--) {
                                                        echo '<option value=' . $i . '>' . $i . '</option>';
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- marca -->
                                    <div class="formLinea row py-2">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="">Marca</label>
                                                <select id="marca" class="form-control rounded" name="marca">
                                                    <option value=""></option>
                                                    <optgroup label="Marcas más Buscadas">
                                                        <option value="CHERY">CHERY</option>
                                                        <option value="CHEVROLET">CHEVROLET</option>
                                                        <option value="CHRYSLER">CHRYSLER</option>
                                                        <option value="CITROEN">CITROEN</option>
                                                        <option value="FIAT">FIAT</option>
                                                        <option value="FORD">FORD</option>
                                                        <option value="HONDA">HONDA</option>
                                                        <option value="NISSAN">NISSAN</option>
                                                        <option value="PEUGEOT">PEUGEOT</option>
                                                        <option value="RENAULT">RENAULT</option>
                                                        <option value="TOYOTA">TOYOTA</option>
                                                        <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                                                    </optgroup>
                                                    <optgroup label="Todas las marcas">
                                                        <option value="ACURA">ACURA</option>
                                                        <option value="AGRINAR">AGRINAR</option>
                                                        <option value="ALFA ROMEO">ALFA ROMEO</option>
                                                        <option value="APPIA">APPIA</option>
                                                        <option value="APRILIA">APRILIA</option>
                                                        <option value="ARO">ARO</option>
                                                        <option value="ASIA">ASIA</option>
                                                        <option value="ATV FOX">ATV FOX</option>
                                                        <option value="AUDI">AUDI</option>
                                                        <option value="AUSTIN">AUSTIN</option>
                                                        <option value="BAJAJ">BAJAJ</option>
                                                        <option value="BETA">BETA</option>
                                                        <option value="BIG WARRIOR">BIG WARRIOR</option>
                                                        <option value="BLACKSTONE">BLACKSTONE</option>
                                                        <option value="BLOOWER">BLOOWER</option>
                                                        <option value="BMW">BMW</option>
                                                        <option value="BOMBARDIER">BOMBARDIER</option>
                                                        <option value="BRAVA">BRAVA</option>
                                                        <option value="BUELL">BUELL</option>
                                                        <option value="CAGIVA">CAGIVA</option>
                                                        <option value="CAN-AM">CAN-AM</option>
                                                        <option value="CANAM">CANAM</option>
                                                        <option value="CERRO">CERRO</option>
                                                        <option value="CFMOTO">CFMOTO</option>
                                                        <option value="CHERY">CHERY</option>
                                                        <option value="CHEVROLET">CHEVROLET</option>
                                                        <option value="CHIRETTE">CHIRETTE</option>
                                                        <option value="CHRYSLER">CHRYSLER</option>
                                                        <option value="CITROEN">CITROEN</option>
                                                        <option value="CORVEN">CORVEN</option>
                                                        <option value="CZ">CZ</option>
                                                        <option value="DA DALT">DA DALT</option>
                                                        <option value="DACIA">DACIA</option>
                                                        <option value="DAELIM">DAELIM</option>
                                                        <option value="DAEWOO">DAEWOO</option>
                                                        <option value="DAIHATSU">DAIHATSU</option>
                                                        <option value="DATSUN">DATSUN</option>
                                                        <option value="DATSUN-NISSAN">DATSUN-NISSAN</option>
                                                        <option value="DAYAMA">DAYAMA</option>
                                                        <option value="DAYANG">DAYANG</option>
                                                        <option value="DEI">DEI</option>
                                                        <option value="DEMON">DEMON</option>
                                                        <option value="DODGE">DODGE</option>
                                                        <option value="DUCATI">DUCATI</option>
                                                        <option value="EUROMOT">EUROMOT</option>
                                                        <option value="FERRARI">FERRARI</option>
                                                        <option value="FIAT">FIAT</option>
                                                        <option value="FIAT/INNOCENTI">FIAT/INNOCENTI</option>
                                                        <option value="FORD">FORD</option>
                                                        <option value="FREIGTHLINER">FREIGTHLINER</option>
                                                        <option value="GAMMA">GAMMA</option>
                                                        <option value="GARELLI">GARELLI</option>
                                                        <option value="GILERA">GILERA</option>
                                                        <option value="GMC">GMC</option>
                                                        <option value="GOES">GOES</option>
                                                        <option value="GUERRERO">GUERRERO</option>
                                                        <option value="GUZZI">GUZZI</option>
                                                        <option value="HARLEY DAVIDSON">HARLEY DAVIDSON</option>
                                                        <option value="HISUN">HISUN</option>
                                                        <option value="HONDA">HONDA</option>
                                                        <option value="HYOSUNG">HYOSUNG</option>
                                                        <option value="HYUNDAI">HYUNDAI</option>
                                                        <option value="INFINITI">INFINITI</option>
                                                        <option value="INNOCENTI">INNOCENTI</option>
                                                        <option value="ISUZU">ISUZU</option>
                                                        <option value="JAGUAR">JAGUAR</option>
                                                        <option value="JAWA">JAWA</option>
                                                        <option value="JEEP">JEEP</option>
                                                        <option value="JIANCHENG">JIANCHENG</option>
                                                        <option value="JIANSHE">JIANSHE</option>
                                                        <option value="JIN LING">JIN LING</option>
                                                        <option value="JINCHENG">JINCHENG</option>
                                                        <option value="JMSTAR">JMSTAR</option>
                                                        <option value="JORDAN">JORDAN</option>
                                                        <option value="JUKI">JUKI</option>
                                                        <option value="KAWASAKI">KAWASAKI</option>
                                                        <option value="KELLER">KELLER</option>
                                                        <option value="KELVINATOR">KELVINATOR</option>
                                                        <option value="KENIA">KENIA</option>
                                                        <option value="KIA">KIA</option>
                                                        <option value="KIKAI">KIKAI</option>
                                                        <option value="KINROAD">KINROAD</option>
                                                        <option value="KIRDY">KIRDY</option>
                                                        <option value="KONISA">KONISA</option>
                                                        <option value="KTM">KTM</option>
                                                        <option value="KYMCO">KYMCO</option>
                                                        <option value="LADA">LADA</option>
                                                        <option value="LAMBORGHINI">LAMBORGHINI</option>
                                                        <option value="LANCIA">LANCIA</option>
                                                        <option value="LAND ROVER">LAND ROVER</option>
                                                        <option value="LEXUS">LEXUS</option>
                                                        <option value="LF">LF</option>
                                                        <option value="LIFAN">LIFAN</option>
                                                        <option value="LONCIN">LONCIN</option>
                                                        <option value="LONGSTAR">LONGSTAR</option>
                                                        <option value="LUCKY LION">LUCKY LION</option>
                                                        <option value="MAGISTER">MAGISTER</option>
                                                        <option value="MANQUE">MANQUE</option>
                                                        <option value="MAVERICK">MAVERICK</option>
                                                        <option value="MAZDA">MAZDA</option>
                                                        <option value="MERCEDES BENZ">MERCEDES BENZ</option>
                                                        <option value="METALFOR">METALFOR</option>
                                                        <option value="MG">MG</option>
                                                        <option value="MINI">MINI</option>
                                                        <option value="MITSUBISHI">MITSUBISHI</option>
                                                        <option value="MONDIAL">MONDIAL</option>
                                                        <option value="MOTOMEL">MOTOMEL</option>
                                                        <option value="NISSAN">NISSAN</option>
                                                        <option value="NOVOMOTO">NOVOMOTO</option>
                                                        <option value="OKINOI">OKINOI</option>
                                                        <option value="OLTCIT">OLTCIT</option>
                                                        <option value="OPEL">OPEL</option>
                                                        <option value="PEUGEOT">PEUGEOT</option>
                                                        <option value="PIAGGIO">PIAGGIO</option>
                                                        <option value="POLARIS">POLARIS</option>
                                                        <option value="PORSCHE">PORSCHE</option>
                                                        <option value="PUMA">PUMA</option>
                                                        <option value="PUMITA">PUMITA</option>
                                                        <option value="QINGQI">QINGQI</option>
                                                        <option value="QJIANG">QJIANG</option>
                                                        <option value="RAFTER">RAFTER</option>
                                                        <option value="RANGE ROVER">RANGE ROVER</option>
                                                        <option value="RENAULT">RENAULT</option>
                                                        <option value="ROLLS ROYCE">ROLLS ROYCE</option>
                                                        <option value="ROVER">ROVER</option>
                                                        <option value="ROYAL ENFIELD">ROYAL ENFIELD</option>
                                                        <option value="RUMI">RUMI</option>
                                                        <option value="SAAB">SAAB</option>
                                                        <option value="SANTANA">SANTANA</option>
                                                        <option value="SEAT">SEAT</option>
                                                        <option value="SHINERAY">SHINERAY</option>
                                                        <option value="SIAMBRETTA">SIAMBRETTA</option>
                                                        <option value="SKODA">SKODA</option>
                                                        <option value="SKYGO">SKYGO</option>
                                                        <option value="SMART">SMART</option>
                                                        <option value="SSANGYONG">SSANGYONG</option>
                                                        <option value="STHAL">STHAL</option>
                                                        <option value="SUBARU">SUBARU</option>
                                                        <option value="SUMO">SUMO</option>
                                                        <option value="SUZUKI">SUZUKI</option>
                                                        <option value="SUZUKI/SANTANA">SUZUKI/SANTANA</option>
                                                        <option value="TATA">TATA</option>
                                                        <option value="TIBO">TIBO</option>
                                                        <option value="TOYOTA">TOYOTA</option>
                                                        <option value="VELIMOTOR">VELIMOTOR</option>
                                                        <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                                                        <option value="VOLVO">VOLVO</option>
                                                        <option value="WINDY">WINDY</option>
                                                        <option value="WRANGLER">WRANGLER</option>
                                                        <option value="X-QUAD">X-QUAD</option>
                                                        <option value="X-SCREAMS">X-SCREAMS</option>
                                                        <option value="YAMAHA">YAMAHA</option>
                                                        <option value="ZA DI NA">ZA DI NA</option>
                                                        <option value="ZANELLA">ZANELLA</option>
                                                        <option value="ZHEJIANG">ZHEJIANG</option>
                                                        <option value="ZHONGYU">ZHONGYU</option>
                                                        <option value="ZONGSHEN">ZONGSHEN</option>
                                                        <option value="ZONGSHIN">ZONGSHIN</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- version y modelo -->
                                    <div class="formLinea row py-2">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="modelo">Modelo</label>
                                                <input type="text" class="form-control" id="modelo" name="modelo">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="version">Versión</label>
                                                <input type="text" class="form-control" id="version" name="version">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="formLinea row py-2">
                                        <div class="col-12 col-md-8 align-self-center">
                                            <p>¿Tiene equipo GNC?</p>
                                        </div>
                                        <div class="col-12 col-md-4 text-right align-self-center">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-inline-input" type="radio" name="gnc" id="gridRadios3" value="si">
                                                <label class="form-check-label" for="gridRadios3">
                                                    Si
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gnc" id="gridRadios4" value="no" checked>
                                                <label class="form-check-label" for="gridRadios4">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="formLinea row py-0 mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="mensaje">Obsevaciones</label>
                                                <textarea class="form-control" name="observaciones" id="" cols="30" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="formLinea row py-2">
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="Localidad">Localidad</label>
                                                <input type="text" class="form-control" id="Localidad" name="localidad">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label for="codigoPostal">Código postal</label>
                                                <input type="text" class="form-control" id="codigoPostal" name="codigoPostal">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="formLinea row py-2 mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="mail">E-mail de contacto (*)</label>
                                                <input type="email" class="form-control" id="mail" name="mail" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="formLinea row py-2 mb-3">
                                        <div class="col">
                                            <div class="form-group">
                                                <label for="celular">Celular de contacto (*)</label>
                                                <input type="text" class="form-control" id="celular" name="celular" required>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="fondoGrisForm txtAzul btn rounded mb-3">Solicitar cotización</button>
                                </form>
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
// captha 3
grecaptcha.ready(function() {
        grecaptcha.execute('6LfA3BcaAAAAADN6GZLgnceA39AO3PO1-XwBc2E0', {
          action: 'consulta'
        }).then(function(token) {
          $('#formCotizador').prepend('<input type="hidden" name="token" value="' + token + '">');
          $('#formCotizador').prepend('<input type="hidden" name="action" value="consulta">');
        })
      })
</script>

</html>