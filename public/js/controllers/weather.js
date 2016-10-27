angular.module('myApp').controller('WeatherCtrl', WeatherCtrl)

WeatherCtrl.$inject = ['$http', '$scope'];

function WeatherCtrl($http, $scope){
	console.log('weather ctrl')
	var vm = this;
	var url = 'https://ccw-dashboard.herokuapp.com/api/weather'
	
	





	$scope.$watch('vm.zipcode', (newvalue, oldvalue)=>{
		if(checkZipCode(newvalue)){
			httpReq(newvalue)
		} else {
			vm.name = '??'
		}
		
	})
	function checkZipCode(input){
		let output = String(input).split('')
		if(output.length === 5)return true
		return false
	}
	vm.res = 'not yet'
	
	var httpReq = function(zipcode){
		console.log(zipcode)
		$http({
			method: 'GET',
			url: `${url}?zip=${zipcode}`
		})
		.success(function(d){ 
			console.log()
			vm.name = d.name
			vm.res = 'Yes'
		})
	    .error(function(d){ 
	    	vm.res = 'Nope'
	    });	
	}
	

	

	
}