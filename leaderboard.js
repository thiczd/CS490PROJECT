document.getElementById("options-menu").addEventListener("click", function() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

window.onclick = function(event) {
    if (!event.target.matches('#options-menu')) {
        var dropdowns = document.getElementById("dropdown-menu");
        if (dropdowns.style.display === "block") {
            dropdowns.style.display = "none";
        }
    }
};
