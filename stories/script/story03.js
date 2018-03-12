let infos = 7
let animDuration = 800;

let music = document.getElementById("bgMusic");
music.volume = 0.4;

$(document).ready(() => {

    $("body").css({
        "background-image": "url(../common/img/bg.png)"
    });

    $("nav, nav *").show("blind", {direction: "up"}, animDuration);

    updateInfoLeftPos();
    $(window).on("resize", () => {
        updateInfoLeftPos();
    });
    
    doAnims();
    $(window).on("scroll", () => {
        doAnims();
    });
});

function updateInfoLeftPos(){
    $(".infoLeft").css({
        "left": `-${parseFloat($(".infoLeft").css("left").slice(0, -2)) + $(".infoLeft img").width()}px`
    });
}

function doAnims(){
    for(let i = 1; i <= infos; i += 1){
        let infoItem = $(`#info${i} div img`);
        let infoLine = i % 2 === 0 ? $(`#info${i} .infoLineRight`):$(`#info${i} .infoLineLeft`);
        let infoText = $(`#info${i} div h2, #info${i} div p`);
        let elemDistance = -$(".infoLeft").position().left;
        
        if(isVisible(infoItem)){
            if(infoItem.css("visibility") === "hidden"){
                infoLine.show("slide", {direction: `${i % 2 === 0 ? "left":"right"}`}, animDuration);
                infoItem.hide().css("visibility", "visible").show("slide", {direction: `${i % 2 === 0 ? "left":"right"}`, distance: `${elemDistance}`}, animDuration, () => {
                    infoText.show("slide", {direction: `${i % 2 === 0 ? "left":"right"}`}, animDuration);
                });
            }
        }
        else{
            infoItem.css("visibility", "hidden");
            infoText.hide();
            infoLine.hide();
        }
    }

    function isVisible(_elem){
        let elem = $(_elem);
        let viewport = $(window);
    
        let docViewTop = viewport.scrollTop();
        let docViewBottom = docViewTop + viewport.height();
    
        let elemTop = elem.offset().top;
        let elemBottom = elemTop + elem.height();
    
        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

}
