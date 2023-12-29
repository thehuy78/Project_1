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

var book1 = document.querySelector('.book1');
book1.addEventListener("click", function () {
    let theory = "BigBang"
    localStorage.setItem("theory", theory)
    window.location.href = "eproject_theory.html";
});
var book2 = document.querySelector('.book2');
book2.addEventListener("click", function () {
    let theory = "EOE";
    localStorage.setItem("theory", theory);
    window.location.href = "eproject_theory.html";
});
