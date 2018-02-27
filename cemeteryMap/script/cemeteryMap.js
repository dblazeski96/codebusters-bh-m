$("#gotoGate").on("click", () => {
    document.title = "Beit Haim";
    $("nav").hide();
    $("body").css("background-color", "black");
    $("#mainDiv").empty()
        .load("homepage/homepage.html");
});