$(document).ready(() => {
    let allItemsHP = $("#gateImg, #gateEnter, #gateInfo");
    let animsDuration = 800;

    document.title = "Beit Haim";
    $("body").css("background-image", "");

    allItemsHP.hide();
    $("#mainDiv").show();
    $("nav").hide("blind", {direction: "up"}, animsDuration);
    $("#gateImg").show("fade", animsDuration, () => {
        $("#gateEnter, #gateInfo").show("fade", animsDuration, () => {
            allItemsHP.on("click", () => {
                $("#gateEnter, #gateInfo").hide("fade", animsDuration, () => {
                    $("#gateImg").removeClass("img-fluid")
                                    .effect("puff", {percent: 1500}, 3000, () => {
                        $("#mainDiv").empty()
                                        .load("cemeteryMap/cemeteryMap.html")
                                            .hide();
                    });
                });
            });
        });
    });
});