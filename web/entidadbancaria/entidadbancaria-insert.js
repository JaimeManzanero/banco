
app.controller("InsertController", ["$scope", "entidadBancariaService", function ($scope, entidadBancariaService){
    
    $scope.entidadBancaria = {
        nombre: "",
        codigoEntidad: "",
        direccion: "",
        cif: ""
    };
    
    $scope.insertar = function(){
        
        var response = entidadBancariaService.insert($scope.entidadBancaria);
        
        response.success(function (data) {
            $scope.entidadBancaria = data;
            alert("Entidad insertada correctamente!");
        }).error(function (data, status) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        }); 
    };
    
}]);

