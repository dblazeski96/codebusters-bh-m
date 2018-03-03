let animsDuration = 800;
let myCurrentSlide = 0;

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

    $(window).on("resize", () => {
        updateSliderDesc();
    });

    $("body").css({
        "background-image": "url(../common/img/bg.png)"
    });

    $("nav, nav *").show("blind", {direction: "up"}, animsDuration);
    updateSliderDesc();

    $("#sliderDesc, #sliderExplore").show("fade", animsDuration);
    
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(myCurrentSlide !== nextSlide){
            $("#sliderDesc, #sliderExplore").hide("fade", animsDuration, () => {
                $("#sliderDesc, #sliderExplore").show("fade", animsDuration);
            })
        }
    });

    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        myCurrentSlide = currentSlide;
    });

    $("#exploreBtn").on("click", () => {
        switch(myCurrentSlide){
            case 0:{
                redirectToStory("story00");
            }
                break;
            case 1:{
                redirectToStory("story01");
            }
                break;
            case 2:{
                redirectToStory("story02");
            }
                break;
            default:
                break;
        }
    })

    
});

function updateSliderDesc(){
    $("#sliderDesc").css({
        "margin-top": `${window.innerHeight * 0.5}px`
    });
    $("#sliderExplore").css({
        "margin-top": `${parseInt($("#sliderDesc").css("margin-top").slice(0, -2)) + 150}px`
    });
}

function redirectToStory(story){
    $("#sliderDesc, #sliderExplore").hide("fade", animsDuration, () => {
        $("#mainDiv").hide("fade", animsDuration, () => {
            document.location.href = `../stories/${story}/${story}.html`;
        });
    });
}