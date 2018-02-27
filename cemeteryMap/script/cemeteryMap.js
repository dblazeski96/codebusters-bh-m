$(document).ready(() => {
    let allItems = $("#mapImg, #gotoGate, #gotoArtifacts, #gotoStories");

    allItems.hide();
    allItems.show("fade", 1000);
    
    $("#gotoGate").on("click", () => {
        allItems.effect("fade", 1000, () => {
            document.title = "Beit Haim";
            $("nav").hide();
            $("body").css("background-color", "black");
            $("#mainDiv").empty()
                .load("homepage/homepage.html");
        });
    });
});

