let animsDuration = 800;
let imgs = 2;

$(document).ready(() => {
    $("body").css("background-image", 'url("../common/img/bg.png")');

    $(window).on("resize", () => {
        updateGotos(false);
        updatePopup();
    });

    $("nav, nav *").show("blind", {direction: "up"}, animsDuration);
    $("#mapImg").show("fade", animsDuration);
    updateGotos(true);

    $("#popupImg, #popupDiv, #dimDiv").on("click", () => {
        $("#popupDiv, #dimDiv").hide("fade", animsDuration);
    });

    $("#gotoGate").on("click", () => {
        $("#mainDiv").hide("fade", animsDuration, () => {
            document.location.href = "../homepage/homepage.html";
        });
    }).on("mouseover", () => {
        $("#gotoGate").children("img").attr("src", `img/gotoHover.png`).css("cursor", "pointer");
    }).on("mouseout", () => {
        $("#gotoGate").children("img").attr("src", `img/goto.png`);
    });

    for(let n = 1; n <= imgs; n += 1){
        $(`#gotoImg${n}`).on("click", () => {
            $("#popupImg").attr("src", `img/popupImg/${n}.jpg`);
            updatePopup();
            $("#popupDiv, #dimDiv").show("fade", animsDuration);
        }).on("mouseover", () => {
            $(`#gotoImg${n}`).children("img").attr("src", `img/gotoHover.png`).css("cursor", "pointer");
        }).on("mouseout", () => {
            $(`#gotoImg${n}`).children("img").attr("src", `img/goto.png`);
        });
    }
});

function updateGotos(doAnims){
    $("#gotoGate").css({
        "margin-top": $("#mainDiv").height() * 0.8,
        "margin-left": $("#mainDiv").width() * 0.5
    });
    $("#gotoImg1").css({
        "margin-top": $("#mainDiv").height() * 0.4,
        "margin-left": $("#mainDiv").width() * -0.1
    });
    $("#gotoImg2").css({
        "margin-top": $("#mainDiv").height() * 0.6,
        "margin-left": $("#mainDiv").width() * -0.2
    });
    if(doAnims){
        $("#gotoGate").show("fade", animsDuration);
        for(let n = 1; n <= imgs; n += 1){
            $(`#gotoImg${n}`).show("fade", animsDuration);
        }
    }
}

function updatePopup(){
    $("#popupDiv").css("margin-top", window.innerHeight * 0.1);
    $("#popupImg").css("height", window.innerHeight * 0.7);
}