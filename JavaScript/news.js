
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
// effect menu
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
// end

$(document).ready(function () {
    var data = [];
    $.getJSON("infor.json", function (items) {
        data = items;

        showcontent(data);
    });

    function showcontent(items) {
        let s = [];
        var json = [];
        var recommend = [];
        var x = localStorage.getItem("news");
        for (let i = 0; i < items.length; i++) {
            if (x == items[i].name) {
                json = items[i];
            }
        }

        recommend.push(`
            <a value="${json.link1}" onclick="getValue(this)"  class="recommend_content_element" href="eproject_news.html">
                <img src="${json.imglink1}" alt="">
                <div class="recommend_content_element_text">${json.link1title}</div>
            </a>
            <a value="${json.link2}" onclick="getValue(this)" class="recommend_content_element"  href="eproject_news.html">
                <img src="${json.imglink2}" alt="">
                <div class="recommend_content_element_text">${json.link2title}</div>
            </a>
            <a value="${json.link3}" onclick="getValue(this)" class="recommend_content_element"  href="eproject_news.html">
                <img src="${json.imglink3}" alt="">
             <div class="recommend_content_element_text">${json.link3title}</div>
            </a>
            `);

        s.push(`
            <h1>${json.title}</h1>
            <br><br><br><br>
            <div>${json.fact}</div>
            <br><br><br>
            <div>${json.p1}</div>
            <br><br><br>
            <img src="${json.img}" alt="">
            <br>
            <figcaption>${json.fig1}</figcaption>
            <br><br><br>
            <div>${json.p2}</div>
            <br><br><br>
            <img src="${json.img2}" alt="">
            <br>
            <figcaption>${json.fig2}</figcaption>
            <br><br><br>
            <div>${json.p3}</div>
            <br><br><br>
            <img src="${json.img3}" alt="">
            <br>
            <figcaption>${json.fig3}</figcaption>
            <br><br><br>
            <div>${json.p4}</div><br><br><br>
            `)
        $(".news_main_content").html(s.join(" "));
        $(".recommend_content").html(recommend.join(" "));
        document.title = `${json.name}`;
        var link = document.querySelectorAll(".recommend_content_element");
        link.forEach(link => {
            link.addEventListener("mouseup", function (event) {
                if (event.which === 2 || event.which === 3) { // Confirm left-click
                    var value = this.getAttribute('value');
                    localStorage.setItem('news', value);
                }
            })
        })

    }
});
function getValue(a) {
    var value = a.getAttribute("value");
    localStorage.setItem("news", value)
}