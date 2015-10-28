
var app = angular.module("app", []);


app.controller("IndexController", ['$scope', '$http', function ($scope,  $http) {

    $http({
        method: "GET",
        url: "/banco-api/api/entidadBancaria"
    }).success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    });

}]);



