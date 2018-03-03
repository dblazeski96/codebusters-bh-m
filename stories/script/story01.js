let animsDuration = 800;

$(document).ready(() => {
    $("body").css({
        "background-image": `url("../common/img/bg.png")`
    });

    $("nav, nav *").show("blind", { direction: "up" }, animsDuration);

    $(window).on("resize", () => {
        updateTitle();
        $("#videoTextDiv h1").css("font-size", `${(window.innerHeight + window.innerWidth) * 0.014}px`);
    });
    updateTitle();
});

function updateTitle() {
    $("#videoTextDiv").css({
        "top": `${$("#videoDiv").height() * 0.75}px`
    });
}