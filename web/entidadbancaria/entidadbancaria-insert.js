
app.controller("InsertController", ["$scope", "entidadBancariaService", function ($scope, entidadBancariaService){
    
    $scope.entidadBancaria = {
        nombre: "",
        codigoEntidad: "",
        direccion: "",
        cif: ""
    }
    
    $scope.insertar = function(){
        var response = entidadBancariaService.insert($scope.entidadBancaria);
        
        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        }); 
    };
    
}]);

