
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
        var x = localStorage.getItem('zodiac');

        for (let i = 0; i < items.length; i++) {
            if (x == items[i].name) {
                json = items[i];
            }
        }
        console.log(json)
        s.push(`
        <h1>Wonderful ! Your zodiac sign is ${json.name}.</h1>
        <br><br><br><br>
        <h1>${json.title}</h1>
        <br><br><br><br>
        <p>${json.fact}</p>
        <br><br><br>
        <img src="${json.img}" alt="">
        <br><br><br>
        <h2>${json.maletitle}</h2>
        <br><br><br>
        <p>${json.malecontent}</p>
        <br><br><br>
        <h2>${json.femaletitle}</h2>
        <br><br><br>
        <p>${json.femalecontent}</p>
        <br><br><br>
        <h2>Summary</h2>
        <br><br><br>
        <p>${json.sum}</p>
        
        `)
        $(".zodiac_main_content").html(s.join(" "));
        document.title = `${json.name}`;

    }

})