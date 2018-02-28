$(document).ready(() => {
    let allItemsCM = $("#mapImg, #gotoGate, #gotoArtifacts, #gotoStories");
    let animsDuration = 800;

    document.title = "Beit Haim | Cemetery Map";
    $("body").css("background-image", 'url("img/bg.png")');

    allItemsCM.hide();
    $("#mainDiv").show();
    $("nav").show("blind", {direction: "up"}, animsDuration);
    allItemsCM.show("fade", animsDuration, () => {
        $("#gotoGate").on("click", () => {
            allItemsCM.hide("fade", animsDuration, () => {
                $("#mainDiv").empty()
                                .load("homepage/homepage.html")
                                    .hide();
            });
        });
    });
});