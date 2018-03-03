let animsDuration = 800;

$(document).ready(() => {

    $('.slider').slick({
        infinite: false,
        centerMode: true,
        centerPadding: '12%',
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $("body").css({
        "background-image": "url(../common/img/bg.png)"
    });

    $(window).on("resize", () => {
        updateSlider();
    });

    $("nav, nav *").show("blind", {direction: "up"}, animsDuration);
    updateSlider();
});

function updateSlider(){
    // $(".slick-slide, .slick-slide.slick-center").css({
    //     "margin-top": `${(window.innerHeight - $(".img-box img").height()) * 0.5}px`
    // });
}