
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
        var x = localStorage.getItem("theory");
        console.log(items)
        for (let i = 0; i < items.length; i++) {
            if (x == items[i].name) {
                json = items[i];
            }
        }
        console.log(json)
        s.push(`
        <h1>${json.title}</h1>
        <br><br><br><br>
        <div class="mini_menu">
            <a href="#t1">${json.p1title}.</a>
            <a href="#t2">${json.p2title}.</a>
            <a href="#t3">${json.p3title}.</a>
            <a href="#t4">${json.p4title}.</a>
            <a href="#t5">${json.p5title}.</a>
            <a href="#t6">${json.p6title}.</a>
            <a href="#t7">${json.p7title}.</a>
            <a href="#t8">${json.p8title}.</a>
        </div>
        <br><br><br>
        <div class="video">${json.video}</div>
        <br><br><br>
        <p id="t1">${json.fact}</p>
        <br><br><br>
        <h2 >${json.p1title}</h2>
        <br><br>
        <p>${json.p1content}</p>
        <br><br><br>
        <img src="${json.img}" alt="">
        <br>
        <figcaption id="t2">${json.figucaption1}</figcaption>
        <br><br><br>
        <h2>${json.p2title}</h2>
        <br><br><br>
        <p>${json.p2content}</p>
        <br><br><br>
        <img src="${json.img2}" alt="">
        <br>
        <figcaption id="t3">${json.figucaption2}</figcaption>
        <br><br><br>
        <h2 >${json.p3title}</h2>
        <br><br><br>
        <p>${json.p3content}</p>
        <br><br><br>
        <img src="${json.img3}" alt="">
        <br>
        <figcaption id="t4">${json.figucaption3}</figcaption>
        <br><br><br>
        <h2>${json.p4title}</h2>
        <br><br><br>
        <p>${json.p4content}</p>
        <br><br><br>
        <img src="${json.img4}" alt="">
        <br>
        <figcaption id="t5">${json.figucaption4}</figcaption>
        <br><br><br>
        <h2>${json.p5title}</h2>
        <br><br><br>
        <p>${json.p5content}</p>
        <br><br><br>
        <img src="${json.img5}" alt="">
        <br>
        <figcaption id="t6">${json.figucaption5}</figcaption>
        <br><br><br>
        <h2>${json.p6title}</h2>
        <br><br><br>
        <p id="t7">${json.p6content}</p>
        <br><br><br>
        <h2>${json.p7title}</h2>
        <br><br><br>
        <p id="t8">${json.p7content}</p>
        <br><br><br>
        <h2>${json.p8title}</h2>
        <br><br><br>
        <p>${json.p8content}</p>
        <br><br><br>
        
        `)
        $(".theory_main_content").html(s.join(" "));
        document.title = `${json.name}`;

    }

})