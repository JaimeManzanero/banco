

app.controller("ListController", ['$scope', 'entidadBancariaService', function ($scope, entidadBancariaService) {

        var respuesta = entidadBancariaService.list();

        respuesta.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

    }]);



