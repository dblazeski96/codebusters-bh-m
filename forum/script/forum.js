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

$(document).ready(() => {
    $("#showHide").on("click", () => {
        let x = document.getElementById("sideMenu");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

    $("#jewsihHistory").on("click", () => {
        $("nav, nav *").hide("blind", { direction: "up" }, animsDuration, () => {
            document.location.href = "jewishHistory.html";
        });
    });

    $("#topicOne").on("click", () => {
        $("nav, nav *").hide("blind", { direction: "up" }, animsDuration, () => {
            document.location.href = "topicOne.html";
        });
    });

    
});




