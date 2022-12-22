$(document).ready(function () {
    if ($('.lead-slider').length > 0) {
        $('.lead-slider').bxSlider({
            speed: 1000,
            //startSlide:1,
            infiniteLoop: true, //da ne moze dalje
            adaptiveHeight: true,
            auto: true, //da li ce automacki da se vrti
            pause: 6000
        });
    }
    if ($('.benefit-slider').length > 0) {
        $('.benefit-slider').owlCarousel({
            autoplay: true,

            responsive: {
                0: {
                    items: 1,
                    slideBy: 1
                },
                550: {
                    items: 1,
                    margin: 30,
                    slideBy: 1
                },
                850: {
                    items: 1,
                    margin: 30,
                    slideBy: 1
                },
                1200: {
                    items: 1,
                    margin: 40,
                    slideBy: 1
                }
            }

        });
    }
    $('.navbar-nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top
                },
                1000,
                'linear'
                );
    });

});
 //Counter Up

    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            time: 2000
        });
    }
    $('.gallery-icon').click( function(){
        $('.slikaa').show();
    });

      

    