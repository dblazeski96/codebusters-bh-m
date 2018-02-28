$(document).ready(() => {
    $("#navGate").on("click", loadGate);
    $("#navMap").on("click", loadMap);
    $("#navAbout").on("click", loadAbout);

    $("nav").hide();
    loadGate();
});

function loadGate(){
    $("#mainDiv").empty()
        .load("homepage/homepage.html")
            .hide();
}

function loadMap(){
    $("#mainDiv").empty()
        .load("cemeteryMap/cemeteryMap.html");
    $("nav, #mainDiv").hide();
}

function loadAbout(){
    $("#mainDiv").empty()
        .load("about/about.html");
    $("nav, #mainDiv").hide();
}