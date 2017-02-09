var app = angular.module("httpServiceApp",[]);
app.controller("httpServiceAppController",httpServiceAppController);

function httpServiceAppController($http){
    $http.get("localhost:8080/rest/todos")
    .then(function(response){
        console.log(response.data);
        this.todos = response.data;    
      });
   

}