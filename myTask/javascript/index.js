/*var app = angular.module("myApp", ["ngRoute"]);
app.config.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : 'myTask.html'
    })
    .when("/myTaskExecute", {
        templateUrl : 'myTaskExecute.html'
    })
    .when("/myTaskFinished", {
        templateUrl : 'myTaskFinished.html'
    .otherwise({redirectTo:'/'});    
    });
});*/

function changHeaderColor(){
                   document.getElementsByClassName("myTask").className="myTask2";
 }