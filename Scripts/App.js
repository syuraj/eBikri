var app = angular.module('MobileAngularUiExamples', [
  "ngRoute",
  "ngTouch",
  "mobile-angular-ui"
]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', { templateUrl: "/scripts/templates/home.html" });
    $routeProvider.when('/scroll', { templateUrl: "scroll.html" });
    $routeProvider.when('/toggle', { templateUrl: "toggle.html" });
    $routeProvider.when('/tabs', { templateUrl: "tabs.html" });
    $routeProvider.when('/accordion', { templateUrl: "accordion.html" });
    $routeProvider.when('/overlay', { templateUrl: "overlay.html" });
    $routeProvider.when('/forms', { templateUrl: "forms.html" });
    $routeProvider.when('/carousel', { templateUrl: "carousel.html" });
});

app.controller('MainController', function ($rootScope, $scope) {

    $rootScope.$on("$routeChangeStart", function () {
        $rootScope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.loading = false;
    });
});

setTimeout(function () {
    jQuery(function ($) {
        $(".touchcarousel.three-d").touchCarousel({
            itemsPerMove: 4,
            pagingNav: true,
            pagingNavControls: false,
            scrollbar: false,
            scrollToLast: true,
            loopItems: false,
            dragUsingMouse: true,
            directionNav: false
        });
    });
}, 3000);