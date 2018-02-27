$(document).ready(() => {
    $("#navGate").on("click", loadGate);
    $("#navMap").on("click", loadMap);
    $("#navAbout").on("click", loadAbout);

    loadGate();
    $("nav").hide();
});

function loadGate(){
    $("#mainDiv").empty()
        .load("homepage/homepage.html");
}

function loadMap(){
    $("#mainDiv").empty()
        .load("cemeteryMap/cemeteryMap.html");
}

function loadAbout(){
    $("#mainDiv").empty()
        .load("about/about.html");
}