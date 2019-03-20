var app=angular.module('RelationalAngularApp',['ngRoute','MainAppServiceModule', 'ProductInputForm']);
app.config(['$routeProvider',($routeProvider)=>{
	$routeProvider.when('/productForm',{
		template:'<product-input></product-input>'
	});
}]).controller('MainAppController',[ 
'$scope', 
'MainAppHttpService',
function( 
	$scope, MainAppHttpService){
		$scope.toDo='';
		var testUrl='https://bee1f3cf-4500-40a0-8cb4-0449b3c7d633.mock.pstmn.io/todos';
		var gtd=MainAppHttpService.getTodos(testUrl);
		gtd.then((response)=>{
			$scope.toDo=response.data;
		},(response)=>{
			console.error(response);
		}

	);
	/*$scope.toDo={
		"task1":{
		"description": "Create basic html",
		"timeToComplete": 10,
		"timeUnit":"minutes"
		},
		"task2": {
		"description": "Create app.js as the basic app file",
		"timeToComplete": 1,
		"timeUnit":"hours"
		},
		"task3": {
		"description": "Create .js file to demonstrate service",
		"timeToComplete": 2,
		"timeUnit":"hours"
		}
		};*/
}]);
