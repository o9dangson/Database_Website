var mainPageApp = angular.module('mainPageApp', []);

mainPageApp.controller('MainPageController', [ '$scope', function ($scope) {
    $scope.testVariable = "Nothing right now."
    $scope.testing = function() {
        $scope.testVariable = "Success!";
    };

    $scope.ListOfObjects = [{name:'Ben'}];
    $scope.rowInfo = { GENUS:'Old_Genus_name', SPECIES:'Old_Species_name', COMNAME: 'Old_Common_Name'};

    $scope.SearchResultObjects = [ {ATTRIBUTE: 'Attribute Value'} ];
    $scope.update = function(objList) {
        $scope.ListOfObjects = objList;
    };
    $scope.update2 = function(objList){
        $scope.SearchResultObjects = objList;
    };

    $scope.showDetails = function(index){
        $scope.rowInfo = $scope.ListOfObjects[index];
        console.log("Row Info: " + $scope.rowInfo.GENUS + '\n' + $scope.rowInfo.SPECIES + '\n' + $scope.rowInfo.COMNAME);
    };
}]);