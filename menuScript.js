function toggleMenu() {
    var x = document.getElementById("topnavID");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}