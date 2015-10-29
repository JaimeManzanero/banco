


function getParameterByName(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)",
            regex = new RegExp(regexS),
            results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}

var idEntidadBancaria = getParameterByName('idEntidadBancaria');

app.controller("DeleteController", ['$scope', '$log', '$http', function ($scope, $log, $http) {
        $http({
            method: "DELETE",
            params: {
                idEntidadBancaria: idEntidadBancaria
            },
            url: "/banco-api/api/entidadBancaria/" + getParameterByName("idEntidadBancaria")
        }).success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });
    }]);


