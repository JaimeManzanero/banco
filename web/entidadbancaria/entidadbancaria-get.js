

app.controller("GetController", ['$scope', '$http', 'entidadBancariaService',function ($scope, $http, entidadBancariaService) {
        
        var respuesta = entidadBancariaService.get();
        
        respuesta.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

    }]);