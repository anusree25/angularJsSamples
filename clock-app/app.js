var module = angular.module("clockapp",[]);
module.controller("timeCtlr",getCurrentTime);

function getCurrentTime($scope){
    var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();     
    $scope.updateTime = function(){
        console.log("Button clicked");
        var currentDate = new Date();
        $scope.timeString = currentDate.toTimeString();
    }
}