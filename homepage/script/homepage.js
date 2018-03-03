let allItemsHP = $("#gateImg, #gateEnter, #gateInfo");
let animsDuration = 800;

$(document).ready(() => {
    $(window).on("resize", () => {
        updateInnerContent();
    });
    
    $("#gateImg").show("fade", animsDuration, () => {
        updateInnerContent();
        $("#gateInfo").show("fade", animsDuration, () => {
            $("#gateEnter").show("fade", animsDuration, () => {
                allItemsHP.on("click", () => {
                    $("#gateEnter, #gateInfo").hide("fade", animsDuration, () => {
                        $("#gateImg").removeClass("img-fluid")
                                        .hide("puff", {percent: 1500}, 3000, () => {
                            document.location.href = "../slider/slider.html";
                        });
                    });
                });
            });
        });
    });
});

function updateInnerContent(){
    $("#gateInnerContent").css("margin-top", $("#mainDiv").height() * 0.95);
}