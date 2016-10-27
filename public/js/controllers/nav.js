angular.module('myApp')
	.controller('NavCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
		

		var vm = this
		vm.activeTab = '/'
		
		vm.linkTo = (url)=>{
			vm.activeTab = url
			$location.path(url)
		}
		
	}])