//Needs switching over to using services and reconciling "angular_functions.php" with "functions.php"
chartsApp.controller('DataExplorerCtrl',['$scope','$http',function($scope,$http){
  $scope.formData = {};

  $scope.formSubmit = function (){
    var formClone = angular.copy($scope.formData);

    formClone.startDate = (JSON.stringify(formClone.startDate)).substr(1,10);

    formClone.endDate = (JSON.stringify(formClone.endDate)).substr(1,10);

    console.log('submitting...');
    $http({
      method: 'POST',
      url: 'angular_functions.php',
      data: formClone,
      headers: {'Content-type' : 'application/x-www-form-urlencoded'}
    }).success(function(response){
      $scope.success = response.data;
      $scope.stats = response.stats.total_duration;
      console.log(JSON.stringify(response.data));
    });
  };
}]);