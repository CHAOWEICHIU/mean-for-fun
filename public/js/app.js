'use strict'

angular.module('myApp', ['ngRoute'])
	.config(config)
	// .run(run)

function config($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/weather.html',
			controller: 'WeathersCtrl',
			controllerAs: 'vm',
		})
}

angular.module('myApp')
	.controller('WeathersCtrl', ['$scope', function ($scope) {
		console.log('WeathersCtrl')
	}])