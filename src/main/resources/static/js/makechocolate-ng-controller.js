angular.module('MakeChocolateAngularApp', [])
   .controller('SampleController', function($scope, $http, $timeout) {

        $scope.makeArray = function(arraySize) {
            var returnArray = [];
            for (var i = 0; i < arraySize; i++) {
                returnArray.push(i);
            }
            return returnArray;
        }


        $scope.getNumSmallsAndBigs = function(numBig, numSmall, goal) {
            console.log("In getNumSmallsAndBigs function in ng controller");

            $http.get("/getCoco.json?numBig=" + numBig + "&numSmall=" + numSmall + "&goal=" + goal)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.mySolution = response.data;
                        if ($scope.mySolution.hasSolution == false) {
                            $scope.showNoSolution = true;
                        } else {
                            $scope.showNoSolution = false;

                            $scope.inputNumBigs = $scope.inputNumBigs - $scope.mySolution.bigs;
                            $scope.inputNumSmalls = $scope.inputNumSmalls - $scope.mySolution.smalls;

                        }
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });
        }



        var animate = function() {


            console.log("animate is running!");



        }

        $scope.factoryName = "The Chocolate Factory";
        $scope.showNoSolution = false;

        console.log("ng controller initialized!");




    });