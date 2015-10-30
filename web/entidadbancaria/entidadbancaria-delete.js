

app.controller("DeleteController", ['$scope', '$http', 'entidadBancariaService', function ($scope, $http, entidadBancariaService) {

        var respuesta = entidadBancariaService.delete();

        respuesta.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });
    }]);
