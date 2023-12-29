//function comment
let seclocal = localStorage.getItem("signin")
sessionStorage.setItem("signin", seclocal)
let userlocal = localStorage.getItem("comment")
sessionStorage.setItem("username", userlocal)
function addComment() {

    let space = /^[ ]+$/
    if (sessionStorage.getItem("signin") == "true") {
        console.log(sessionStorage.getItem("signin"))
        var comment = document.getElementById("cmt").value;
        var username = sessionStorage.getItem("username");
        var usernamecomment = document.createElement("p");
        var contentcomment = document.createElement("p");
        if (comment == "" || space.test(comment)) {
            return false
        } else {
            contentcomment.classList.add("comment-content");
            usernamecomment.classList.add("comment-username");
            usernamecomment.innerHTML = "<strong>" + username + "</strong>: "
            contentcomment.innerHTML = comment
            var commentContainer = document.getElementById("comment_content");
            commentContainer.appendChild(usernamecomment);
            var commentContainer = document.getElementById("comment_content");
            commentContainer.appendChild(contentcomment);
            document.getElementById("cmt").value = "";
            return true
        }
    }
    else {
        alert("You are not logged in")
        return false
    }
}
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




$(document).ready(function () {
    var data = [];
    $.getJSON("infor.json", function (items) {
        data = items;

        showcontent(data);
    });
    function showcontent(items) {
        let s = [];
        var json = [];
        var x = localStorage.getItem("comet");
        for (let i = 0; i < items.length; i++) {
            if (x == items[i].name) {
                json = items[i];
            }
        }

        s.push(`
    <h1>${json.title}</h1>
    <img src="${json.im1}" alt="">
    <figcaption>${json.fig1}</figcaption>
    <div><h3>Discovery and Naming:</h3>${json.s1}</div>
    <div><h3>Orbital Period:</h3>${json.s2}</div>
    <img src="${json.im2}" alt="">
    <figcaption>${json.fig2}</figcaption>
    <div><h3>Physical Characteristics:</h3>${json.s3}</div>
    <div><h3>Observation:</h3>${json.s4}</div>
    <img src="${json.im3}" alt="">
    <figcaption>${json.fig3}</figcaption>
    <div><h3>Famous Event:</h3>${json.s5}</div>
    <div><h3>Research and Missions:</h3>${json.s6}</div>
    
    `)
        $(".comet-main-content").html(s.join(" "));
        document.title = `${json.name}`;
    }

});