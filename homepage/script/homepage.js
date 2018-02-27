$("#btnEnter, #imgGate").on("click", () => {
    document.title = "Beit Haim | Cemetery Map";
    $("body").css("background-color", "#242424")
    $("nav").show();
    $("#mainDiv").empty()
        .load("cemeteryMap/cemeteryMap.html");
});