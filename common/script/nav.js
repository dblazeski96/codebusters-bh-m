let navAnimsDuration = 800;

$(document).ready(() => {
    $("body").prepend(`
    <nav class="navbar navbar-custom">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navGate" href="#">BEIT HAIM</a>
            </li>
        </ul>
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navStories" href="#">STORIES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navTimeline" href="#">TIMELINE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navForum" href="#">FORUM</a>
            </li>
        </ul>
    </nav>
    `);

    $("#navGate").on("click", () => {
        $("nav, nav *").hide("blind", {direction: "up"}, navAnimsDuration, () => {
            document.location.href = "../homepage/homepage.html";
        });
    });
    
    $("#navStories").on("click", () => {
        $("nav, nav *").hide("blind", {direction: "up"}, navAnimsDuration, () => {
            document.location.href = "../slider/slider.html";
        });
    });
    
    $("#navTimeline").on("click", () => {
        $("nav, nav *").hide("blind", {direction: "up"}, navAnimsDuration, () => {
            document.location.href = "../timeline/timeline.html";
        });
    });
    
    $("#navForum").on("click", () => {
        $("nav, nav *").hide("blind", {direction: "up"}, navAnimsDuration, () => {
            document.location.href = "../forum/forum.html";
        });
    });
});



