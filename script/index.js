$(document).ready(() => {
    $("#navGate").on("click", loadGate);
    $("#navMap").on("click", loadMap);
    $("#navAbout").on("click", loadAbout);

    $("nav").hide();
    loadGate();
});

function loadGate(){
    // $.ajax({
    //     method: "GET",
    //     url: "homepage/homepage.html",
    //     dataType: "html",
    //     success: (data) => {
    //         $("#mainDiv").empty().html(data).hide();
    //     }
    // });
    $("#mainDiv").empty()
                    .load("homepage/homepage.html")
                        .hide();
}

function loadMap(){
    // $.ajax({
    //     method: "GET",
    //     url: "cemeteryMap/cemeteryMap.html",
    //     dataType: "html",
    //     success: (data) => {
    //         $("#mainDiv").empty().html(data).hide();
    //     }
    // });
    $("cemeteryMapScript").remove()
    $("#mainDiv").empty()
                    .load("cemeteryMap/cemeteryMap.html")
                        .hide();
    $("nav").hide();
}

function loadAbout(){
    // $.ajax({
    //     method: "GET",
    //     url: "about/about.html",
    //     dataType: "html",
    //     success: (data) => {
    //         $("#mainDiv").empty().html(data).hide();
    //     }
    // });
    $("#mainDiv").empty()
                    .load("about/about.html")
                        .hide();
    $("nav").hide();
}