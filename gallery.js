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

    // para que al hacer click fuera de la foto tambien se cierre
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
