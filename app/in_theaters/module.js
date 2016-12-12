(function(angular){
	angular.module('moviecat.theaters',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:'./in_theaters/view.html',
			controller:'TheatersController'
		})
	}])
	.controller('TheatersController',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
		$http({
			method:'GET',
			url:'./in_theaters/data.json'
		}).then(function(response){
			console.log(response.data);
			$scope.movie = response.data;
		},function(){

		});
	}])



})(angular);