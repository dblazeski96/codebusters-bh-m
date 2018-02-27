$(document).ready(() => {
    let allItemsHP = $("#gateImg, #gateEnter, #gateInfo");
    let animsDuration = 800;

    document.title = "Beit Haim";
    $("body").css("background-image", "");
    $("body").css("background-color", "black");
    $("nav").hide("blind", {direction: "up"}, animsDuration);

    $("*").css("visibility", "visible");
    allItemsHP.hide();
    $("#gateImg").show("fade", animsDuration, () => {
        $("#gateEnter, #gateInfo").show("fade", animsDuration);
    });
    
    allItemsHP.on("click", () => {
        $("#gateEnter, #gateInfo").hide("fade", animsDuration, () => {
            $("#gateImg").removeClass("img-fluid")
                .effect("puff", {percent: 400}, 2500, () => {
                    $("#mainDiv").empty()
                        .load("cemeteryMap/cemeteryMap.html");
            });
        });
    });
})
