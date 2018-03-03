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
            <a class="nav-link nav-link-custom" id="navMap" href="#">CEMETERY MAP</a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-custom" id="navShop" href="#">SHOP</a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-custom" id="navAbout" href="#">ABOUT THE PROJECT</a>
        </li>
    </ul>
</nav>
`);

$("#navGate").on("click", () => {
    $("nav, nav *").hide("blind", {direction: "up"}, animsDuration, () => {
        document.location.href = "../homepage/homepage.html";
    });
});

$("#navMap").on("click", () => {
    $("nav, nav *").hide("blind", {direction: "up"}, animsDuration, () => {
        document.location.href = "../map/map.html";
    });
});

$("#navStories").on("click", () => {
    $("nav, nav *").hide("blind", {direction: "up"}, animsDuration, () => {
        document.location.href = "../slider/slider.html";
    });
});

$("#navShop").on("click", () => {
    $("nav, nav *").hide("blind", {direction: "up"}, animsDuration, () => {
        document.location.href = "../shop/shop.html";
    });
});