'use strict';

/**
 * Module declaration
 */
var app = angular.module( 'app', [ 'ngMaterial', 'firebase' ] );

/**
 * Main controller
 * @dependency $scope
 */
app.controller("MainController", [ '$scope', '$firebaseObject', '$firebaseAuth',
    function ($scope, $firebaseObject, $firebaseAuth){
        var ref = firebase.database().ref();

        // create an instance of the authentication service
        var auth = $firebaseAuth();
        console.log(auth);

        // login with Facebook
        auth.$signInWithEmailAndPassword("ivanpauletti@gmail.com", 'abc001').then(function(authData) {
            console.log("Logged in as:", authData.uid);

            // download the data into a local object
            var syncObject = $firebaseObject(ref);

            // synchronize the object with a three-way data binding
            // click on `index.html` above to see it used in the DOM!
            syncObject.$bindTo($scope, "todo");
        }).catch(function(error) {
            console.log("Authentication failed:", error);
        });


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