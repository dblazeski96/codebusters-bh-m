let animsDuration = 800;
let myCurrentSlide = 0;
let storiesCount = 4;

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
                switch(myCurrentSlide){
                    case 0:{
                        $("#sliderDesc h1").text("TOWER OF SEPHARDIC FACES");
                        $("#sliderDesc p").text("Between 1941 and 1944, Bulgaria, in alliance with Nazi Germany, occupied the Yugoslav province of Macedonia. On March 11, 1943, in cooperation with the Germans...");
                    }
                        break;
                    case 1:{
                        $("#sliderDesc h1").text("MONASTIR JEWRY");
                        $("#sliderDesc p").text("On October 4, 1941, the Bulgarians enforced an extraordinary measure that prohibited the Jews of Macedonia from engaging in any type of industry or commerce. All existing Jewish businesses had three months...");
                    }
                        break;
                    case 2:{
                        $("#sliderDesc h1").text("STORY 03");
                        $("#sliderDesc p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus maiores. Aut ad nobis eligendi! Nobis reprehenderit laboriosam odio? Nemo tempore voluptas hic magnam ullam dicta cum fugit, veniam ab?");
                    }
                        break;
                    case 3:{
                        $("#sliderDesc h1").text("STORY 04");
                        $("#sliderDesc p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusamus maiores. Aut ad nobis eligendi! Nobis reprehenderit laboriosam odio? Nemo tempore voluptas hic magnam ullam dicta cum fugit, veniam ab?");
                    }
                    default:
                        break;
                }
                $("#sliderDesc, #sliderExplore").show("fade", animsDuration);
            });
        }
    });

    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        myCurrentSlide = currentSlide;
    });

    $("#exploreBtn").on("click", () => {
        for(let n = 0; n < storiesCount; n += 1){
            if(n === myCurrentSlide){
                redirectToStory(`story0${n + 1}`);
            }
        }
    });
});

function updateSliderDesc(){
    $("#sliderDesc").css({
        "margin-top": `${window.innerHeight * 0.5}px`
    });
    $("#sliderExplore").css({
        "margin-top": `${parseInt($("#sliderDesc").css("margin-top").slice(0, -2)) + 200}px`
    });
}

function redirectToStory(story){
    $("#sliderDesc, #sliderExplore").hide("fade", animsDuration, () => {
        $("#mainDiv").hide("fade", animsDuration, () => {
            document.location.href = `../stories/${story}.html`;
        });
    });
}