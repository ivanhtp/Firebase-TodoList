// Include app dependency on ngMaterial

var app = angular.module( 'app', [ 'ngMaterial' ] );

app.controller("MainController", [ '$scope',
    function ($scope){
        $scope.todo = "testando";
    }
]);