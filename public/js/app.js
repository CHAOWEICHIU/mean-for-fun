'use strict'

angular.module('myApp', ['ngRoute'])
	.config(config)
	// .run(run)

function config($routeProvider){
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