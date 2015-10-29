
app.config(['$routeProvider',function($routeProvider) {
   
 
  $routeProvider.when('/entidadbancaria/list', {
    templateUrl: "./entidadbancaria/entidadbancaria-list.html",
    controller: "ListController"
  });
  
  $routeProvider.when('/entidadbancaria/get/:idEntidadBancaria', {
      templateUrl: "./entidadbancaria/entidadbancaria-get.html",
      
  });
   
  $routeProvider.otherwise({
        redirectTo: '/'
  });   
 
}]);
