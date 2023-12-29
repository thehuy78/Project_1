

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

window.addEventListener('load', function () {
    var fact = document.querySelectorAll(".cosntellation_list_content_element");
    fact.forEach(function (fact) {
        fact.style.transform = "scale(1)"
    })
});

var app = angular.module('myapp', []);

app.filter("search", function () {
    return function (list, a) {
        if (a) {
            var filteredList = []
            for (let i = 0; i < list.length; i++) {
                if (list[i].id.toLowerCase().indexOf(a.toLowerCase()) !== -1) {
                    filteredList.push(list[i]);
                }
            }
            return filteredList;
        }
    };
});
app.run(function ($rootScope, $http) {
    $rootScope.list = [];
    $rootScope.search_list = [];
    $rootScope.input
    $http.get('listnews.json').then(function (a) {
        $rootScope.list = a.data.constellation;
        console.log($rootScope.list)
        // start set page news
        $rootScope.pagesize = 8;
        $rootScope.totalPages = Math.ceil($rootScope.list.length / $rootScope.pagesize);
        $rootScope.currentPage = 0;
        $rootScope.pages = [];
        for (let i = 0; i < $rootScope.totalPages; i++) {
            $rootScope.pages[i] = $rootScope.list.slice(i * $rootScope.pagesize, (i + 1) * $rootScope.pagesize)
        };
        // end
    })

})

app.controller("ctr1", function ($scope, $rootScope, $timeout, $filter) {
    $scope.button_page = true;
    $scope.showsearch = false;
    $scope.showpage = true;
    $scope.page_number = true;
    $scope.backgroundcolor = 'white';
    $scope.pagenumber = 0
    $scope.color = "black"
    $scope.confirm_search = false
    $scope.$watch('input', function (new_input, old_input) {
        if (new_input != old_input) {
            $rootScope.search_list = $filter('search')($rootScope.list, new_input);
            $rootScope.total_pages_search = Math.ceil($rootScope.search_list.length / $rootScope.pagesize);
            $rootScope.pages_search = [];
            for (let i = 0; i < $rootScope.total_pages_search; i++) {
                $rootScope.pages_search[i] = $rootScope.search_list.slice(i * $rootScope.pagesize, (i + 1) * $rootScope.pagesize);
            }
        }
    });

    $scope.nextpage = function () {
        if ($rootScope.total_pages_search == 0 || $rootScope.total_pages_search == undefined) {
            if ($rootScope.currentPage < $rootScope.totalPages - 1) {
                $rootScope.currentPage++;
                $scope.pagenumber = $rootScope.currentPage;

            }
        }
        else {
            if ($rootScope.currentPage < $rootScope.total_pages_search - 1) {
                $rootScope.currentPage++;
                $scope.pagenumber = $rootScope.currentPage;

            }
        }
    };
    $scope.previewpage = function () {
        if ($rootScope.currentPage > 0) {
            $rootScope.currentPage--;
            $scope.pagenumber = $rootScope.currentPage;
        }
    }

    $scope.click_number = function ($index) {
        $rootScope.currentPage = $index
        $scope.pagenumber = $index
    }

    $scope.setshow_search_or_page = function () {
        $rootScope.input = $scope.input


        if ($scope.input == "") {
            $scope.showsearch = false;
            $scope.showpage = true
            // $scope.button_page = true;
            $scope.page_number = true;
            $scope.page_number_search = false;
        }
        else {
            $scope.showsearch = true;
            $scope.showpage = false
            // $scope.button_page = false;
            $scope.page_number = false;
            $scope.page_number_search = true;
            $scope.pagenumber = $rootScope.currentPage = 0;
        }
    }
    $scope.handleClick = function (event, infor) {
        if (event.which === 3) {

            localStorage.setItem('constellation', infor.name);
        }
    };
    $scope.hide = function () {
        var fact = document.querySelectorAll(".cosntellation_list_content_element");
        fact.forEach(function (fact) {
            fact.style.transform = "scale(0)"
        })
    }
    $scope.show = function () {

        $timeout(function () {
            var fact = document.querySelectorAll(".cosntellation_list_content_element");
            fact.forEach(function (fact) {
                fact.style.transform = "scale(1)"
            })
        }, 500)

    }
    $scope.getValue = function (infor) {
        localStorage.setItem('constellation', infor.name);
    }
})

