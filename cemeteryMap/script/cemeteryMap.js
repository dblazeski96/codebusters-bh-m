$(document).ready(() => {
    let allItemsCM = $("#mapImg, #gotoGate, #gotoArtifacts, #gotoStories");
    let animsDuration = 800;

    allItemsCM.hide();
    $("#mainDiv").show();

    document.title = "Beit Haim | Cemetery Map";
    $("body").css("background-image", 'url("img/bg.png")');
    $("nav").show("blind", {direction: "up"}, animsDuration);

    allItemsCM.show("fade", animsDuration);

    $("#gotoGate").on("click", () => {
        allItemsCM.effect("fade", animsDuration, () => {
            $("#mainDiv").empty()
                .load("homepage/homepage.html");
            $("#mainDiv").hide();
        });
    });
});

