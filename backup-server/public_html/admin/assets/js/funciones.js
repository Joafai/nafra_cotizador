let imagenAprobada = false;

$('input[type=file]').on('change', function () {
  //get the file name
  var fileName = $(this).val();
  //replace the "Choose a file" label
  $(this).next('.custom-file-label').html(fileName);
});

$("#formNovedad").submit(function (e) {
  let tipoImagen = $('input[name=novedad_tipo_imagen]:checked ').val();
  console.log('tipo de imagen ' + tipoImagen);
  upload();
  if (imagenAprobada == false && tipoImagen == 'foto') {
    e.preventDefault();
  } else {
    $('.spinner').css("display", "block");
  }

});

$('input[name=novedad_tipo_imagen]').on('change', function () {
  let eleccion = $(this).val();
  if (eleccion == 'video') {
    $('#foto').css('display', 'none');
    $('#video').css('display', 'initial');
    
  } else if(eleccion == 'foto') {
    $('#video').css('display', 'none');
    $('#foto').css('display', 'initial');
   
  }else if(eleccion == 'texto'){
    $('#video').css('display', 'none');
    $('#foto').css('display', 'none');

  }
  console.log('Eleccion ' + eleccion);
})

function getDate() {
  var today = new Date();
  document.getElementById("datepicker").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}

function upload() {
  var maxSizeMb = 2.5;
  var file = $('input[name=novedad_foto]')[0].files[0];

  //Make sure that a file has been selected before
  //attempting to get its size.
  if (file !== undefined) {

    //Get the size of the input file.
    var totalSize = file.size;

    //Convert bytes into MB.
    var totalSizeMb = totalSize / Math.pow(1024, 2);

    //Check to see if it is too large.
    if (totalSizeMb > maxSizeMb) {

      //Create an error message to show to the user.
      var errorMsg = 'El archivo es demasiado grande. El tamaño máximo es de  ' + maxSizeMb + 'MB. El archivo seleccionado pesa ' + totalSizeMb.toFixed(2) + 'MB';

      //Show the error.
      alert(errorMsg);
      //Return FALSE.
      imagenAprobada = false;
    } else {
      imagenAprobada = true;
    }

  } else {
    imagenAprobada = true;
  }

}