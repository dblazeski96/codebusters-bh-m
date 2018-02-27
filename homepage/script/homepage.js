$(document).ready(() => {
    let allItemsHomepage = $("#gateImg, #gateEnter, #gateInfo");

    allItemsHomepage.hide();
    $("#gateImg").show("fade", 1000, () => {
        $("#gateEnter, #gateInfo").show("fade", 1000);
    });
    
    allItemsHomepage.on("click", () => {
        $("#gateEnter, #gateInfo").hide("fade", 1000, () => {
            $("#gateImg").removeClass("img-fluid").effect("scale", {scale: "both", percent: 400}, 2500, () => {
                document.title = "Beit Haim | Cemetery Map";
                $("body").css("background-color", "#242424")
                $("nav").show();
                $("#mainDiv").empty()
                    .load("cemeteryMap/cemeteryMap.html");
            });
        });
    });
})

