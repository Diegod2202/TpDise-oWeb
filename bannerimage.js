$(document).ready(function() {
    $('.button').on('click', function(event) {
        event.preventDefault(); 
        var newImageUrl = $(this).data('img');
        $('.image img').fadeOut(500, function() {
            $('.image img').attr('src', newImageUrl).fadeIn(500);
        });
    });
});
