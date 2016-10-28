angular.module('myApp')
	.controller('LoginCtrl', ['$scope', '$location', '$http', 'AuthFactory', function ($scope, $location, $http, AuthFactory) {
		

		var vm = this

		vm.user = ''
		vm.getUserInfo = ()=>{
		
			$http({
			  method: 'GET',
			  url: 'http://localhost:3000/auth/user'
			}).then(function successCallback(response) {
			    console.log(response)
			    // this callback will be called asynchronously
			    // when the response is available
			  }, function errorCallback(response) {
			    console.log(response)
			  });



			// $http.get('http://localhost:3000/auth/user')
			// 	.then((res)=>{
			// 		console.log(res)
			// })
		}

		vm.changeLoginStatus = ()=>{
			AuthFactory.isLoggedIn = true
			console.log('is log in ',AuthFactory.isLoggedIn)
		}

		
	}])

