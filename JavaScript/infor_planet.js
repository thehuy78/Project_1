
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
//end

// starts get data json
$(document).ready(function () {
    var data = [];
    $.getJSON("infor.json", function (items) {
        data = items;

        showcontent(data);
    });
    function showcontent(items) {

        let s = [];
        let k = [];
        let img = []
        var json = []
        var recommend = [];
        var video = [];
        let x = localStorage.getItem("planet");
        for (let i = 0; i < items.length; i++) {
            if (x == items[i].name) {
                json = items[i];
            }
        }
        s.push(` <div class="${json.factname}"> ${json.title}</div>
        `);

        recommend.push(`
        <a value="${json.link1}" onclick="getValue(this)"  class="recommend_content_element" href="eproject_infor_planet.html">
            <img src="${json.imglink1}" alt="">
            <div class="recommend_content_element_text">${json.link1title}</div>
        </a>
        <a value="${json.link2}" onclick="getValue(this)" class="recommend_content_element"  href="eproject_infor_planet.html">
            <img src="${json.imglink2}" alt="">
            <div class="recommend_content_element_text">${json.link2title}</div>
        </a>
        <a value="${json.link3}" onclick="getValue(this)" class="recommend_content_element"  href="eproject_infor_planet.html">
            <img src="${json.imglink3}" alt="">
         <div class="recommend_content_element_text">${json.link3title}</div>
        </a>
        `);
        video.push(`
            <p>${json.video}</p>
        `);


        img.push(` 
            <div class="main__right__elemen">
            <img class="main__right__img" src="${json.img}" alt="">
            </div>
            <br>
            <p>${json.img1name}</p>
            <br>
            <div class="main__right__elemen">
            <img class="main__right__img" src="${json.img2}" alt="">
            </div>
            <br>
            <p>${json.img2name}</p>
            <br>
            <div class="main__right__elemen">
            <img class="main__right__img" src="${json.img3}" alt="">
            </div>
            <br>
            <p>${json.img3name}</p>
            <br>
            <div class="main__right__elemen">
            <img class="main__right__img" src="${json.img4}" alt="">
            </div>
            <br>
            <p>${json.img4name}</p>
            <br>
            <div class="main__right__elemen">
            <img class="main__right__img" src="${json.img5}" alt="">
            </div>
            <br>
            <p>${json.img5name}</p>
            <br>
            <div class="main__right__elemen">
            <img class="main__right__img" src="${json.img6}" alt="">
            </div>
            <br>
            <p>${json.img6name}</p>
            <br>
            <div class="main__right__elemen">
            <img class="main__right__img" src="${json.img7}" alt="">
            </div>
            <br>
            <p>${json.img7name}</p>
            <br>
                `);

        k.push(`
                   
                    <p>${json.fact}</p>
                    <br>
                    <h2>Namesake</h2>
                    <br>
                    <p>${json.namesake}</p>
                    <br>
                    <h2>Potential for Life</h2>
                    <br>
                    <p>${json.Potential_for_Life}</p>
                    <br>
                    <h2>Size and Distance</h2>
                    <br>
                    <p>${json.Size_and_Distance}</p>
                    <br>
                    <h2>Orbit and Rotation</h2>
                    <br>
                    <p>${json.Orbit_and_Rotation}</p>
                    <br>
                    <h2>Moons</h2>
                    <br>
                    <p>${json.Moons}</p>
                    <br>
                    <h2>Rings</h2>
                    <br>
                    <p>${json.Rings}</p>
                    <br>
                    <h2>Formation</h2>
                    <br>
                    <p>${json.Formation}</p>
                    <br>
                    <h2>Structure</h2>
                    <br>
                    <p>${json.Structure}</p>
                    <br>
                    <h2>Surface</h2>
                    <br>
                    <p>${json.Surface}</p>
                    <br>
                    <h2>Atmosphere</h2>
                    <br>
                    <p>${json.Atmosphere}</p>
                    <br>
                    <h2>Magnetosphere</h2>
                    <br>
                    <p>${json.Magnetosphere}</p>
                    <br><br><br>
                    

        `);
        $(".video").html(video.join(" "));
        $(".recommend_content").html(recommend.join(" "));
        $(".dicovery__infor").html(k.join(" "));
        $("#fact").html(s.join(" "));
        $(".main__right").html(img.join(" "));
        // end get data json

        //get background img via json file
        var background = document.querySelector(".background_image");
        background.classList.add(`${json.background}`);
        //end 

        document.title = `${json.name}`// set title for webside

        var link = document.querySelectorAll(".recommend_content_element");
        link.forEach(link => {
            link.addEventListener("mouseup", function (event) {
                if (event.which === 2 || event.which === 3) { // Confirm left-click
                    var value = this.getAttribute('value');
                    localStorage.setItem('planet', value);
                }
            })
        })
    }
})
function getValue(a) {
    var value = a.getAttribute("value");
    localStorage.setItem("planet", value)
}
// effect text-content  
window.addEventListener('load', function () {
    var fact = document.querySelector("#fact");
    fact.style.transform = "scale(1.3)"
});
//end



// effect text-content
window.addEventListener('scroll', function () {

    var infor = document.querySelector(".dicovery__infor");
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0.1 * window.innerHeight) {

        infor.classList.add('dicovery__inforscroll_style2');
    } else {

        infor.classList.remove('dicovery__inforscroll_style2');
    }
});
//end

//effect img 
window.addEventListener('scroll', function () {
    var a = document.querySelectorAll('.main__right__img');

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0.4 * window.innerHeight) {
        a[0].classList.add('main__rightscrolled');
    } else {
        a[0].classList.remove('main__rightscrolled');
    }
    if (scrolled > 0.8 * window.innerHeight) {
        a[1].classList.add('main__rightscrolled');
    } else {
        a[1].classList.remove('main__rightscrolled');
    }
    if (scrolled > 1.2 * window.innerHeight) {
        a[2].classList.add('main__rightscrolled');
    } else {
        a[2].classList.remove('main__rightscrolled');
    }
    if (scrolled > 1.8 * window.innerHeight) {
        a[3].classList.add('main__rightscrolled');
    } else {
        a[3].classList.remove('main__rightscrolled');
    }
    if (scrolled > 2.3 * window.innerHeight) {
        a[4].classList.add('main__rightscrolled');
    } else {
        a[4].classList.remove('main__rightscrolled');
    }
    if (scrolled > 3 * window.innerHeight) {
        a[5].classList.add('main__rightscrolled');
    } else {
        a[5].classList.remove('main__rightscrolled');
    }
    if (scrolled > 3.4 * window.innerHeight) {
        a[6].classList.add('main__rightscrolled');
    } else {
        a[6].classList.remove('main__rightscrolled');
    }
});
//end
