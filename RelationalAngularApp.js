var app=angular.module('RelationalAngularApp',[]);

app.controller('MainAppController',['$http', '$scope',
function($http, $scope){
	//$scope.toDo=['First task to do', 'second task to do'];
	$scope.toDo='';
	$http.get('https://bee1f3cf-4500-40a0-8cb4-0449b3c7d633.mock.pstmn.io/todos')
	.then((response)=>{
		$scope.toDo=response.data;
	},(response)=>{
		console.error(response);
	}
	);
	
	
	
}]);
