'use strict'

angular.module('myApp', ['ngRoute'])
	.config(config)


function config($routeProvider, $httpProvider){
	
	$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	// console.log($httpProvider.defaults.headers)
	
	$routeProvider
		.when('/', {
			templateUrl: 'views/dashboard/index.html',
			controller: 'DashboardCtrl',
			controllerAs: 'vm',
		})
		.when('/weather', {
			templateUrl: 'views/dashboard/weather.html',
			controller: 'WeatherCtrl',
			controllerAs: 'vm',	
		})

	
}

// function run($http){
// 	console.log('hiii')
// 	$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// }