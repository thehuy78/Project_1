
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




$(document).ready(function () {
    var data = [];
    $.getJSON("infor.json", function (items) {
        data = items;

        showcontent(data);
    });
    function showcontent(items) {
        let s = [];
        var json = [];
        var x = localStorage.getItem("observation");
        for (let i = 0; i < items.length; i++) {
            if (x == items[i].name) {
                json = items[i];
            }
        }

        s.push(`
        <h1>${json.title}</h1>
        <div class="video">${json.video}</div>
        <div>${json.des}</div>
        <div>${json.location}</div>
        <div class="map">${json.map}</div>
        <br>
        <figcaption>${json.fig1}</figcaption>
        <div>${json.scale}</div>
        <img src="${json.im1}" alt="">
        <figcaption>${json.fig2}</figcaption>
        <div>${json.tech}</div>
        <div>${json.cn}</div>
        <img src="${json.im2}" alt="">
        <div>${json.op}</div>
        <div>${json.p2}</div>
        
        `)
        $(".observation-main-content").html(s.join(" "));
        document.title = `${json.name}`;
    }

});