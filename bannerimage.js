$(document).ready(function() {
    $('.button').on('click', function(event) {
        event.preventDefault(); // Prevenir la redirección por defecto

        // Obtener la ruta de la imagen desde el atributo data-img del botón clickeado
        var newImageUrl = $(this).data('img');

        // Ocultar la imagen actual con un efecto de desvanecimiento
        $('.image img').fadeOut(500, function() {
            // Cambiar la imagen de fondo y mostrarla con un efecto de desvanecimiento
            $('.image img').attr('src', newImageUrl).fadeIn(500);
        });
    });
});
