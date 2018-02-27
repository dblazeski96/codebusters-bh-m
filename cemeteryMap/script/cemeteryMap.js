$(document).ready(() => {
    let allItemsCM = $("#mapImg, #gotoGate, #gotoArtifacts, #gotoStories");
    let animsDuration = 800;

    document.title = "Beit Haim | Cemetery Map";
    $("body").css("background-image", 'url("img/bg.png")');
    $("nav").show("blind", {direction: "up"}, animsDuration);

    $("*").css("visibility", "visible");
    allItemsCM.hide();
    allItemsCM.show("fade", animsDuration);

    $("#gotoGate").on("click", () => {
        allItemsCM.effect("fade", animsDuration, () => {
            $("#mainDiv").empty()
                .load("homepage/homepage.html");
        });
    });
});

