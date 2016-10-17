angular.module('myApp').controller('WeatherCtrl', WeatherCtrl)

function WeatherCtrl($http, $scope){
	var vm = this;
	var url = 'https://ccw-dashboard.herokuapp.com/api/weather'
	this.greeting = 'hello from weather ctrl'

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