const markerTop = document.querySelector("#slidertop");
const markerBottom = document.querySelector("#sliderbottom");
const item = document.querySelectorAll("nav a");

function indicator(e) {
    markerTop.style.left = e.offsetLeft + "px";
    markerTop.style.width = e.offsetWidth + "px";
    markerBottom.style.left = e.offsetLeft + "px";
    markerBottom.style.width = e.offsetWidth + "px";
}

item.forEach(Link => {
    Link.addEventListener("mouseover", (e) => {
        indicator(e.target);
    })
})

