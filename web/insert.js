

var app = angular.module("app", []);


app.controller("InsertController", InsertController);

function InsertController($scope, $http){
    
    function getParameterByName(name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)",
                regex = new RegExp(regexS),
                results = regex.exec(window.location.search);
        if (results == null) {
            return "";
        } else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }
    
    var entidadBancaria = {
        nombre: getParameterByName("nombre"),
        codigoEntidad: getParameterByName("codigo"),
        direccion: getParameterByName("direccion"),
        cif: getParameterByName("cif")
    }
    
    $http({
            method: "POST",
            url: "/banco-api/api/entidadBancaria/",
            data: entidadBancaria
            
        }  
    ).success(function (data, status, headers, config) {
        alert("Insertado");
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
}

