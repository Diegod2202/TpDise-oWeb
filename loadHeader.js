// loadHeader.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
            // Agregar eventos hover después de cargar el header
            $('nav ul li a').hover(
                function () {
                    $(this).css('text-decoration', 'underline');
                }, function () {
                    $(this).css('text-decoration', 'none');
                }
            );
        })
        .catch(error => console.error('Error cargando el header:', error));
});
