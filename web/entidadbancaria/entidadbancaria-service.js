
function EntidadBancariaService($http) {
    this.list = function () {
        var respuesta = $http({
            method: "GET",
            url: "/banco-api/api/entidadBancaria"
        });

        return respuesta;
    }

    this.get = function (idEntidadBancaria) {
        var respuesta = $http({
            method: "GET",
            url: "/banco-api/api/entidadBancaria/" + idEntidadBancaria
        });
        return respuesta;
    }

    this.delete = function (idEntidadBancaria) {

        var respuesta = $http({
            method: "DELETE",
            url: "/banco-api/api/entidadBancaria/" + idEntidadBancaria
        });
        return respuesta;
    }

    this.insert = function (entidadBancaria) {
        var respuesta = $http({
            method: "POST",
            url: "/banco-api/api/entidadBancaria",
            data: entidadBancaria
        });
        return respuesta;
    }
}

app.service("entidadBancariaService", EntidadBancariaService);