let zodiac_date = true
let load = document.querySelector('.scanner span');
let birth = document.querySelector(".fortune_telling_button")


birth.addEventListener('click', function () {
    let dateofbirth = document.getElementById("date").value;
    let monthofbirth = document.getElementById('month').value;

    if (dateofbirth > 29 && monthofbirth == 2) {
        alert("Feb only have 29");
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = false
        return false
    }
    if ((dateofbirth >= 21 && monthofbirth == 3) || (dateofbirth <= 20 && monthofbirth == 4)) {
        localStorage.setItem('zodiac', 'Aries')
        let loading = new Audio('audio/loading.mp3');
        loading.autoplay = true;
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        load.style.display = "block"
        return true
    };
    if ((dateofbirth >= 21 && monthofbirth == 4) || (dateofbirth <= 21 && monthofbirth == 5)) {
        localStorage.setItem('zodiac', 'Taurus')
        let loading = new Audio('audio/loading.mp3');
        loading.autoplay = true;
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        load.style.display = "block"
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 22 && monthofbirth == 5) || (dateofbirth <= 21 && monthofbirth == 6)) {
        localStorage.setItem('zodiac', 'Gemini')
        let loading = new Audio('audio/loading.mp3');
        load.style.display = "block"
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 22 && monthofbirth == 6) || (dateofbirth <= 22 && monthofbirth == 7)) {
        localStorage.setItem('zodiac', 'Cancer')
        let loading = new Audio('audio/loading.mp3');
        load.style.display = "block"
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 23 && monthofbirth == 7) || (dateofbirth <= 21 && monthofbirth == 8)) {
        localStorage.setItem('zodiac', 'Leo')
        let loading = new Audio('audio/loading.mp3');
        load.style.display = "block"
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 22 && monthofbirth == 8) || (dateofbirth <= 23 && monthofbirth == 9)) {
        localStorage.setItem('zodiac', 'Virgo')
        let loading = new Audio('audio/loading.mp3');
        load.style.display = "block"
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 24 && monthofbirth == 9) || (dateofbirth <= 23 && monthofbirth == 10)) {
        localStorage.setItem('zodiac', 'Libra')
        let loading = new Audio('audio/loading.mp3');
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        loading.autoplay = true;
        load.style.display = "block"
        return true
    };
    if ((dateofbirth >= 24 && monthofbirth == 10) || (dateofbirth <= 22 && monthofbirth == 11)) {
        localStorage.setItem('zodiac', 'Scorpio')
        let loading = new Audio('audio/loading.mp3');
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        load.style.display = "block"
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 23 && monthofbirth == 11) || (dateofbirth <= 22 && monthofbirth == 12)) {
        localStorage.setItem('zodiac', 'Sagittarius')
        let loading = new Audio('audio/loading.mp3');
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        load.style.display = "block"
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 23 && monthofbirth == 12) || (dateofbirth <= 20 && monthofbirth == 1)) {
        localStorage.setItem('zodiac', 'Capricorn')
        let loading = new Audio('audio/loading.mp3');
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        load.style.display = "block"
        loading.autoplay = true;
        return true
    };
    if ((dateofbirth >= 21 && monthofbirth == 1) || (dateofbirth <= 19 && monthofbirth == 2)) {
        localStorage.setItem('zodiac', 'Aquarius')
        let loading = new Audio('audio/loading.mp3');
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        load.style.display = "block"
        loading.autoplay = true;
        return true
    };

    if ((dateofbirth >= 20 && monthofbirth == 2) || (dateofbirth <= 20 && monthofbirth == 3)) {
        localStorage.setItem('zodiac', 'Pisces')
        let loading = new Audio('audio/loading.mp3');
        dateofbirth = "";
        monthofbirth = "";
        zodiac_date = true
        load.style.display = "block"
        loading.autoplay = true;
        return true
    };


})

document.querySelector('.fortune_telling form').addEventListener('submit', function (event) {
    event.preventDefault();

    setTimeout(function () {
        if (zodiac_date) {
            load.style.display = "none"
            event.target.submit();
        }
    }, 3000);
});

