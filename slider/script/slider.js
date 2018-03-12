let animsDuration = 800;
let myCurrentSlide = 0;
let storiesCount = 7;

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
                        $("#sliderDesc h1").text("DAVID ARUTI");
                        $("#sliderDesc p").text("Portrait of Jamila Andjela Kolonomos, Victim that survived the Holocaust and lived to 2012.");
                    }
                        break;
                    case 1:{
                        $("#sliderDesc h1").text("ESTER ESCHKENASI");
                        $("#sliderDesc p").text("Portrait of David Aruti, son of Isak Aruti. He was a merchant. He lived at Zvornitska 26 in Bitola..");
                    }
                        break;        
                    case 2:{
                        $("#sliderDesc h1").text("JAMILA KOLOMONOS");
                        $("#sliderDesc p").text("Portrait of Ester Eschkenasi, wife of Sava Eschkenasi. She lived at Karagoryeva 91 in Bitola.");
                    }
                        break;    
                    case 3:{
                        $("#sliderDesc h1").text("HANA ERGAS");
                        $("#sliderDesc p").text("Portrait of Hana Ergas, wife of Isak Ergas. She lived at Zmayeva 20 in Bitola.");
                    }
                        break;
                    case 4:{
                        $("#sliderDesc h1").text("LAZAR ISCHACH");
                        $("#sliderDesc p").text("Portrait of Lazar Ischach, son of Yosef Ischach. He was a grocer and lived at Drinska 77 in Bitola.");
                    }
                    case 5:{
                        $("#sliderDesc h1").text("SARA ISCHACH");
                        $("#sliderDesc p").text("Portrait of Sara Ischach, wife of Lazar Ischach. She lived at Drinksa 77 in Bitola.");
                    }
                    case 6:{
                        $("#sliderDesc h1").text("DAVID PESSO");
                        $("#sliderDesc p").text("Portrait of David Pesso. He was a dealer of second-hand items. He lived at Novatska 4 in Bitola.");
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