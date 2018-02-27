$(document).ready(() => {
    $("#navGate").on("click", doGate);
    $("#navMap").on("click", () => {
        document.title = "Beit Haim | Cemetery Map";
        $("nav").show();
        $("body").css("background-color", "#242424");
        $("#mainDiv").empty()
            .load("cemeteryMap/cemeteryMap.html");
    });
    $("#navAbout").on("click", () => {
        document.title = "Beit Haim | About";
        $("nav").show();
        $("body").css("background-color", "#242424");
        $("#mainDiv").empty()
            .load("about/about.html");
    });

    doGate();
});

function doGate(){
    document.title = "Beit Haim";
    $("nav").hide();
    $("body").css("background-color", "black");
    $("#mainDiv").empty()
        .load("homepage/homepage.html");
}