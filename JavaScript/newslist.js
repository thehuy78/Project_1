

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
    var fact = document.querySelectorAll(".news_list_content_element");
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
                if (list[i].title.toLowerCase().indexOf(a.toLowerCase()) !== -1) {
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
        $rootScope.list = a.data.news;
        // start set page news
        $rootScope.pagesize = 6;
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
            localStorage.setItem('news', infor.name);
            localStorage.setItem('planet', infor.name);
            localStorage.setItem('theory', infor.name);
            localStorage.setItem('constellation', infor.name);
        }
    };
    $scope.hide = function () {
        var fact = document.querySelectorAll(".news_list_content a");
        fact.forEach(function (fact) {
            fact.style.transform = "scale(0)"
        })
    }
    $scope.show = function () {

        $timeout(function () {
            var fact = document.querySelectorAll(".news_list_content a");
            fact.forEach(function (fact) {
                fact.style.transform = "scale(1)"
            })
        }, 500)

    }
    $scope.getValue = function (infor) {
        localStorage.setItem('news', infor.name);
        localStorage.setItem('planet', infor.name);
        localStorage.setItem('theory', infor.name);
        localStorage.setItem('constellation', infor.name);
    }
})