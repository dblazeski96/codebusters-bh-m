let navAnimsDuration = 800;

$(document).ready(() => {
    $("body").prepend(`
    <nav class="navbar navbar-custom">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navGate" href="#">PEOPLE OF BEIT HAIM</a>
            </li>
        </ul>
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navStories" href="#">STORIES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navForum" href="#">DISCUSSIONS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navShop" href="#">SHOP</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-custom" id="navAbout" href="#">ABOUT</a>
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
    
    $("#navForum").on("click", () => {
        $("nav, nav *").hide("blind", {direction: "up"}, navAnimsDuration, () => {
            document.location.href = "../forum/forum.html";
        });
    });

    $("#navShop").on("click", () => {
        $("nav, nav *").hide("blind", {direction: "up"}, navAnimsDuration, () => {
            document.location.href = "../shop/shop.html";
        });
    });

    $("#navAbout").on("click", () => {
        $("nav, nav *").hide("blind", {direction: "up"}, navAnimsDuration, () => {
            document.location.href = "../about/about.html";
        });
    });
});



