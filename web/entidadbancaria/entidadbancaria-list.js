

app.controller("ListController", ['$scope', '$http', 'entidadBancariaService', function ($scope, $http, entidadBancariaService) {

        var respuesta = entidadBancariaService.list();

        respuesta.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

    }]);



