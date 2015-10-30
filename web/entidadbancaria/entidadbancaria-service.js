
function EntidadBancariaService($http, $routeParams){
    this.list = function (){
        var respuesta = $http(config = {
            method: "GET",
            url: "/banco-api/api/entidadBancaria"
        });
    return respuesta;
    }
    
    this.get = function(){
        var idEntidadBancaria = $routeParams.idEntidadBancaria;
        
        var respuesta = $http(config = {
            method: "GET",
            url: "/banco-api/api/entidadBancaria/" + idEntidadBancaria
        });
        return respuesta;
    }
    
    this.delete = function (){
        var idEntidadBancaria = $routeParams.idEntidadBancaria;
        
        var respuesta = $http(config = {
            method: "DELETE",
            url: "/banco-api/api/entidadBancaria/" + idEntidadBancaria
        });
        return respuesta;
    }
    
    this.insert = function (){
        var respuesta = $http(config = {
            
        });
    }
}

app.service("entidadBancariaService",EntidadBancariaService);
