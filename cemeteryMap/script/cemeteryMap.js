$(document).ready(() => {
    let allItems = $("#mapImg, #gotoGate, #gotoArtifacts, #gotoStories");
    let fadeDuration = 1000;

    allItems.hide();
    allItems.show("fade", fadeDuration);
    
    $("#gotoGate").on("click", () => {
        allItems.effect("fade", fadeDuration, () => {
            document.title = "Beit Haim";
            $("nav").hide();
            $("body").css("background-color", "black");
            $("#mainDiv").empty()
                .load("homepage/homepage.html");
        });
    });
});

