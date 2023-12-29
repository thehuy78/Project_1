
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
        alert("You are not logged in!")
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
        var x = localStorage.getItem("constellation");
        var recommend = [];
        for (let i = 0; i < items.length; i++) {
            if (x == items[i].name) {
                json = items[i];
            }
        }
        recommend.push(`
        <a value="${json.link1}" onclick="getValue(this)"  class="recommend_content_element" href="eproject_constellation.html">
            <img src="${json.imglink1}" alt="">
            <div class="recommend_content_element_text">${json.link1title}</div>
        </a>
        <a value="${json.link2}" onclick="getValue(this)" class="recommend_content_element"  href="eproject_constellation.html">
            <img src="${json.imglink2}" alt="">
            <div class="recommend_content_element_text">${json.link2title}</div>
        </a>
        <a value="${json.link3}" onclick="getValue(this)" class="recommend_content_element"  href="eproject_constellation.html">
            <img src="${json.imglink3}" alt="">
         <div class="recommend_content_element_text">${json.link3title}</div>
        </a>
        `);
        s.push(`
        <h1>${json.title}</h1>
        <br><br><br>
        <div  class="mini_menu">
            <a href="#t1">${json.p1title}.</a>
            <a href="#t2">${json.p2title}.</a>
            <a href="#t3">${json.p3title}.</a>
            <a href="#t4">${json.p4title}.</a>
            <a href="#t5">${json.p5title}.</a>
            <a href="#t6">${json.p6title}.</a>
        </div>
        <br><br>
        <div id="t1" class="video">${json.video}</div>
        <br><br>
        <h2>${json.p1title}</h2>
        <br><br>
        <p>${json.p1content}</p>
        <br><br>
        <img id="t2" src="${json.img}" alt="">
        <br><br>
        <h2>${json.p2title}</h2>
        <br><br>
        <p id="t3">${json.p2content}</p>
        <br><br>
        <h2>${json.p3title}</h2>
        <br><br>
        <p id="t4">${json.p3content}</p>
        <br><br>
        <h2>${json.p4title}</h2>
        <br><br>
        <p id="t5">${json.p4content}</p>
        <br><br>
        <h2>${json.p5title}</h2>
        <br><br>
        <p id="t6">${json.p5content}</p>
        <br><br>
        <h2>${json.p6title}</h2>
        <br><br>
        <p>${json.p6content}</p>
        <br><br>
        `)
        $(".constellation_main_content").html(s.join(" "));
        $(".recommend_content").html(recommend.join(" "));
        document.title = `${json.name}`;
        var link = document.querySelectorAll(".recommend_content_element");
        link.forEach(link => {
            link.addEventListener("mouseup", function (event) {
                if (event.which === 2 || event.which === 3) { // Confirm left-click
                    var value = this.getAttribute('value');
                    localStorage.setItem('constellation', value);
                }
            })
        })

    }

})
function getValue(a) {
    var value = a.getAttribute("value");
    localStorage.setItem("constellation", value)
}