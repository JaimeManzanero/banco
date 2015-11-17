

app.controller("DeleteController", ['$scope', 'entidadBancariaService', function ($scope, entidadBancariaService) {

        var respuesta = entidadBancariaService.delete();

        respuesta.success(function (data) {
            $scope.entidadBancaria = data;
        });
    }]);
