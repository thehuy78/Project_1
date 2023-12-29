//menu bar effect
window.addEventListener("scroll", function () {
    var menuWeb = document.getElementById('menuWeb');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset > this.previousScroll) {
        menuWeb.style.opacity = "0"
        menuWeb.style.top = "-10vw"

    } else {
        menuWeb.style.top = "0vw"
        menuWeb.style.opacity = "1"
        menuWeb.classList.add('scrolled')
    }
    this.previousScroll = window.pageYOffset;
});

var obser1 = document.querySelector('.comet-card1');
obser1.addEventListener("click", function () {
    let comet = "Halley's"
    localStorage.setItem("comet", comet)
    window.location.href = "eproject_comet_info.html";
});
var obser2 = document.querySelector('.comet-card2');
obser2.addEventListener("click", function () {
    let comet = "Hale-Bopp";
    localStorage.setItem("comet", comet);
    window.location.href = "eproject_comet_info.html";
});
var obser3 = document.querySelector('.comet-card3');
obser3.addEventListener("click", function () {
    let comet = "Hyakutake";
    localStorage.setItem("comet", comet);
    window.location.href = "eproject_comet_info.html";
});