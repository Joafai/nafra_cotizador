$(document).ready(function() {


    $(function () {
        // let pagina = $(location).attr("href");
        let current_url = window.location.href;

        const url_object = new URL(current_url);
        const web = url_object.protocol + '//' + url_object.hostname;

        console.log('pagina ' + web);

        if (current_url === web + "/index.php") {
            console.log('index')
        }
        if (current_url === web + "/nuestro_equipo.php") {
            console.log('equipo')
        }
    })


    
});

