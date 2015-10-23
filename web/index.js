
var app = angular.module("app", []);


app.controller("IndexController", ['$scope', '$log', '$http', function ($scope, $log, $http) {

    $http({
        method: "GET",
        url: "/banco-api/api/entidadBancaria"
    }).success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    });

}]);



