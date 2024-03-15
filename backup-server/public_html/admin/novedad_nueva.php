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
  <title>Nueva</title>
  <?php include 'partials/head.php'; ?>
</head>

<body>
  <div class="container border rounded p-3 bg-white">
    <?php include 'partials/header.php'; ?>
    <div class="row">
      <div class="col">
        <h1>Nueva</h1>
        <div class="row justify-content-center">
          <div class="col-8 border rounded p-3">
            <form id="formNovedad" action="novedad_insert.php" method="post" enctype="multipart/form-data">

              <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="novedad_tipo_imagen" value="foto">
                  <label class="form-check-label" for="novedad_tipo_imagen">
                    Foto
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="novedad_tipo_imagen" value="video">
                  <label class="form-check-label" for="novedad_tipo_imagen">
                    Video
                  </label>
                </div>
              </div>
            
              <div class="col">
                <hr>
                <div class="form-group">
                  <label for="titulo">Título</label>
                  <input type="text" class="form-control" name="novedad_titulo">
                </div>
              </div>

              <div class="col">
                <div id="video" class="form-group">
                  <label for="imagen">Link del video</label>
                  <input type="text" class="form-control" id="imagen" name="novedad_video">
                </div>
              </div>

              <div class="col-11 mx-3 my-5">
                <div id="foto" class="form-group">
                  <input id="foto" type="file" class="custom-file-input" name="novedad_foto" value="<?= $row['novedad_foto']?>">

                  <label class="custom-file-label" for="customFile">Cargar foto/imagen</label>
                  <p class="small"> Hasta 2.5Mb</p>
                </div>
              </div>

              <div class="col">
                <div class="form-group">
                  <label for="medio">Epigrafe</label>
                  <input type="text" class="form-control" id="medio" name="novedad_epigrafe">
                </div>
              </div>

              <div class="col">
                <div class="form-group">
                  <label for="texto">Texto</label>
                  <textarea class="form-control" name="novedad_texto" cols="30" rows="10"></textarea>
                </div>
              </div>

              <div class="col-4">
                <div class="form-group">
                  <label for="fecha">Fecha</label>
                  <input type="date" class="form-control" id="datepicker" name="novedad_fecha">
                </div>

                <button type="submit" class="btn btn-secondary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php include 'partials/footer.php'; ?>
  <?php include 'partials/spinner.html'; ?>
  <script>
    $(function() {
      console.log("ready!");
      getDate(); //poner el dia de hoy por defecto
    })
  </script>
</body>

</html>