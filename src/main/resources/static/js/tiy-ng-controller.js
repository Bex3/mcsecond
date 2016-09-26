angular.module('TIYMakeChocolateApp', [])
   .controller('SampleController', function($scope, $http, $timeout) { //Can get these items bc angular injects it for us

//        $scope.testValue = "testing here";
//            console.log($scope.testValue);
//            console.log("Testing");

              $scope.makeArray = function(arraySize) {
                    var returnArray = [];
                    for (var i = 0; i < arraySize; i++) {
                        returnArray.push(i);
                    }
                    return returnArray;
              }

              $scope.makeNewArray = function(arraySize) {
                    var returnArray = [];
                    for (var i = 0; i < arraySize; i++) {
                        returnArray.push(i);
                    }
                    return returnArray;
              }

                       $scope.chocoMaker = function(smalls, bigs, goal) {
                            console.log("Trying to make some chocolate")

                            $http.get("/makeChocolate.json?smalls="+ smalls + "&bigs=" + bigs +"&goal=" + goal)
                                .then(
                                    function successCallback(response) {
                                            console.log(response.data);
                                            console.log("made chocolate");
                                            $scope.mySolution = response.data;

                                            $scope.smalls = $scope.smalls - $scope.mySolution.smalls;
                                            $scope.bigs = $scope.bigs - $scope.mySolution.bigs;

                                    },
                                    function errorCallback(response) {
                                        console.log("Unable to get data");
                                    });
                                    console.log ("Done with the promise");
                        };



    });

