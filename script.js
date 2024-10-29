var toggle_btn = document.querySelector("#slider");
var bg = document.querySelector(".main-container");
var heading = document.querySelector("#heading");
var focus = document.querySelector("#toogle-btn");
var nightOwl = document.querySelector("#night-owl");

var dayRing = document.querySelector("#san");

window.addEventListener("load",function(){
    bg.style.backgroundColor = "white";
        heading.style.color = "white";
        heading.style.webkitTextStroke = "7px black"
        toggle_btn.style.left = "0px";
        nightOwl.pause();
        dayRing.play();
})


focus.addEventListener("click", function() {
    if (bg.style.backgroundColor === "black") {
        bg.style.backgroundColor = "white";
        heading.style.color = "white";
        heading.style.webkitTextStroke = "7px black"
        toggle_btn.style.left = "0px";
        nightOwl.pause();
        dayRing.play();
    } else {
        bg.style.backgroundColor = "black";
        heading.style.color = "black";
        toggle_btn.style.left = "100px";
        heading.style.webkitTextStroke = "7px white"
        nightOwl.play();
        dayRing.pause();
    }
});
