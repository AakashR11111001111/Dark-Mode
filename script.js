var toggle_btn = document.querySelector("#slider");
var bg = document.querySelector(".main-container");
var heading = document.querySelector("#heading");
var focus = document.querySelector("#toogle-btn");

focus.addEventListener("click", function() {
    if (bg.style.backgroundColor === "black") {
        bg.style.backgroundColor = "white";
        heading.style.color = "black";
        toggle_btn.style.left = "0px";
    } else {
        bg.style.backgroundColor = "black";
        heading.style.color = "white";
        toggle_btn.style.left = "100px";
    }
});
