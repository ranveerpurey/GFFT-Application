var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginCtrl"
        })
        .when("/homePage", {
            templateUrl: "homePage.html",
            controller: "homePageCtrl"
        })
        .otherwise({
            redirectTo: "/login"
        });
});

//controller for login page
myApp.controller("loginCtrl", function($scope,$http,$window) {


    $scope.login = function() {
        //Insert login details of the user to database and proceed to homepage
        $http.post("server/insert.php",{'username': $scope.username, 'password': $scope.password});
                $window.location.href  = "#/homepage";

    }
});

//controller for homeapage
myApp.controller("homePageCtrl", function($scope) {

});
