$(document).ready(function() {
    var currentIndex = 0;
    var images = $('.gallery-item');

    function openLightbox(index) {
        currentIndex = index;
        $('#lightbox').css('display', 'block');
        $('.lightbox-content').attr('src', images.eq(currentIndex).attr('src'));
        $('.caption').text(images.eq(currentIndex).attr('alt'));
    }

    function closeLightbox() {
        $('#lightbox').css('display', 'none');
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }

    $('.gallery-item').on('click', function() {
        openLightbox(images.index(this));
    });

    $('.close').on('click', function() {
        closeLightbox();
    });

    $('.prev').on('click', function() {
        showPrev();
    });

    $('.next').on('click', function() {
        showNext();
    });

   
    $('#lightbox').on('click', function(event) {
        if ($(event.target).is('#lightbox')) {
            closeLightbox();
        }
    });

    $(document).on('keydown', function(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowLeft') {
            showPrev();
        } else if (event.key === 'ArrowRight') {
            showNext();
        }
    });
});

$(document).ready(function() {
    
    $('.boton-contacto').on('click', function(event) {
        event.preventDefault();
        $('#contact-modal').css('display', 'block');
    });

    $('.close-modal').on('click', function() {
        $('#contact-modal').css('display', 'none');
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#contact-modal')) {
            $('#contact-modal').css('display', 'none');
        }
    });
});

$(document).ready(function() {
    
    $('.boton-contacto').on('click', function(event) {
        event.preventDefault();
        $('#contact-modal').css('display', 'block');
        setTimeout(function() {
            $('#contact-modal .modal-content').addClass('show');
        }, 10); 
    });

    $('.close-modal').on('click', function() {
        $('#contact-modal .modal-content').removeClass('show');
        setTimeout(function() {
            $('#contact-modal').css('display', 'none');
        }, 300); 
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#contact-modal')) {
            $('#contact-modal .modal-content').removeClass('show');
            setTimeout(function() {
                $('#contact-modal').css('display', 'none');
            }, 300); 
        }
    });
});

