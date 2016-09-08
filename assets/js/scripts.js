
function myFunction() {
    var x = document.getElementById("top-nav");
    var y = document.getElementById("nav-menu-container")
    if (x.className === "ul-navbar" && y.className === "nav-menu") {
        x.className += " navbar-responsive";
        y.className += "nav-menu-responsive";
    } else {
        x.className = "ul-navbar";
        y.className = "nav-menu";
    }
}