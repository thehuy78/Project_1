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
//index page motion effect
var mainSections = document.querySelectorAll('.main-content-index');
var img = document.querySelectorAll('.img-boxmain-index');
var content = document.querySelectorAll('.content-boxmain_1-index');
// start responsive function showing when screen is resized
window.addEventListener('resize', function () {
    var windowHeight = window.innerHeight;
    if (windowHeight > 9 / 16 * window.innerWidth) {
        mainSections[0].classList.add('active');
        img[0].classList.add('active');
        content[0].classList.add('active1');
        mainSections[1].classList.add('active');
        img[1].classList.add('active');
        content[1].classList.add('active1');
        mainSections[2].classList.add('active');
        img[2].classList.add('active');
        content[2].classList.add('active1');
        mainSections[3].classList.add('active');
        img[3].classList.add('active');
        content[3].classList.add('active1');
        mainSections[4].classList.add('active');
        img[4].classList.add('active');
        content[4].classList.add('active1');
        mainSections[5].classList.add('active');
        img[5].classList.add('active');
        content[5].classList.add('active1');

    }
})
window.addEventListener('load', function () {
    var windowHeight = window.innerHeight;
    if (windowHeight > 9 / 16 * window.innerWidth) {
        mainSections[0].classList.add('active');
        img[0].classList.add('active');
        content[0].classList.add('active1');
        mainSections[1].classList.add('active');
        img[1].classList.add('active');
        content[1].classList.add('active1');
        mainSections[2].classList.add('active');
        img[2].classList.add('active');
        content[2].classList.add('active1');
        mainSections[3].classList.add('active');
        img[3].classList.add('active');
        content[3].classList.add('active1');
        mainSections[4].classList.add('active');
        img[4].classList.add('active');
        content[4].classList.add('active1');
        mainSections[5].classList.add('active');
        img[5].classList.add('active');
        content[5].classList.add('active1');

    }
})
// end responsive function showing when screen is resized

//start index page movement event
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var scroll = true;
    if (windowHeight <= 9 / 16 * window.innerWidth) {
        if (scrollPosition > 0.1 * windowHeight) {
            mainSections[0].classList.add('active'); // Activate the first "main-content-index" section
            img[0].classList.add('active');
            content[0].classList.add('active1');
        } else {
            mainSections[0].classList.remove('active');
            img[0].classList.remove('active');
            content[0].classList.remove('active1');
        }

        if (scrollPosition > windowHeight) {
            mainSections[1].classList.add('active'); // Activate the second "main-content-index" section
            img[1].classList.add('active');
            content[1].classList.add('active1');
        } else {
            mainSections[1].classList.remove('active');
            img[1].classList.remove('active');
            content[1].classList.remove('active1');
        }
        if (scrollPosition > 2 * windowHeight) {
            mainSections[2].classList.add('active'); // Activate the third "main-content-index" section
            img[2].classList.add('active');
            content[2].classList.add('active1');
        } else {
            mainSections[2].classList.remove('active');
            img[2].classList.remove('active');
            content[2].classList.remove('active1');
        }
        if (scrollPosition > 5 * windowHeight) {
            mainSections[3].classList.add('active'); // Activate the third "main-content-index" section
            img[3].classList.add('active');
            content[3].classList.add('active1');
        } else {
            mainSections[3].classList.remove('active');
            img[3].classList.remove('active');
            content[3].classList.remove('active1');
        }
        if (scrollPosition > 6 * windowHeight) {
            mainSections[4].classList.add('active'); // Activate the third "main-content-index" section
            img[4].classList.add('active');
            content[4].classList.add('active1');
        } else {
            mainSections[4].classList.remove('active');
            img[4].classList.remove('active');
            content[4].classList.remove('active1');
        }
        if (scrollPosition > 7 * windowHeight) {
            mainSections[5].classList.add('active'); // Activate the third "main-content-index" section
            img[5].classList.add('active');
            content[5].classList.add('active1');
        } else {
            mainSections[5].classList.remove('active');
            img[5].classList.remove('active');
            content[5].classList.remove('active1');
        }
    }

});
//end index page movement event

window.addEventListener('load', function () {
    var prap1 = document.querySelector('.content-index-top');
    var prap2 = document.querySelector('.content-index-bottom');
    prap1.style.left = '0';
    prap2.style.right = '0';

});
// localstorage value
var link = document.querySelectorAll(".fancy");
link.forEach(link => {
    link.addEventListener("mouseup", function (event) {
        if (event.which === 2 || event.which === 3) { // Confirm left-click
            var value = this.getAttribute('value');
            localStorage.setItem('news', value);
        }
    })
})

function getValue(a) {
    var value = a.getAttribute("value");
    localStorage.setItem("news", value)
    localStorage.setItem("planet", value)
}






window.addEventListener('load', function () {

    for (i = 0; i <= localStorage.length; i++) {
        if (localStorage.key(i) === "signin") {
            return true;
        }
    }
    localStorage.setItem("signin", "false");
});
//================================
window.addEventListener('load', function () {
    let indexlog = document.getElementById("index-log")
    let userindexlog = document.getElementById("user-index-log")
    if (JSON.parse(localStorage.getItem("signin")) == true) {
        userindexlog.innerHTML = localStorage.getItem("comment")
        return true
    }
    else {
        indexlog.innerHTML = "Sign In" + '<i class="fa-solid fa-user"></i>'
    }
});
////responsive menu bar
function toggleContactList() {
    var contactList = document.getElementById("listcontact");
    contactList.classList.toggle("show");
    var contact = document.getElementById("contact");
    contact.classList.toggle("expanded");
}

function toggleMenu() {
    var menu = document.querySelector('.menu-center');
    menu.classList.toggle('show-menu');
}