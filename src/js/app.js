'use strict';

/**
 * Module declaration
 */
var app = angular.module( 'app', [ 'ngMaterial' ] );

/**
 * Main controller
 * @dependency $scope
 */
app.controller("MainController", [ '$scope',
    function ($scope){
        $scope.todo = "testando";
    }
]);


/**
 * Run directly after load
 */
app.run([ function (){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBCXSqopJcZXxi4t5x_FPdBkZytzye7QcM",
        authDomain: "todo-list-a20d9.firebaseapp.com",
        databaseURL: "https://todo-list-a20d9.firebaseio.com",
        storageBucket: "todo-list-a20d9.appspot.com",
    };
    firebase.initializeApp(config);



}]);