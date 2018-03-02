let allItemsCM = $("#mapImg, #gotoGate, #gotoArtifacts, #gotoStories");
let animsDuration = 800;

$(document).ready(() => {
    $("body").css("background-image", 'url("../common/img/bg.png")');

    $(window).on("resize", () => {
        updateGotos(false);
    });

    $("nav, nav *").show("blind", {direction: "up"}, animsDuration);
    $("#mapImg").show("fade", animsDuration);
    updateGotos(true);

    $("#gotoGate").on("click", () => {
        allItemsCM.hide("fade", animsDuration, () => {
            document.location.href = "../homepage/homepage.html";
        });
    });
});

function updateGotos(doAnims){
    $("#gotoGate").css({
        "margin-top": $("#mainDiv").height() * 0.8,
        "margin-left": $("#mainDiv").width() * 0.5
    });
    $("#gotoStories").css({
        "margin-top": $("#mainDiv").height() * 0.4,
        "margin-left": $("#mainDiv").width() * -0.1
    });
    $("#gotoArtifacts").css({
        "margin-top": $("#mainDiv").height() * 0.6,
        "margin-left": $("#mainDiv").width() * -0.5
    });
    if(doAnims){
        $("#gotoGate").show("fade", animsDuration);
        $("#gotoStories").show("fade", animsDuration);
        $("#gotoArtifacts").show("fade", animsDuration);
    }
}