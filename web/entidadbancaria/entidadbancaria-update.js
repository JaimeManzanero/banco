
app.controller("UpdateController", ["$scope", "$routeParams", "entidadBancariaService", function ($scope, $routeParams, entidadBancariaService){
        
    var idEntidadBancaria = $routeParams.idEntidadBancaria;
    entidadBancariaService.get(idEntidadBancaria).success(function (data) {
        $scope.entidadBancaria = data;
    });
    
    $scope.entidadBancaria = {
        idEntidadBancaria: "",
        nombre: "",
        codigoEntidad: "",
        direccion: "",
        cif: ""  
    };

    $scope.actualizar = function () {
        var response = entidadBancariaService.update($scope.entidadBancaria);
        
        response.success(function (data){
            $scope.entidadBancaria = data;
            alert("Entidad actualizada correctamente!");
        }).error(function (data, status) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        }); 
    }
}]);