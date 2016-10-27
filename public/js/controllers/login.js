angular.module('myApp')
	.controller('LoginCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
		console.log('login ctrl')


		var vm = this

		vm.user = ''
		vm.getUserInfo = ()=>{
			console.log('user!')
			vm.user = {name: 'cw'}



			$http.get('http://localhost:3000/auth/user')
				.then((res)=>{
					console.log(res)
			})
		}
		
	}])