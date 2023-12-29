
// effect menu bar
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

var obser1 = document.querySelector('.observation-card1');
obser1.addEventListener("click", function () {
    let observation = "FAST"
    localStorage.setItem("observation", observation)
    window.location.href = "eproject_observations_info.html";
});
var obser2 = document.querySelector('.observation-card2');
obser2.addEventListener("click", function () {
    let observation = "VLT";
    localStorage.setItem("observation", observation);
    window.location.href = "eproject_observations_info.html";
});
var obser3 = document.querySelector('.observation-card3');
obser3.addEventListener("click", function () {
    let observation = "KECK";
    localStorage.setItem("observation", observation);
    window.location.href = "eproject_observations_info.html";
});
