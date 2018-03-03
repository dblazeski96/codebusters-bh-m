let animsDuration = 800;

$(document).ready(() => {
    $("body").css({
        "background-image": `url("../common/img/bg.png")`
    });

    $("nav, nav *").show("blind", { direction: "up" }, animsDuration);

    $(window).on("resize", () => {
        updateTitle();
    });
    updateTitle();
});

function updateTitle() {
    $("#videoTextDiv").css({
        "top": `${$("#videoDiv").height() * 0.55}px`
    });
    $("#videoTextDiv a").css("font-size", `${(window.innerHeight + window.innerWidth) * 0.02}px`);
}