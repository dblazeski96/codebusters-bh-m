$(document).ready(() => {
    let allItemsHomepage = $("#gateImg, #gateEnter, #gateInfo");
    let fadeDuration = 1000;

    allItemsHomepage.hide();
    $("#gateImg").show("fade", fadeDuration, () => {
        $("#gateEnter, #gateInfo").show("fade", fadeDuration);
    });
    
    allItemsHomepage.on("click", () => {
        $("#gateEnter, #gateInfo").hide("fade", fadeDuration, () => {
            $("#gateImg").removeClass("img-fluid")
                .effect("puff", {percent: 400}, 2500, () => {
                    document.title = "Beit Haim | Cemetery Map";
                    $("body").css("background-color", "#242424")
                    $("nav").show();
                    $("#mainDiv").empty()
                        .load("cemeteryMap/cemeteryMap.html");
            });
        });
    });
})

