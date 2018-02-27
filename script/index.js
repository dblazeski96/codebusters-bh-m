$(document).ready(() => {
    $("#navGate").on("click", loadGate);
    $("#navMap").on("click", loadMap);
    $("#navAbout").on("click", loadAbout);

    loadGate();
});

function loadGate(){
    document.title = "Beit Haim";
    $("nav").hide();
    $("body").css("background-color", "black");
    $("#mainDiv").empty()
        .load("homepage/homepage.html");
}

function loadMap(){
    document.title = "Beit Haim | Cemetery Map";
    $("nav").show();
    $("body").css("background-color", "#242424");
    $("#mainDiv").empty()
        .load("cemeteryMap/cemeteryMap.html");
}

function loadAbout(){
    document.title = "Beit Haim | About";
    $("nav").show();
    $("body").css("background-color", "#242424");
    $("#mainDiv").empty()
        .load("about/about.html");
}