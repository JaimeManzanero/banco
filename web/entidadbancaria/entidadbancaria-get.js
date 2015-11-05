

app.controller("GetController", ['$scope', '$routeParams', 'entidadBancariaService',function ($scope, $routeParams, entidadBancariaService) {
        var idEntidadBancaria = $routeParams.idEntidadBancaria;
        var respuesta = entidadBancariaService.get(idEntidadBancaria);
        
        respuesta.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

    }]);