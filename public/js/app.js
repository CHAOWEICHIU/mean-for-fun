'use strict'

angular.module('myApp', ['ngRoute'])
	.config(config)
	.run(run)



function config($routeProvider, $httpProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/dashboard/index.html',
			controller: 'DashboardCtrl',
			controllerAs: 'vm'
		})
		.when('/weather', {
			templateUrl: 'views/dashboard/weather.html',
			controller: 'WeatherCtrl',
			controllerAs: 'vm'
		})
		.when('/login', {
			templateUrl: 'views/dashboard/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'vm'
		})

	
}

function run($http, $rootScope, AuthFactory){
	



	$rootScope.$on('$routeChangeStart', (event, nextRoute, previousRoute)=>{
		
		$http.get('http://localhost:3000/auth/user')
			.then((res)=>{
				AuthFactory.isLoggedIn = true
			})
			.catch((err)=>{
				AuthFactory.isLoggedIn = false
			})



	})
}